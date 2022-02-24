/**
 * Ce module sert a separer le serveur du module node-postgres en terme de dependances de facon a permettre
 * a des versions futures du logiciel de pivoter vers d'autres modules que node-postgres ou d'autres base de donnees
 * selon le besoin.
 */

const connectionManager = require('./connectionManager');
const quizQueries = require('./quizQueries');
const SubQuestionnaire = require('../model/subQuestionnaire');
const Question = require('../model/question');
const SubQuestion = require('../model/subQuestion');
const WeightedConstraint = require('../model/weightedConstraint');
const LogicalConstraint = require('../model/logicalConstraint');
const Feedback = require('../model/feedback');
const resourceQueries = require('./resourceQueries');
const Resource = require('../model/resource');

/**********************************
 * Fonction de connexion
 **********************************/

/**
 * Wrapper de la fonction de connection a la base de donnees
 */
function connect() {
    connectionManager.connect();
}

/**
 * Wrapper de deconnexion de la base de donnees
 */
function disconnect() {
    connectionManager.disconnect();
}

/**********************************
 * Requete de questionnaire
 **********************************/

/**
 * Recuperer les sous-questionnaires d'un questionnaire specifique de la base de donnees
 *
 * @param { number } i_idQuestionnaire Identifiant du questionnaire parent aux sous-questionnaires a
 *                                     recuperer dans la base de donnees
 * @param { number } i_level Niveau du sous-questionnaire
 * @return { Promise<SubQuestionnaire[]> } Liste de representations internes des sous-questionnaires dans la base de donnees
 */
function getSubQuestionnaires(i_idQuestionnaire, i_level) {
    return quizQueries.getSubQuestionnaires(i_idQuestionnaire, i_level)
        .then(a_subQuestionnaires => a_subQuestionnaires.map(o_subQuestionnaire => SubQuestionnaire.fromDatabaseFormat(o_subQuestionnaire)))
        .catch(s_error => {
            throw s_error;
        });
}

/**
 * Recuperer les sous-questions d'une question specifique de la base de donnees
 *
 * @param { number } i_idQuestion Identifiant de la question parent aux sous-questions a
 *                                     recuperer dans la base de donnees
 * @return { Promise<SubQuestion[]> } Liste de representations internes des sous-questions dans la base de donnees
 */
function getSubQuestions(i_idQuestion) {
    return quizQueries.getSubQuestions(i_idQuestion)
        .then(a_subQuestions =>
            a_subQuestions.map(o_subQuestion => SubQuestion.fromDatabaseFormat(o_subQuestion))
        )
        .catch(s_error => {
            throw s_error;
        });
}


/**
 * Recuperer les questions d'un sous-questionnaire specifique de la base de donnees
 *
 * @param { number } i_idSubQuestionnaire Identifiant du sous-questionnaire parent aux questions a
 *                                     recuperer dans la base de donnees
 * @return { Promise<Question[]> } Liste de representations internes des questions dans la base de donnees
 */
function getQuestions(i_idSubQuestionnaire) {
    return quizQueries.getQuestions(i_idSubQuestionnaire)
        .then(a_questions => {
            // Recuperation des sous-questions pour chaque question
            const a_questionsWithSubQuestions = a_questions.map(o_question => {
                const question = Question.fromDatabaseFormat(o_question);
                return getSubQuestions(question.i_id)
                    .then(a_subQuestions => {
                        question.addSubQuestions(a_subQuestions);
                        return question;
                    })
                    .catch(s_error => {
                        throw s_error;
                    });
            });

            // Realisation des promesses de recuperation des sous-questions de chaque question
            return Promise.all(a_questionsWithSubQuestions)
                .then(a_questions => a_questions)
                .catch(s_error => {
                    throw s_error;
                });
        })
        .catch(s_error => {
            throw s_error;
        });
}

/**
 * Recuperer le type des contraintes qui concerne une question donnee dans la base de donnee
 *
 * @param { number } i_idQuestion Identifiant de la question dont on veut determiner son type de contrainte
 * @returns { string } Type des contraintes rattachees a une question donnee
 * @private
 */
function _getQuestionConstraintType(i_idQuestion) {
    return quizQueries.getQuestionConstraintType(i_idQuestion)
        .then(s_type => s_type)
        .catch(s_error => {
            throw s_error;
        });
}

/**
 * Recuperer les contraintes ponderees pour une question specifique de la base de donnees
 *
 * @param { number } i_idQuestion Identifiant de la question dont on veut recuperer les contraintes ponderees
 * @returns { Promise<WeightedConstraint[]> } Listes des contraintes ponderees reliees a la question fournie
 * @private
 */
function _getWeightedConstraints(i_idQuestion) {
    return quizQueries.getWeightedConstraints(i_idQuestion)
        .then(a_weightedConstraints =>
            a_weightedConstraints.map(o_weightedConstraint => WeightedConstraint.fromDatabaseFormat(o_weightedConstraint))
        )
        .catch(s_error => {
            throw s_error;
        });
}

