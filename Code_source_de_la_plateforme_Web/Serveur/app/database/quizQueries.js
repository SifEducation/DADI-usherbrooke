const connectionManager = require('./connectionManager');
const pool = connectionManager.pool;

/**
 * Recuperer les sous-questionnaires d'un questionnaire specifique de la base de donnees
 *
 * @param { number } i_idQuestionnaire Identifiant du questionnaire parent aux sous-questionnaires a
 *                                     recuperer dans la base de donnees
 * @param { number } i_level Niveau du sous-questionnaire
 * @return { Promise<Object[]> } Liste de representation JSON des sous-questionnaires dans la base de donnees
 */
function getSubQuestionnaires(i_idQuestionnaire, i_level) {
    const s_text = 'SELECT * FROM daadi.S_AfficherSousQuestionnaires($1, $2)';

    return pool.query(s_text, [i_idQuestionnaire, i_level])
        .then(o_res => o_res.rows)
        .catch(() => {
            throw 'Error fetching subquestionnaires of questionnaire : ' + i_idQuestionnaire + ' from database';
        });
}

/**
 * Recuperer les questions d'un sous-questionnaire specifique de la base de donnees
 *
 * @param { number } i_idSubQuestionnaire Identifiant du sous-questionnaire parent aux questions a
 *                                     recuperer dans la base de donnees
 * @returns { Promise<Object[]> } Liste de representation JSON des questions dans la base de donnees
 */
function getQuestions(i_idSubQuestionnaire) {
    const s_text = 'SELECT * FROM daadi.S_AfficherQuestions($1)';

    return pool.query(s_text, [i_idSubQuestionnaire])
        .then(o_res => o_res.rows)
        .catch(() => {
            throw 'Error fetching questions of subquestionnaire : ' + i_idSubQuestionnaire + ' from database';
        });
}

/**
 * Recuperer les sous-questions d'une question specifique de la base de donnees
 *
 * @param { number } i_idQuestion Identifiant d'une question parent aux sous-questions a
 *                                     recuperer dans la base de donnees
 * @returns { Promise<Object[]> } Liste de representation JSON des sous-questions dans la base de donnees
 */
function getSubQuestions(i_idQuestion) {
    const s_text = 'SELECT * FROM daadi.SousQuestion WHERE id_question = $1';

    return pool.query(s_text, [i_idQuestion])
        .then(o_res => o_res.rows)
        .catch(() => {
            throw 'Error fetching subquestions of question : ' + i_idQuestion + ' from database';
        });
}

/**
 * Recuperer le type des contraintes qui concerne une question donnee dans la base de donnee
 *
 * @param { number } i_idQuestion Identifiant de la question dont on veut determiner son type de contrainte
 * @returns { string } Renvoie "weighted" pour une contrainte ponderee, "logical" pour une contrainte logique
 */
function getQuestionConstraintType(i_idQuestion) {
    const s_text = 'SELECT * FROM daadi.S_VerifierSiContraintePonderee($1) AS isWeighted';

    return pool.query(s_text, [i_idQuestion])
        .then(o_res => o_res.rows[0].isweighted ? "weighted" : "logical")
        .catch(() => {
            throw 'Error fetching type of constraint for question : ' + i_idQuestion + ' from database';
        });
}

/**
 * Recuperer les contraintes ponderees de la base de donnees relatives a une question specifique
 *
 * @param { number } i_idQuestion Identifiant de la question concernee par les contraintes
 * @returns { Promise<Array> } Liste de representation JSON des contraintes ponderees pour la question
 *                             dans la base de donnees
 */
function getWeightedConstraints(i_idQuestion) {
    const s_text = 'SELECT * FROM daadi.S_AfficherContraintePonderees($1)';

    return pool.query(s_text, [i_idQuestion])
        .then(o_res => o_res.rows)
        .catch(() => {
            throw 'Error fetching weighted constraints of question : ' + i_idQuestion + ' from database';
        });
}

/**
 * Recuperer les contraintes logiques de la base de donnees relatives a une question specifique
 *
 * @param { number } i_idQuestion Identifiant de la question concernee par les contraintes
 * @returns { Promise<Object[]> } Liste de representation JSON des contraintes logiques pour la question
 *                             dans la base de donnees
 */
function getLogicalConstraints(i_idQuestion) {
    const s_text = 'SELECT * FROM daadi.S_AfficherContrainteLogiques($1)';

    return pool.query(s_text, [i_idQuestion])
        .then(o_res => o_res.rows)
        .catch(() => {
            throw 'Error fetching weighted constraints of question : ' + i_idQuestion + ' from database';
        });
}

/**
 * Recuperation des textes de retroaction et des ressources reliees a une contrainte dans la base de donnees
 *
 * @param { number } i_idConstraint Identifiant de la contrainte
 * @returns { Object } Objet javascript contenant toute l'information resultante de la validation de la contrainte
 */
function getValidatedConstraintResults(i_idConstraint) {
    const s_text = 'SELECT * FROM daadi.S_AfficherRetroactionContrainte($1)';

    return pool.query(s_text, [i_idConstraint])
        .then(o_res => o_res.rows[0])
        .catch(() => {
            throw 'Error fetching validated constraint ' + i_idConstraint + ' results from database';
        });
}

module.exports = {
    getSubQuestionnaires: getSubQuestionnaires,
    getQuestions: getQuestions,
    getSubQuestions: getSubQuestions,
    getQuestionConstraintType: getQuestionConstraintType,
    getWeightedConstraints: getWeightedConstraints,
    getLogicalConstraints: getLogicalConstraints,
    getValidatedConstraintResults: getValidatedConstraintResults
};
