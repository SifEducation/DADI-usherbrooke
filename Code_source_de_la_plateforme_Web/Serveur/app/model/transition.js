/**
 * Cette classe sert a definir un interface pour les objets devant transitionner entre le format de
 * la base de donnees et le format de l'architecture Rest.
 */
class Transition {
    /**
     * Fonction pour lire l'objet depuis le format de la base de donnees.
     *
     * @param { Object } o_dbInstance Instance de la base de donnees de l'objet a reconvertir
     */
    static fromDatabaseFormat(o_dbInstance) {
        throw 'Unimplemented fromDatabaseFormat function from Transition class';
    }
}

module.exports = Transition;