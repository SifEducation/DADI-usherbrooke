const Transition = require('./transition');

/**
 * Cette classe sert de representation intermediaire des questionnaires entre le client et la base donnees.
 * Elle est utilisee pour manipuler l'information de la structure dans le modele.
 */
class Questionnaire extends Transition {
    constructor(i_id, s_description, f_estimatedTime ) {
        super();
        this.i_id = i_id;
        this.s_description = s_description;
        this.f_estimatedTime = f_estimatedTime;
    }

    /**
     * Fonction pour lire l'objet depuis le format de la base de donnees.
     *
     * @param { Object } o_dbInstance Instance de la base de donnees de l'objet a reconvertir
     * @return { Questionnaire } Instance de la classe Questionnaire equivalente a l'objet JSON sous
     *                           la representation de la base de donnees.
     */
    static fromDatabaseFormat(o_dbInstance) {
        return new Questionnaire(
            o_dbInstance.id_questionnaire,
            o_dbInstance.description,
            o_dbInstance.temps_estime
        );
    }
}

module.exports = Questionnaire;