const Transition = require('./transition');

/**
 * Cette classe sert de representation interne des contraintes ponderees de la base donnees.
 * Elle est utilisee pour manipuler l'information de la structure dans le modele.
 */
class WeightedConstraint extends Transition {
    constructor(i_id, i_idQuestion, i_minConstraint, i_maxConstraint, o_subQuestionWeightInversion ) {
        super();
        this.i_id = i_id;
        this.i_idQuestion = i_idQuestion;
        this.i_minConstraint = i_minConstraint;
        this.i_maxConstraint = i_maxConstraint;
        this.o_subQuestionWeightInversion = o_subQuestionWeightInversion;
        // Voir la mise en garde dans la fonction evaluateConstraint(answers[])
        this.o_answerToValue = {
            "Fréquence" : {
                "toujours": 2,
                "souvent": 2,
                "parfois": 1,
                "jamais": 0
            },
            "Accord" : {
                "très en accord" : 2,
                "en accord" : 1,
                "neutre" : 0,
                "en désaccord" : -1,
                "très en désaccord" : -2
            }
        };
    }

    /**
     * Fonction pour lire l'objet depuis le format de la base de donnees.
     *
     * @param { Object } o_dbInstance Instance de la base de donnees de l'objet a reconvertir
     * @return { WeightedConstraint } Instance de la classe WeightedConstraint equivalente a l'objet JSON sous la
     *                      representation de la base de donnees.
     */
    static fromDatabaseFormat(o_dbInstance) {
        const o_subQuestionWeightInversion = {};

        o_dbInstance.id_sous_questions.forEach((i_subQuestionId, i_index) =>
            o_subQuestionWeightInversion[i_subQuestionId] = o_dbInstance.ponderations_inversees[i_index]
        );

        return new WeightedConstraint(
            o_dbInstance.id_contrainte,
            o_dbInstance.id_question,
            o_dbInstance.min_contrainte,
            o_dbInstance.max_contrainte,
            o_subQuestionWeightInversion
        );
    }

    /**
     * Verification du type de question auquel les reponses de l'utilisateur referent de façon a utilise le bon
     * dictionnaire reponse-valeur pour l'evaluation de la contrainte.
     *
     * @param a_answerStrings Liste des reponses de l'utilisateur
     * @returns {string} Type de la question repondue par l'utilisateur
     * @private
     */
    _findQuestionType(a_answerStrings){
        for (const [s_questionType, o_possibleAnswers] of Object.entries(this.o_answerToValue)) {
            if(a_answerStrings.every(s_answer => Object.keys(o_possibleAnswers).includes(s_answer.toLowerCase())))
                return s_questionType;
        }

        throw "Weighted constraint cannot be evaluated because of unkown answers within each question type categories";
    }

    /**
     * Verifie si la contrainte est respectee par la ponderation totale des reponses
     *
     * TODO: Potentiellement, faire cette verification par une requete SQL dans la BD plutot que de dédoubler les
     * TODO: donnees de la base de donnees dans le serveur et creer un asynchronisme potentielle entre les deux.
     * TODO: Ce raccourci a ete fait par manque de temps et non par bonne pratique. Aussi, on ne devrait pas se fier
     * TODO: que les reponses du client representent reellement le type de question puisqu'on peut les fausser.
     *
     * @param { Array<Object> } a_answers Reponses donnees aux sous-questions
     * @returns {boolean} Verification du respect de la contrainte
     */
    evaluateConstraint(a_answers){
        const a_answeredSubQuestions = Object.keys(a_answers);

        if(!Object.keys(this.o_subQuestionWeightInversion).every(i_subQuestionId => a_answeredSubQuestions.includes(i_subQuestionId)))
            return false;

        const a_relevantSubQuestionIds = Object.keys(this.o_subQuestionWeightInversion);

        const s_questionType = this._findQuestionType(Object.values(a_answers));

        let i_total = a_relevantSubQuestionIds.map(i_subQuestionId =>
            this.o_answerToValue[s_questionType][a_answers[i_subQuestionId].toLowerCase()] * (this.o_subQuestionWeightInversion[i_subQuestionId] ? -1 : 1)
        ).reduce((a, b) => a + b, 0);

        return this.i_minConstraint <= i_total && i_total <= this.i_maxConstraint;
    }
}

module.exports = WeightedConstraint;