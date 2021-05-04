const connectionManager = require('./connectionManager');
const pool = connectionManager.pool;

/**
 * Fonction ajoutant les conditions WHERE pertinente a la requete de ressource filtree
 *
 * @param s_filter Etiquette du type de filtre a appliquer sur la requete SQL
 * @param a_values Valeurs a inserer dans la requete
 * @param i_counter Compteur des valeurs a inserer dans la requete par node-postgres
 * @returns {string} Texte de la condition WHERE SQL a ajouter a la requete
 * @private
 */
function _getSQLConditionString(s_filter, a_values, i_counter){
    const a_queryCounters = a_values.map(_ => {
        const s_queryCounter = "$" + i_counter;
        i_counter++;
        return s_queryCounter;
    });

    switch(s_filter) {
        case "format":
            return "daadi.vw_Ressource.format = ANY(ARRAY[" + a_queryCounters + "]::VARCHAR[])";

        case "audiences":
            return "daadi.vw_Ressource.publics_cibles && ARRAY[" + a_queryCounters + "]::VARCHAR[]";

        case "themes":
            return "daadi.vw_Ressource.themes && ARRAY[" + a_queryCounters + "]::VARCHAR[]";

        case "tags":
            return "daadi.vw_Ressource.etiquettes && ARRAY[" + a_queryCounters + "]::VARCHAR[]";

        case "contexts":
            return "daadi.vw_Ressource.contextes && ARRAY[" + a_queryCounters + "]::VARCHAR[]";

        case "duration":
            return "daadi.vw_Ressource.temps_investi = ANY(ARRAY[" + a_queryCounters + "]::VARCHAR[])";

        case "license":
            return "daadi.vw_Ressource.type_licence = ANY(ARRAY[" + a_queryCounters + "]::VARCHAR[])";

        case "folder":
            return "daadi.DossierRessource.id_dossier = ANY(ARRAY[" + a_queryCounters + "]::INTEGER[])";

        default:
            throw "Unknown filter provided in get request for ressources";
    }
}

/**
 * Recupere l'ensemble des ressources de la base de donnees
 *
 * @param { Object } o_filter Objet contenant les filtres de recherche desires
 * @return { Promise<Object[]> } Liste de representation JSON des ressources de la base de donnees
 */
function getResources(o_filter) {
    let s_text = 'SELECT * FROM daadi.vw_Ressource';

    let a_queryValues = [];
    let i_valueCounter = 1;

    // Conversion des filtres en condition SQL et filtrage des filtres inutilises
    const sqlConditions = Object.entries(o_filter).map(([key, value]) => {
        if(value !== null) {
            const s_condition = _getSQLConditionString(key, value, i_valueCounter);
            i_valueCounter += value.length;
            a_queryValues = a_queryValues.concat(value.map(s_value => s_value.toLowerCase()));
            return s_condition;
        }
        return "";
    }).filter(value => value !== "");

    if(o_filter.folder !== null)
        s_text = s_text.concat(" JOIN daadi.DossierRessource USING (id_ressource)");

    if(sqlConditions.length != 0)
        s_text = s_text.concat(" WHERE ", sqlConditions.join(" AND "));

    if(o_filter.folder !== null)
        s_text = s_text.concat(" ORDER BY daadi.DossierRessource.ordre ASC");

    return pool.query(s_text, a_queryValues)
            .then(o_res => o_res.rows)
            .catch(e => {
                throw 'Error fetching resources from database';
            });
}

/**
 * Recuperer les informations d'une ressource specifique de la base de donnees
 *
 * @param { number } i_idResource Identifiant de la ressource a recuperer de la base de donnees
 * @return { Promise<Object> } Representation JSON de la ressource demandee de la base de donnees
 */
function getResource(i_idResource) {
    const s_text = 'SELECT * FROM daadi.vw_Ressource WHERE id_ressource = $1';

    return pool.query(s_text, [i_idResource])
        .then(o_res => o_res.rows[0])
        .catch(() => {
            throw 'Error fetching resource : ' + i_idResource + ' from database';
        });
}

/**
 * Recuperer les etiquettes possibles pour une ressource au sein de la base donnees
 *
 * @return { Promise<String[]> } Representation JSON de la liste des etiquettes
 */
function getTags() {
    const s_text = 'SELECT * FROM daadi.Etiquette';

    return pool.query(s_text, [])
        .then(o_res => o_res.rows.map(o_tag => o_tag.nom))
        .catch(() => {
            throw 'Error fetching tags from database';
        });
}

module.exports = {
    getResources: getResources,
    getResource: getResource,
    getTags: getTags
};
