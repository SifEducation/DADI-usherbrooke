const dbConfig = require("./dbConfig");
const { Pool } = require('pg');

// Creation du pool de connexion
const pool = new Pool({
    user:  dbConfig.USER,
    host: dbConfig.HOST,
    database: dbConfig.DATABASE,
    password: dbConfig.PASSWORD,
    port: dbConfig.PORT,
});

/**
 * Fonction de connexion sous le module node-postgres.
 */
function connect(){
    pool.connect((err, client, release) => {
        if (err)
            return console.error('Error acquiring client', err.stack);
    });
}

/**
 * Fonction de deconnexion sous le module node-postgres.
 */
function disconnect(){
    pool.end(() => {
        console.log('Connection pool was closed');
    });
}

module.exports = {
    pool: pool,
    connect: connect,
    disconnect: disconnect
};
