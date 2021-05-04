const Transition = require('./transition');

/**
 * Cette classe sert de representation intermediaire des questions entre le client et la base donnees.
 * Elle est utilisee pour manipuler l'information de la structure dans le modele.
 */
class Question extends Transition {
    constructor(i_id, i_idSubQuestionnaire, s_description, s_type, a_answers ) {
        super();
        this.i_id = i_id;
        this.i_idSubQuestionnaire = i_idSubQuestionnaire;
        this.s_description = s_description;
        this.s_type = s_type;
        this.a_subQuestions = [];
        this.a_answers = a_answers;
    }

    /**
     * Fonction pour lire l'objet depuis le format de la base de donnees.
     *
     * @param { Object } o_dbInstance Instance de la base de donnees de l'objet a reconvertir
     * @return { Question } Instance de la classe Question equivalente a l'objet JSON sous la
     *                      representation de la base de donnees.
     */
    static fromDatabaseFormat(o_dbInstance) {
        return new Question(
            o_dbInstance.id_question,
            o_dbInstance.id_sous_questionnaire,
            o_dbInstance.description,
            o_dbInstance.type,
            o_dbInstance.reponses
        );
    }

    /**
     * Ajoute une liste de sous-questions a une question
     *
     * @param { SubQuestion[] } a_subQuestions Liste de sous-questions a ajouter
     */
    addSubQuestions(a_subQuestions){
        this.a_subQuestions = a_subQuestions;
    }
}

module.exports = Question;