/**
 * Module servant de mock manuel pour simuler les reponses attendues du serveur avec des donnees ayant la meme structure que le seveur. Permet de
 * tester le visuel du site sans dependre de la disponibilite du serveur. Pour l'utiliser, decommenter l'importation du module dans request.js
 */

/**
 * @TODO
 * Ajouter les fonctions de mocking pour la gestion du user qui sont commentees dans le fichier request.js afin de pouvoir tester le visuel avec des
 * donnees independantes du serveur.
 */

/**
 * Fonction qui simule la retroaction du serveur suite a l'envoi des reponses a un questionnaire
 * @returns {Promise<*>} Objet representant la retroaction
 */
function sendAnswers() {
	return new Promise((resolve) => {
		const test = {
			a_messages: [
				"vous avez le réflexe d’offrir un <b>soutien technique de première ligne</b> à vos étudiants qui rencontrent des problèmes techniques dans vos cours. ",
				"vous avez le réflexe d’offrir un <b>soutien technique à vos étudiants</b> qui rencontrent des problèmes dans vos cours. "
			],
			a_objectives: [
				"d’aider les étudiants à développer leur autonomie pour résoudre les problèmes techniques qu’ils rencontrent.",
				"d’orienter les étudiant.s vers des ressources pédagogiques dédiées au soutien technique dans votre établissement.",
				"d’identifier des ressources qui mettent en contexte l’apport de l’entraide entre les pairs au sein de la communauté étudiante."
			],
			a_ressources: [
				{
					i_id: 1,
					s_format: "Démarche d'analyse",
					s_name: "Grille d’évaluation des qualités techniques d’un outil numériques utilisés à des fins pédagogiques."
				},
				{
					i_id: 2,
					s_format: "Aide-mémoire",
					s_name: "Qu’est-ce qu’une méthode pédagogique authentique?"
				},
				{
					i_id: 3,
					s_format: "capsule stratégique",
					s_name: "Valeur ajoutée d'une situation d'apprentissage"
				},
				{
					i_id: 4,
					s_format: "aide-mémoire",
					s_name: "Portrait des méthodes pédagogiques actives et collaboratives"
				}
			]
		}
		resolve(test);
	});
}

/**
 * Fonction qui simule la aliste des ressources. Les filtres n'ont aucun effet quand cette fonction est utilisee
 * @returns {Promise<*>} La liste des ressources filtrees
 */
