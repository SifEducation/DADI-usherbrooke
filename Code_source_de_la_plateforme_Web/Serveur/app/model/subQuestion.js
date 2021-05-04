const Transition = require('./transition');

/**
 * Cette classe sert de representation intermediaire des sous-questions entre le client et la base donnees.
 * Elle est utilisee pour manipuler l'information de la structure dans le modele.
 */
class SubQuestion extends Transition {
    constructor(i_id, i_idQuestion, s_description ) {
        super();
        this.i_id = i_id;
        this.i_idQuestion = i_idQuestion;
        this.s_description = s_description;
    }

    /**
     * Fonction pour lire l'objet depuis le format de la base de donnees.
     *
     * @param { Object } o_dbInstance Instance de la base de donnees de l'objet a reconvertir
     * @return { SubQuestion } Instance de la classe SubQuestion equivalente a l'objet JSON sous la
     *                         representation de la base de donnees.
     */
    static fromDatabaseFormat(o_dbInstance) {
        return new SubQuestion(
            o_dbInstance.id_sous_question,
            o_dbInstance.id_question,
            o_dbInstance.description
        );
    }
}

module.exports = SubQuestion;