/**
 * Recuperer les contraintes ponderees pour une question specifique de la base de donnees
 *
 * @param { number } i_idQuestion Identifiant de la question dont on veut recuperer les contraintes ponderees
 * @returns { Promise<WeightedConstraint[]> } Listes des contraintes ponderees reliees a la question fournie
 * @private
 */
function _getLogicalConstraints(i_idQuestion) {
    return quizQueries.getLogicalConstraints(i_idQuestion)
        .then(a_logicalConstraints =>
            a_logicalConstraints.map(o_logicalConstraint => LogicalConstraint.fromDatabaseFormat(o_logicalConstraint))
        )
        .catch(s_error => {
            throw s_error;
        });
}

/**
 * Recuperation des identifiants des contraintes ponderees qui ont ete respectees par les reponses aux sous-questions
 * fournies par l'utilisateur pour une question donnee
 *
 * @param { number } i_idQuestion Identifiant de la question dont on veut recuperer les
 *                                  identifiants des contraintes respectees
 * @param  { Object } o_answerToQuestion Dictionnaire des reponses fournies aux sous-questions
 * @returns { Promise<number[]> } Liste des identifiants des contraintes respectees par les reponses
 * @private
 */
function _getFulfilledWeightedConstraintIdsOfQuestion(i_idQuestion, o_answerToQuestion) {
    return _getWeightedConstraints(i_idQuestion)
        .then(a_weightedConstraints => {
            return a_weightedConstraints.filter(o_weightedConstraint =>
                o_weightedConstraint.evaluateConstraint(o_answerToQuestion))
                .map(o_weightedConstraint => o_weightedConstraint.i_id);
        }).catch(s_error => {
            throw s_error;
        });
}

/**
 * Recuperation des identifiants des contraintes logiques qui ont ete respectees par les reponses aux sous-questions
 * fournies par l'utilisateur pour une question donnee
 *
 * @param { number } i_idQuestion Identifiant de la question dont on veut recuperer les
 *                                  identifiants des contraintes respectees
 * @param  { Object } o_answerToQuestion Dictionnaire des reponses fournies aux sous-questions
 * @returns { Promise<number[]> } Liste des identifiants des contraintes respectees par les reponses
 * @private
 */
function _getFulfilledLogicalConstraintIdsOfQuestion(i_idQuestion, o_answerToQuestion) {
    return _getLogicalConstraints(i_idQuestion)
        .then(a_logicalConstraints =>
            a_logicalConstraints.filter(o_logicalConstraint =>
                o_logicalConstraint.evaluateConstraint(o_answerToQuestion))
                .map(o_logicalConstraint => o_logicalConstraint.i_id)
        ).catch(s_error => {
            throw s_error;
        });
}

/**
 * Recuperation des identifiants des contraintes qui ont ete respectees par les reponses aux sous-questions
 * fournies par l'utilisateur pour une question donnee
 *
 * @param { number } i_idQuestion Identifiant de la question dont on veut recuperer les
 *                                  identifiants des contraintes respectees
 * @param  { Object } o_answerToQuestion Dictionnaire des reponses fournies aux sous-questions
 * @returns { Promise<number[]> } Liste des identifiants des contraintes respectees par les reponses
 * @private
 */
function _getFulfilledConstraintIdsOfQuestion(i_idQuestion, o_answerToQuestion) {
    return _getQuestionConstraintType(i_idQuestion)
        .then(s_constraintType => {
            if (s_constraintType === "weighted") {
                return _getFulfilledWeightedConstraintIdsOfQuestion(i_idQuestion, o_answerToQuestion)
                    .then(a_weightedConstraintIds => a_weightedConstraintIds)
                    .catch(s_error => {
                        throw s_error;
                    });
            } else {
                return _getFulfilledLogicalConstraintIdsOfQuestion(i_idQuestion, o_answerToQuestion)
                    .then(a_logicalConstraintIds => a_logicalConstraintIds)
                    .catch(s_error => {
                        throw s_error;
                    });
            }
        })
        .catch(s_error => {
            throw s_error;
        });
}

/**
 * Recuperation des identifiants de contraintes remplies par les reponses au sous-questionnaire
 *
 * @param { Object } o_answerToSubQuestionnaire Object contenant les reponses aux sous-questions pour chaque question
 *                                              du sous-questionnaire
 * @returns {Promise<number[]>} Liste des identifiants des contraintes remplies par les reponses
 * @private
 */
function _getFulfilledConstraintIds(o_answerToSubQuestionnaire){
    return Promise.all(
            Object.entries(o_answerToSubQuestionnaire).map(([i_idQuestion, o_answerToSubQuestions]) =>
                _getFulfilledConstraintIdsOfQuestion(i_idQuestion, o_answerToSubQuestions)
            )
        )
        .then(a_constraintIdsByQuestion => a_constraintIdsByQuestion.flat())
        .catch(s_error => {
            throw s_error;
        });
}