function getRessources() {
	var test = [
		{
			"i_id": 1,
			"s_name": "Grille d’évaluation des qualités techniques d’un outil numériques utilisés à des fins pédagogiques.",
			"s_subTitle": "À déterminer",
			"s_duration": "20 à 45 minutes",
			"s_license": "cc-by-nc-sa",
			"a_theme": [
				"épistémologique",
				"technologique"
			],
			"s_description": "Cet instrument d'évaluation permet d’obtenir un aperçu général d’une application ou d’un logiciel en vue de l’utiliser ou non dans le cadre d’un cours, de le recommander ou non à un collègue.",
			"a_tag": [
				"à déterminer"
			],
			"a_contexts": [
				"distanciel 100% asynchrone",
				"distanciel synchrone / asynchrone",
				"alternance présentiel et distanciel",
				"comodal-bimodal",
				"présentiel enrichi",
				"à déterminer"
			],
			"s_format": "démarche d'analyse",
			"a_audiences": [
				"format·eur·rice·s",
				"conseiller·e·s pédagogiques et technopédagogiques",
				"à déterminer"
			],
			"s_path": "À déterminer"
		},
		{
			"i_id": 2,
			"s_name": "Qu’est-ce qu’une méthode pédagogique authentique?",
			"s_subTitle": "À déterminer",
			"s_duration": "15 minutes et moins",
			"s_license": "cc-by-nc-sa",
			"a_theme": [
				"pédagogique"
			],
			"s_description": "Capsule stratégique pour décrire/présenter le concept de situation d’apprentissage authentique",
			"a_tag": [
				"à déterminer"
			],
			"a_contexts": [
				"distanciel 100% asynchrone",
				"distanciel synchrone / asynchrone",
				"alternance présentiel et distanciel",
				"comodal-bimodal",
				"présentiel enrichi",
				"à déterminer"
			],
			"s_format": "capsule stratégique",
			"a_audiences": [
				"format·eur·rice·s",
				"conseiller·e·s pédagogiques et technopédagogiques",
				"à déterminer"
			],
			"s_path": "À déterminer"
		},
		{
			"i_id": 3,
			"s_name": "Valeur ajoutée d'une situation d'apprentissage",
			"s_subTitle": "À déterminer",
			"s_duration": "15 minutes et moins",
			"s_license": "cc-by-nc-sa",
			"a_theme": [
				"pédagogique"
			],
			"s_description": "Brève capsule pour mettre en lumière les avantages des situations authentiques",
			"a_tag": [
				"à déterminer"
			],
			"a_contexts": [
				"distanciel 100% asynchrone",
				"distanciel synchrone / asynchrone",
				"alternance présentiel et distanciel",
				"comodal-bimodal",
				"présentiel enrichi",
				"à déterminer"
			],
			"s_format": "capsule stratégique",
			"a_audiences": [
				"format·eur·rice·s",
				"conseiller·e·s pédagogiques et technopédagogiques",
				"étudiant·e·s",
				"à déterminer"
			],
			"s_path": "À déterminer"
		},
		{
			"i_id": 4,
			"s_name": "Portrait des méthodes pédagogiques actives et collaboratives ",
			"s_subTitle": "À déterminer",
			"s_duration": "15 minutes et moins",
			"s_license": "cc-by-nc-sa",
			"a_theme": [
				"pédagogique"
			],
			"s_description": "Portrait des méthodes pédagogiques actives et collaboratives.",
			"a_tag": [
				"à déterminer"
			],
			"a_contexts": [
				"distanciel 100% asynchrone",
				"distanciel synchrone / asynchrone",
				"alternance présentiel et distanciel",
				"comodal-bimodal",
				"présentiel enrichi",
				"à déterminer"
			],
			"s_format": "aide-mémoire",
			"a_audiences": [
				"format·eur·rice·s",
				"conseiller·e·s pédagogiques et technopédagogiques",
				"à déterminer"
			],
			"s_path": "https://view.genial.ly/5f33f38fca612f0d7f27cefe/horizontal-infographic-lists-methodes-pedagogiques-actives-et-collaboratives"
		},
		{
			"i_id": 5,
			"s_name": "La roue pédagogique 2.0",
			"s_subTitle": "À déterminer",
			"s_duration": "15 minutes et moins",
			"s_license": "cc-by-nc-sa",
			"a_theme": [
				"épistémologique",
				"technologique"
			],
			"s_description": "Infographie des applications courantes de l'iPad associées au modèle SAMR, tout en faisant un lien avec la taxonomie de Bloom. ",
			"a_tag": [
				"à déterminer"
			],
			"a_contexts": [
				"distanciel 100% asynchrone",
				"distanciel synchrone / asynchrone",
				"alternance présentiel et distanciel",
				"comodal-bimodal",
				"présentiel enrichi",
				"à déterminer"
			],
			"s_format": "infographie",
			"a_audiences": [
				"format·eur·rice·s",
				"conseiller·e·s pédagogiques et technopédagogiques",
				"à déterminer"
			],
			"s_path": "https://www.profnumeric.com/wp-content/uploads/2020/03/La-Roue-De-La-Pe%CC%81dagogie.png "
		},
		{
			"i_id": 6,
			"s_name": "Articuler les activités réalisées en pédagogie inversée avec les activités réalisées en classe synchrone ou en présentiel : comment s’y prendre?",
			"s_subTitle": "À déterminer",
			"s_duration": "à déterminer",
			"s_license": "à déterminer",
			"a_theme": [
				"pédagogique"
			],
			"s_description": "À déterminer",
			"a_tag": [
				"à déterminer"
			],
			"a_contexts": [
				"à déterminer"
			],
			"s_format": "capsule stratégique",
			"a_audiences": [
				"à déterminer"
			],
			"s_path": "À déterminer"
		}
	]
	return new Promise((resolve) => {
		resolve(test);
	});
}

/**
 * Fonction gerant la recuperation des details d'une ressource specifique. Retourne toujours la meme ressource avec le id recu
 * @param {Number} i_idRessource Identifiant de la ressource a recuperer
 * @returns {Promise<*>} Un objet representant les details de la ressource specifiee
 */
function getRessource(i_idRessource) {
	const test = {
		"i_id": i_idRessource,
		"s_name": "La roue pédagogique 2.0",
		"s_subTitle": "À déterminer",
		"s_duration": "15 minutes et moins",
		"s_license": "cc-by-nc-sa",
		"a_theme": [
			"épistémologique",
			"technologique"
		],
		"s_description": "Infographie des applications courantes de l'iPad associées au modèle SAMR, tout en faisant un lien avec la taxonomie de Bloom. ",
		"a_tag": [
			"à déterminer"
		],
		"a_contexts": [
			"distanciel 100% asynchrone",
			"distanciel synchrone / asynchrone",
			"alternance présentiel et distanciel",
			"comodal-bimodal",
			"présentiel enrichi",
			"à déterminer"
		],
		"s_format": "infographie",
		"a_audiences": [
			"format·eur·rice·s",
			"conseiller·e·s pédagogiques et technopédagogiques",
			"à déterminer"
		],
		"s_path": "https://www.profnumeric.com/wp-content/uploads/2020/03/La-Roue-De-La-Pe%CC%81dagogie.png"
	}
	return new Promise((resolve) => {
		resolve(test);
	});
}

/**
 * Fonction simulant une partie minimale des sous questionnaires associes a un questionnaire et pour un niveau donne (1,2 ou 3)
 * @param {Number} i_idQuestionnaire Identifiant du questionnaire dont on veut recuperer les sous questionnaires
 * @param {Number} i_level Niveau des sous questionnaires a recuperer (1, 2 ou 3)
 * @returns {Promise<*>} La liste des sous questionnaires pour le niveau donne
 */
