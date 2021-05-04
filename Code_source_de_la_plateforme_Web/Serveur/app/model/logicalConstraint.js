const Transition = require('./transition');

/**
 * Cette classe sert de representation interne des contraintes logiques de la base donnees.
 * Elle est utilisee pour manipuler l'information de la structure dans le modele.
 */
class LogicalConstraint extends Transition {
    constructor(i_id, o_expectedAnswerBySubQuestions ) {
        super();
        this.i_id = i_id;
        this.o_expectedAnswerBySubQuestions = o_expectedAnswerBySubQuestions;
    }

    /**
     * Fonction pour lire l'objet depuis le format de la base de donnees.
     *
     * @param { Object } o_dbInstance Instance de la base de donnees de l'objet a reconvertir
     * @return { LogicalConstraint } Instance de la classe LogicalConstraint equivalente a l'objet JSON sous la
     *                      representation de la base de donnees.
     */
    static fromDatabaseFormat(o_dbInstance) {
        let a_answerBySubQuestions = [];

        for (let i = 0; i < o_dbInstance.id_sous_questions.length; i++) {
            a_answerBySubQuestions.push({
                i_idSubQuestion: o_dbInstance.id_sous_questions[i],
                a_acceptedAnswers: o_dbInstance.reponses[i]
            })
        }

        return new LogicalConstraint(
            o_dbInstance.id_contrainte,
            a_answerBySubQuestions
        );
    }

    /**
     * Verifie si la contrainte est respectee par les reponses aux sous-questions
     *
     * @param { Object } o_answersBySubQuestions Reponses donnees par sous-question
     * @returns {boolean} Verification du respect de la contrainte
     */
    evaluateConstraint(o_answersBySubQuestions){
        let isValid = true;

        this.o_expectedAnswerBySubQuestions.forEach(constraint => {
            const answer = o_answersBySubQuestions[constraint.i_idSubQuestion];

            if (answer === undefined || answer === "") {
                throw "User didn't provide an answer for subQuestion " + constraint.i_idSubQuestion
                    + " so constraint " + this.i_id + " cannot be validated";
            }

            if (!(constraint.a_acceptedAnswers.includes(answer.toLowerCase())))
                isValid = false;
        });

        return isValid;
    }
}

module.exports = LogicalConstraint;