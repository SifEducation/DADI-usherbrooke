/**
 * Decommenter la ligne suivante pour utiliser des donnees mock. Ensuite, remplacer les appels des fonctions dans module.exports par
 * MockRequest.fonction (Toutes les fonctions ont le meme nom)
 */
// const MockRequest = require('./__mock__/mockRequest');

// const dev_url = "http://localhost:3000/";
// @todo: changer pour le bon url lors de la migration vers un autre service d'hebergement
const production_url = ""/* dadi_spec: url de base de l'api REST (serveur) */;
/**
 * Fonction de base pour une requete de type GET
 * @param {String} s_path Chemin d'acces specifique pour la requete
 * @returns {Promise<Response>} Une promesse a resoudre qui contient le resultat de la requete
 * @private
 */
async function _getData(s_path) {
	return await fetch(production_url + s_path);
}

/**
 * Fonction de base pour une requete de type GET ayant des filtres qui sont convertis pour etre ajoutes au chemin de la requete.
 * @param {String} s_path Chemin d'acces specifique pour la requete
 * @param {Object} o_filter Filtres a convertir et a utiliser pour la requete
 * @returns {Promise<Response>} Une promesse a resoudre qui contient le resultat de la requete
 * @private
 */
async function _getDataFiltered(s_path, o_filter = null) {
	let s_filterString = "";
	if (o_filter) {
		s_filterString = "?" + Object.keys(o_filter).map((s_keyValue) => {
			return s_keyValue + "=" + o_filter[s_keyValue];
		}).join("&");
	}
	return await _getData(encodeURI(s_path + s_filterString));
}

/**
 * Fonction de base pour une requete de type POST
 * @param {String} s_path chemin d'acces specifique pour la requete
 * @param {Object} o_body Corps de la requete a envoyer au serveur
 * @returns {Promise<Response>} Une promesse a resoudre qui contient le resultat de la requete
 * @private
 */
async function _postData(s_path, o_body) {
	var myHeaders = new Headers();
	myHeaders.append("Content-Type", "application/json");
	const o_options = {
		method: "POST",
		headers: myHeaders,
		body: JSON.stringify(o_body)
	};
	return await fetch(production_url + s_path, o_options);
}

/**
 * @TODO fonction non utilisee, car requise pour le login seulement et potentiellement a modifier
 * Fonction de base pour une requete de type DELETE
 * @param {String} s_path Chemin d'acces specifique pour la requete
 * @param {Object} o_body Corps de la requete a envoyer au serveur
 * @returns {Promise<Response>} Une promesse a resoudre qui contient le resultat de la requete
 * @private
 */
// async function _deleteData(s_path, o_body) { // is body needed???
// 	const o_options = {
// 		method: "DELETE",
// 		body: JSON.stringify(o_body)
// 	};
// 	return await fetch(process.env.API_BASE_URL + s_path, o_options);
// }

/**
 * @TODO fonction non utilisee, car requise pour le login seulement et potentiellement a modifier
 * Fonction de base pour une requete de type PUT
 * @param {String} s_path Chemin d'acces specifique pour la requete
 * @param {Object} o_body Corps de la requete contenant les donnees modifiees
 * @returns {Promise<Response>} Une promesse a resoudre qui contient le resultat de la requete
 * @private
 */
// async function _updateData(s_path, o_body) {
// 	const o_options = {
// 		method: "PUT",
// 		body: JSON.stringify(o_body)
// 	};
// 	return await fetch(process.env.API_BASE_URL + s_path, o_options);
// }

/**
 * Fonction encapsulant le traitement d'une requete et des erreurs potentielles
 * @param {function} f_execute Fonction de base a executer pour completer la requete. Les parametres requis par f_execute
 * 							   lui sont attaches lors de l'appel a la fonction courante via .bind(...)
 * @returns {Promise<*>} Une promesse qui retourne les donnees concretes de la requete ou une erreur
 * @private
 */
async function _handleRequest(f_execute) {
	const o_response = await f_execute();

	if (!o_response.ok) {
		throw Error(o_response.statusText);
	}
	return o_response.json();
}