function getQuestionnaires(i_idQuestionnaire, i_level) {
	const test = [
		[
			{
				"i_id": 1,
				"i_idQuestionnaire": 1,
				"s_description": "1ER NIVEAU - COMPOSANTE TECHNOLOGIQUE ",
				"i_level": 1,
				"a_components": [
					"Technologie"
				]
			},
			{
				"i_id": 2,
				"i_idQuestionnaire": 1,
				"s_description": "1ER NIVEAU - COMPOSANTE PÉDAGOGIQUE",
				"i_level": 1,
				"a_components": [
					"Pedagogie"
				]
			}
		],
		[
			{
				"i_id": 3,
				"i_idQuestionnaire": 1,
				"s_description": "2E NIVEAU - COMPOSANTE ÉPISTÉMOLOGICO-TECHNOLOGIQUE",
				"i_level": 2,
				"a_components": [
					"Epistemologie",
					"Technologie"
				]
			}
		],
		[
			{
				"i_id": 8,
				"i_idQuestionnaire": 1,
				"s_description": "3E NIVEAU - COMPOSANTE ÉPISTÉMOLOGIE PÉDAGOGICO-DISCIPLINAIRE",
				"i_level": 3,
				"a_components": [
					"Epistemologie",
					"Pedagogie",
					"Disciplinaire"
				]
			}
		]
	]
	return new Promise((resolve) => {
		resolve(test[i_level - 1]);
	});
}

/**
 * Fonction qui simule la structure des questions d'un sous-questionnaire
 * @returns {Promise<*>} La liste des questions (et sous questions) pour le sous questionnaire donne
 */
function getQuestions() {
	return new Promise((resolve) => {
		const test = [
			{
				"i_id": 11,
				"i_idSubQuestionnaire": 8,
				"s_description": "Précisez la manière par laquelle vous identifiez les méthodes pédagogiques les mieux adaptées à l’enseignement de votre contenu disciplinaire.",
				"s_type": "Fréquence",
				"a_subQuestions": [
					{
						"i_id": 95,
						"i_idQuestion": 11,
						"s_description": "Je me base sur mon expérience de personne formatrice dans le cadre d’un cours issu d’un même champ disciplinaire (voire du même cours)."
					},
					{
						"i_id": 96,
						"i_idQuestion": 11,
						"s_description": "Je me base sur mon expérience personnelle d’apprenant."
					},
					{
						"i_id": 97,
						"i_idQuestion": 11,
						"s_description": "Je me base sur ma connaissance des approches pédagogiques utilisées par les collègues de mon département / de ma faculté."
					},
					{
						"i_id": 98,
						"i_idQuestion": 11,
						"s_description": "Je me base sur l’expérience des personnes apprenantes."
					},
					{
						"i_id": 99,
						"i_idQuestion": 11,
						"s_description": "Je me base sur la littérature scientifique appliquée à la pédagogie dans mon contexte disciplinaire."
					}
				],
				"a_answers": [
					"toujours",
					"souvent",
					"parfois",
					"jamais"
				]
			}
		]
		resolve(test);
	});
}

/**
 * Fonction qui recupere les etiquettes possibles pour toutes les ressources
 * @returns {Promise<*>} La liste des etiquettes
 */
function getKeywords() {
	return new Promise((resolve) => {
		const test = [
			"Diagnostics des problèmes technologiques",
			"Résolution des problèmes technologiques",
			"Problème technique",
			"Soutien technique",
			"Équipement défectueux",
			"Type d'équipement",
			"Installation des logiciels et applications",
			"Activités d'apprentissage collaboratives",
			"Démonstration",
			"Étude de cas",
			"Présentations orales",
			"Exposés magistraux",
			"Carte conceptuelle",
			"Jeu de rôle",
			"Débat",
			"Exercices",
			"Tests",
			"Quiz",
			"Examen",
			"Apprentissage par problème",
			"Synthèse des savoirs",
			"Productions complexes",
			"Fonction des apprentissages",
			"Évaluation",
			"Planification des évaluations",
			"Évaluation d'orientation",
			"Évaluation de régulation",
			"Évaluation de certification",
			"Validité",
			"Animation des séances",
			"Méthodes d'enseignement asynchrones",
			"Classe inversée",
			"Méthodes pédagogiques collaboratives",
			"Méthoodes pédagogiques expositives",
			"Méthodes pédagogiques individuelles",
			"Interactions et situations de communication",
			"Facilitateur",
			"Flexibilité pédagogique",
			"Fréquence des interventions via l'ENA",
			"Stratégies de communication avec les personnes étudiantes",
			"Attentes mutuelles",
			"Bienséance en ligne",
			"Engagement",
			"Outils technologiques liés au champ disciplinaire",
			"À déterminer"
		]
		resolve(test);
	});
}

module.exports = {
	getRessources: getRessources,
	getRessource: getRessource,
	getQuestionnaires: getQuestionnaires,
	getQuestions: getQuestions,
	sendAnswers: sendAnswers,
	getKeywords: getKeywords
}