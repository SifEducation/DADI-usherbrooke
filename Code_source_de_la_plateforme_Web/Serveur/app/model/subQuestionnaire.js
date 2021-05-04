const Transition = require('./transition');

/**
 * Cette classe sert de representation intermediaire des sous-questionnaires entre le client et la base donnees.
 * Elle est utilisee pour manipuler l'information de la structure dans le modele.
 */
class SubQuestionnaire extends Transition {
    constructor(i_id, i_idQuestionnaire, s_description, i_level, a_components) {
        super();
        this.i_id = i_id;
        this.i_idQuestionnaire = i_idQuestionnaire;
        this.s_description = s_description;
        this.i_level = i_level;
        this.a_components = a_components;
    }

    /**
     * Fonction pour lire l'objet depuis le format de la base de donnees.
     *
     * @param { Object } o_dbInstance Instance de la base de donnees de l'objet a reconvertir
     * @return { SubQuestionnaire } Instance de la classe SubQuestionnaire equivalente a l'objet JSON sous la
     *                              representation de la base de donnees.
     */
    static fromDatabaseFormat(o_dbInstance) {
        return new SubQuestionnaire(
            o_dbInstance.id_sous_questionnaire,
            o_dbInstance.id_questionnaire,
            o_dbInstance.description,
            o_dbInstance.niveau,
            o_dbInstance.composantes
        );
    }
}

module.exports = SubQuestionnaire;