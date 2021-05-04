/**
 * Declaration des configurations de Node-postgres
 * Pour les configurations du pool, se referer: https://node-postgres.com/api/pool
 */

module.exports = {
    USER: "" /* dadi_spec: nom de l'usager pour acces a la BD */,
    PASSWORD: "" /* dadi_spec: mot de passe pour acces a la BD */,
    HOST: "" /* dadi_spec: url d'acces a la BD */,
    DATABASE: "" /* dadi_spec: nom de la BD */,
    PORT: 5432,
    MAX: 20,
    IDLE_TIMEOUT_MILLIS: 30000,
    CONNECTION_TIMEOUT_MILLIS: 2000,
};