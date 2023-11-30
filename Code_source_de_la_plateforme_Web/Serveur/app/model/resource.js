const Transition = require('./transition');

/**
 * Cette classe sert de representation intermediaire des ressources entre le client et la base donnees.
 * Elle est utilisee pour manipuler l'information de la structure dans le modele.
 */
class Resource extends Transition {
    constructor(i_id, s_name, s_subTitle, s_duration, s_license, a_theme, s_description,
                a_tag, a_contexts, s_categorie, s_format, a_audiences, s_path ) {
        super();
        this.i_id = i_id;
        this.s_name = s_name;
        this.s_subTitle = s_subTitle;
        this.s_duration = s_duration;
        this.s_license = s_license;
        this.a_theme = a_theme;
        this.s_description = s_description;
        this.a_tag = a_tag;
        this.a_contexts = a_contexts;
        this.s_categorie = s_categorie;
        this.s_format = s_format;
        this.a_audiences = a_audiences;
        this.s_path = s_path;
    }

    /**
     * Fonction pour lire l'objet depuis le format de la base de donnees.
     *
     * @param { Object } o_dbInstance Instance de la base de donnees de l'objet a reconvertir
     * @return { Resource } Instance de la classe Resource equivalente a l'objet JSON sous la representation de la base de donnees.
     */
    static fromDatabaseFormat(o_dbInstance) {
        return new Resource(
            o_dbInstance.id_ressource,
            o_dbInstance.titre,
            o_dbInstance.sous_titre,
            o_dbInstance.temps_investi,
            o_dbInstance.type_licence,
            o_dbInstance.themes,
            o_dbInstance.description,
            o_dbInstance.etiquettes,
            o_dbInstance.contextes,
            o_dbInstance.categorie,
            o_dbInstance.format,
            o_dbInstance.publics_cibles,
            o_dbInstance.chemin
        );
    }
}

module.exports = Resource;