/**
 * Recuperation des elements de retroaction pour une contrainte donnee qui a ete remplie
 *
 * @param { number } i_constraintId Identifiant de la contrainte qui a ete remplie
 * @returns { Feedback } Representation interne de la retroaction d'une contrainte remplie
 * @private
 */
function _getConstraintFeedback(i_constraintId){
    return quizQueries.getValidatedConstraintResults(i_constraintId)
        .then(o_results => Feedback.fromDatabaseFormat(o_results))
        .catch(s_error => {
            throw s_error;
        })
}

/**
 *  Recuperation de la retroaction complete en fonction des reponses soumises du sous-questionnaire
 *
 *  Etapes:
 *  1- Recuperation des identifiants des contraintes relatives aux questions repondus qui sont validees par
 *     les reponses fournies.
 *  2- Recuperation des resultats de ces contraintes (retroactions, objectifs et ressources).
 *  3- Filtrage des résultats pour les concatener et eliminer les doublons.
 *
 * @param { Object } o_answerToSubQuestionnaire Object contenant les reponses aux sous-questions pour chaque question
 *                                              du sous-questionnaire
 * @returns { Promise<Feedback> } Representation interne de la retroaction complete pour les reponses fournies
 */
function getSubQuestionnaireFeedback(o_answerToSubQuestionnaire) {
    return _getFulfilledConstraintIds(o_answerToSubQuestionnaire)
        .then(a_constraintIds =>
            Promise.all(
                a_constraintIds.map(i_constraintId => _getConstraintFeedback(i_constraintId))
            )
            .then(a_feedbacks  => {
                    const flattenAndKeepDistinct = (s_attribute) => {
                        const a_values = a_feedbacks.map(o_feedback => o_feedback[s_attribute]).flat();
                        const f_filterFunction = (o_value, i_pos) => a_values.indexOf(o_value) === i_pos;

                        return a_values.filter(f_filterFunction);
                    }

                    const a_allMessages = flattenAndKeepDistinct("a_messages");

                    const a_allObjectives = flattenAndKeepDistinct("a_objectives");

                    let a_allResources = [];

                    const a_feedbackResources = a_feedbacks.map(o_feedback => o_feedback["a_ressources"]).flat();

                    a_feedbackResources.forEach(o_res => {
                        const a_allResourceIds = a_allResources.map(o_res => o_res.i_id);
                        if(!a_allResourceIds.includes(o_res.i_id))
                            a_allResources.push(o_res);
                    })
					
                    return new Feedback(
                        a_allMessages,
                        a_allObjectives,
                        a_allResources
                    );
                }
            )
            .catch(s_error => {
                throw s_error;
            })
        )
        .catch(s_error => {
            throw s_error;
        })
}


/**********************************
 * Requete de ressources
 **********************************/

/**
 * Transforme les ressources recues par la base de donnees en representation interne
 *
 * @param { Object } o_filter Objet contenant les filtres de recherche desires
 * @return { Promise<Resource[]> } Liste des ressources de la base de donnees sous la representation interne
 */
function getResources(o_filter) {
    return resourceQueries.getResources(o_filter)
        .then(a_resources => a_resources.map(o_row => Resource.fromDatabaseFormat(o_row)))
        .catch(s_error => {
            throw s_error;
        });
}

/**
 * Transforme la ressource recue par la base de donnees en representation interne
 *
 * @param { number } i_idResource Identifiant de la ressource a recuperer dans la base de donnees
 * @return { Promise<Resource> } Liste des ressources de la base de donnees sous la representation interne
 */
function getResource(i_idResource) {
    return resourceQueries.getResource(i_idResource)
        .then(o_resource => Resource.fromDatabaseFormat(o_resource))
        .catch(s_error => {
            throw s_error;
        });
}

/**
 * Recuperation des etiquettes de ressources possibles dans la base de donnees
 *
 * @return { Promise<String[]> } Liste des etiquettes possibles
 */
function getTags() {
    return resourceQueries.getTags()
        .then(a_tags => a_tags)
        .catch(s_error => {
            throw s_error;
        });
}

/**
 * Recuperation des etiquettes associées à des ressources  dans la base de donnees
 *
 * @return { Promise<String[]> } Liste des etiquettes associées à une ressource possibles
 */
function getActivTags() {
    return resourceQueries.getActivTags()
        .then(a_tags => a_tags)
        .catch(s_error => {
            throw s_error;
        });
}

module.exports = {
    connect: connect,
    disconnect: disconnect,
    getSubQuestionnaires: getSubQuestionnaires,
    getQuestions: getQuestions,
    getSubQuestionnaireFeedback: getSubQuestionnaireFeedback,
    getResources: getResources,
    getResource: getResource,
    getTags: getTags,
	getActivTags: getActivTags
};

