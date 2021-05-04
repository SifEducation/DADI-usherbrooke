const Transition = require('./transition');

/**
 * Cette classe sert de representation intermediaire des retroactions, objectifs et resume des ressources entre le
 * client et la base donnees. Elle est utilisee pour manipuler l'information de la structure dans le modele.
 */
class Feedback extends Transition {
    constructor(a_messages, a_objectives, a_ressources ) {
        super();
        this.a_messages = a_messages;
        this.a_objectives = a_objectives;
        this.a_ressources = a_ressources;
    }

    /**
     * Fonction pour lire l'objet depuis le format de la base de donnees.
     *
     * @param { Object } o_dbInstance Instance de la base de donnees de l'objet a reconvertir
     * @return { Feedback } Instance de la classe Feedback equivalente a l'objet JSON sous la
     *                      representation de la base de donnees.
     */
    static fromDatabaseFormat(o_dbInstance) {
        const a_ressources = [];

        for (let i = 0; i < o_dbInstance.id_ressources.length; i++) {
            a_ressources.push({
                i_id: o_dbInstance.id_ressources[i],
                s_name: o_dbInstance.noms[i],
                s_format: o_dbInstance.formats[i]
            });
        }

        return new Feedback(
            o_dbInstance.description,
            o_dbInstance.messages,
            a_ressources
        );
    }
}

module.exports = Feedback;