/**
 * @TODO
 * Les fonctions suivantes sont toutes les requetes Rest necessitant qu'on planifie d'implementer le login
 * Ce ne sont que des coquilles pour maintenir une structure d'appel dans l'application identique
 */

/**
 * Fonction gerant une demande de connexion d'un utilisateur
 * @param {String} s_email Courriel entre par l'utilisateur
 * @param {String} s_pwd Mot de passe entre a valider par le serveur
 * @returns {Promise<*>} Le resultat de la demande de connexion
 */
// check if the password is already hashed or not
// function connect(s_email, s_pwd) {
// 	let o_credentials = {
// 		email: s_email,
// 		password: s_pwd
// 	};
// 	return _handleRequest(_postData.bind(this, "login", o_credentials));
// }

/**
 * Fonction gerant la deconnexion explicite d'un utilisateur
 * @param {String} s_token Jeton de la session active de l'utilisateur courant
 * @returns {Promise<*>} Le resultat de la deconnexion (succes ou echec)
 */
// function disconnect(s_token) {
// 	// Refactor data functions to handle the token (global var??)
// 	return _handleRequest(_updateData.bind(this, "logout"));
// }

/**
 * Fonction gerant l'inscription d'un nouvel utilisateur dans l'application
 * @param {String} s_email Courriel utilise pour enregistrer l'utilisateur
 * @param {String} s_pwd Mot de passe associe au compte en cours de creation
 * @param {String} s_school Etablissement d'enseignement fourni. Champ facultatif, donc peut etre undefined ou null
 * @returns {Promise<*>} Retourne le resultat de l'inscription (succes/echec)
 */
// function register(s_email, s_pwd, s_school) {
// 	const o_body = {
// 		email: s_email,
// 		password: s_pwd,
// 		school: s_school ? s_school : null // revoir si la bonne info
// 	};
// 	return _handleRequest(_deleteData.bind(this, "user/signup", o_body));
// }

/**
 * Fonction gerant la mise a jour du mot de passe d'un utilisateur
 * @param {String} s_pwd Nouveau mot de passe pour le compte
 * @returns {Promise<*>} Le resultat de la mise a jour du mot de passe
 */
// function resetPassword(s_pwd) {
// 	const o_body = {
// 		password: s_pwd
// 	};
// 	return _handleRequest(_updateData.bind(this, "reset", o_body));
// }

/**
 * Fonction gerant la demande de reinitialisation de mot de passe
 * @param {String} s_email Courriel associe au compte dont on veut reinitialiser le mot de passe
 * @returns {Promise<*>} Le resultat de l'envoi d'un courriel de reinitialisation
 */
// function sendReset(s_email) {
// 	const o_body = {
// 		email: s_email
// 	};
// 	return _handleRequest(_postData.bind(this, "reset", o_body));
// }

/**
 * Fonction gerant la sauvegarde des ressources selectionnees par un utilisateur
 * @param {Array} a_ressources Tableau contenant la liste des nouvelles ressources a sauvegarder
 * @param {String} s_token  Jeton de session de l'utilisateur courant
 * @returns {Promise<*>} Le resultat de l'ajout des ressources
 */
// function saveRessources(a_ressources, s_token) {
//  //voir si on transforme pas en une seule route de type put qui prend toute la liste des ressources saved
// 	const o_body = {
// 		ressources: a_ressources,
// 		token: s_token
// 	};
// 	return _handleRequest(_postData.bind(this, "ressource", o_body));
// }

/**
 * Fonction gerant la suppression des ressources selectionnees par un utilisateur
 * @param {Array} a_ressources Tableau contenant la liste des ressources a retirer des ressources sauvegardees
 * @param {String} s_token  Jeton de session de l'utilisateur courant
 * @returns {Promise<*>} Le resultat du retrait des ressources selectionnees
 */
// function unsaveRessources(a_ressources, s_token) {
// 	const o_body = {
// 		ressources: a_ressources,
// 		token: s_token
// 	};
// 	return _handleRequest(_deleteData.bind(this, "ressource", o_body));
// }

