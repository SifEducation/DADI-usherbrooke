const express = require('express');
const router = express.Router();
const dbAPI = require('../database/dbAPI');

/**
 * Requete de recuperation des sous-questionnaires d'un questionnaire donne.
 *
 * @param { number } idQuestionnaire Identifiant du questionnaire parent des sous-questionnaires a recuperer
 */
router.get('/:idQuestionnaire', function (req, res, next) {
    const i_level = req.query.level;

    dbAPI.getSubQuestionnaires(req.params.idQuestionnaire, i_level)
        .then(a_subQuestionnaires => res.send(a_subQuestionnaires))
        .catch(next);
});

/**
 * Requete de recuperation des questions d'un sous-questionnaire.
 *
 * @param { number } idQuestionnaire Identifiant du questionnaire a recuperer
 * @param { number } idSousQuestionnaire Identifiant du sous-questionnaire a recuperer
 */
router.get('/:idQuestionnaire/:idSousQuestionnaire', function (req, res, next) {
    dbAPI.getQuestions(req.params.idSousQuestionnaire)
        .then(a_questions => res.send(a_questions))
        .catch(next);
});

/**
 * Requete d'envoi des reponses de l'utilisateur aux questions d'un sous-questionnaire.
 *
 * TODO LOGIN => Sauvegarde des reponses au profil de l'utilisateur
 *
 * @param { Object } token Token de validite identifiant l'utilisateur
 * @param { Object } reponse Object contenant les combinaison cle-valeurs questions, des sous-questions
 *                           et la reponse donnee
 */
router.post('/:idQuestionnaire/:idSousQuestionnaire', function (req, res, next) {

    dbAPI.getSubQuestionnaireFeedback(req.body)
        .then(feedback => res.send(feedback))
        .catch(next);
});

// TODO LOGIN
/**
 * Requete de recuperation de la progression de l'utilisateur.
 *
 * @param { Object } token: Token de validite identifiant l'utilisateur
 */
// router.get('/progression', function (req, res, next) {
//     res.send('Hello');
// });

module.exports = router;