/**
 * Fonction recuperant la progression de l'utilisateur courant (s'il est connecte)
 * @param {String} s_token Jeton de session de l'utilisateur courant
 * @returns {Promise<*>} Liste des questionnaires et sous questionnaires completes
 */
// function getProgress(s_token) {
// 	return _handleRequest(_getData.bind(this, "progression"));
// }

/**
 * Fonction envoyant les reponses du formulaire pour un sous questionnaire donne et qui recoit les recommandations
 * basees sur les reponses fournies par l'utilisateur
 * @param {Number} i_idQuestionnaire Identifiant du questionnaire parent
 * @param {Number} i_idSousQuestionnaire Identifiant du sous questionnaire courant
 * @param {Object} o_answers Objet representant les reponses a chaque sous question qui correspond aux questions du
 * 								   sous questionnaire
 * @returns {Promise<*>} Objet representant la retroaction basee sur les reponses envoyees
 */
// eslint-disable-next-line no-unused-vars
function sendAnswers(i_idQuestionnaire, i_idSousQuestionnaire, o_answers) {
	return _handleRequest(_postData.bind(this, `questionnaire/${i_idQuestionnaire}/${i_idSousQuestionnaire}`, o_answers));
}

/**
 * Fonction gerant la recuperation des ressources de la banque de ressources selon des filtres
 * @param {Object} o_filter Ensemble des filtres a envoyer au serveur pour traiter la liste des ressources
 * @returns {Promise<*>} La liste des ressources filtrees
 */
// eslint-disable-next-line no-unused-vars
function getRessources(o_filter = null) {
	return _handleRequest(_getDataFiltered.bind(this, "ressource", o_filter));
}

/**
 * Fonction gerant la recuperation des details d'une ressource specifique
 * @param {Number} i_idRessource Identifiant de la ressource a recuperer
 * @returns {Promise<*>} Un objet representant les details de la ressource specifiee
 */
// eslint-disable-next-line no-unused-vars
function getRessource(i_idRessource) {
	return _handleRequest(_getData.bind(this, `ressource/${i_idRessource}`));
}

/**
 * Fonction recuperant la liste des sous questionnaires associes a un questionnaire et pour un niveau donne (1,2 ou 3)
 * @param {Number} i_idQuestionnaire Identifiant du questionnaire dont on veut recuperer les sous questionnaires
 * @param {Number} i_level Niveau des sous questionnaires a recuperer (1, 2 ou 3)
 * @returns {Promise<*>} La liste des sous questionnaires pour le niveau donne
 */
// eslint-disable-next-line no-unused-vars
function getQuestionnaires(i_idQuestionnaire, i_level) {
	const o_dimensionFilter = {
		level: i_level
	};
	return _handleRequest(_getDataFiltered.bind(this, `questionnaire/${i_idQuestionnaire}`, o_dimensionFilter));
}

/**
 * Fonction recuperant toutes les questions (et sous questions) d'un sous questionnaire donne
 * @param {Number} i_idQuestionnaire Identifiant du questionnaire parent
 * @param {Number} i_idSousQuestionnaire Identifiant du sous questionnaire pour lequel on veut les questions
 * @returns {Promise<*>} La liste des questions (et sous questions) pour le sous questionnaire donne
 */
// eslint-disable-next-line no-unused-vars
function getQuestions(i_idQuestionnaire, i_idSousQuestionnaire) {
	return _handleRequest(_getData.bind(this, `questionnaire/${i_idQuestionnaire}/${i_idSousQuestionnaire}`));
}

/**
 * Fonction qui recupere les etiquettes possibles pour toutes les ressources
 * @returns {Promise<*>} La liste des etiquettes
 */
// eslint-disable-next-line no-unused-vars
function getKeywords() {
	return _handleRequest(_getData.bind(this, "ressource/tags"));
}

module.exports = {
	getRessources: getRessources,
	getRessourceDetails: getRessource,
	getQuestionnaires: getQuestionnaires,
	getQuestions: getQuestions,
	sendAnswers: sendAnswers,
	getKeywords: getKeywords
}
