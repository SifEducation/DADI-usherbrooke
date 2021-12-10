module.exports = {
	/**
	 * Propriete utilisee pour masquer ou non des fonctionnalites liees au login tant qu'il n'est pas termine
	 * @TODO Supprimer cette propriete une fois le login termine
	 */
	isLoginEnabled: false,
	/**
	 * Liste du texte a afficher a droite au dessus de la liste des composantes du niveau courant dans le questionnaire
	 */
	textesEtape: [
		"Vous êtes à la première étape",
		"Vous êtes à la deuxième étape",
		"Vous êtes à la dernière étape"
	],
	/**
	 * liste des images et noms des composantes evaluees par niveau. Pour chaque niveau, la cle d'une composante correspond a la combinaison des
	 * noms des composantes telles qu'elles sont stockees dans la base de donnees, separees par le symbole _ et dans l'ordre alphabetique
	 * (Ex: niveau 2, composantes: "Épistémologie Pédagogique" => Epistemologie_Pedagogie)
	 */
	niveau1: {
		Technologie : {
			nom: "Technologique",
			path: "icon_techno.png"
		},
		Pedagogie : {
			nom: "Pédagogique",
			path: "icon_pedago.png"
		}
	},
	niveau2:{
		Epistemologie_Pedagogie: {
			nom: "Épistémologie Pédagogique",
			path: "epis-pedago.png"
		},
		Disciplinaire_Pedagogie: {
			nom: "Pédagogie Disciplinaire",
			path: "pedago-disci.png"
		},
		Epistemologie_Technologie: {
			nom: "Épistémologie Technologique",
			path: "episte-techno.png"
		},
		Disciplinaire_Technologie: {
			nom: "Technologie Disciplinaire",
			path: "techno-discip.png"
		},
		Pedagogie_Technologie: {
			nom: "Technologique Pédagogique",
			path: "techno-pedago.png"
		},
		Disciplinaire_Epistemologie: {
			nom: "Épistémologie Disciplinaire",
			path: "episte-disci.png"
		},
	},
	niveau3:{
		Disciplinaire_Epistemologie_Pedagogie: {
			nom: "Épistémologie Pédagogique Disciplinaire",
			path: "epis_pedago-discipl.png"
		},
		Disciplinaire_Epistemologie_Technologie: {
			nom: "Épistémologie Technologique Disciplinaire",
			path: "epis-techno-discip.png"
		},
		Epistemologie_Pedagogie_Technologie: {
			nom: "Épistémologie Technopédagogique",
			path: "epis-technopedago.png"
		},
		Disciplinaire_Pedagogie_Technologie: {
			nom: "Technopédagogie Disciplinaire",
			path: "technopedago-disci.png"
		}
	},
	/**
	 * liste des differents filtres possibles et l'image associee pour la banque de ressources. Le chemin part du dossier "assets"
	 */
	ressourceFilters: {
		formation: [
			{
				pictoPath: {
					white: "iconLegend/blanc_icon_asynchrone.png",
					black: "iconLegend/noir_icon_asynchrone.png"
				},
				text: "Distanciel 100% asynchrone"
			},
			{
				pictoPath: {
					white: "iconLegend/blanc_icon_presentiel_sync_async.png",
					black: "iconLegend/noir_icon_presentiel_sync_async.png"
				},
				text: "Distanciel synchrone / asynchrone"
			},
			{
				pictoPath: {
					white: "iconLegend/blanc_icon_presence_distance.png",
					black: "iconLegend/noir_icon_presence_distance.png"
				},
				text: "Alternance présentiel et distanciel"
			},
			{

				pictoPath: {
					white: "iconLegend/blanc_icon_bi_comodal.png",
					black: "iconLegend/noir_icon_bi_comodal.png"
				},
				text: "Comodal-bimodal"
			},
			{
				pictoPath: {
					white: "iconLegend/blanc_icon_presentiel_enrichi.png",
					black: "iconLegend/noir_icon_presentiel_enrichi.png"
				},
				text: "Présentiel enrichi"
			}
		],
		thematique: [
			{
				pictoPath: {
					white: "iconLegend/blanc_icon_pedago.png",
					black: "iconLegend/noir_icon_pedago.png"
				},
				text: "Pédagogique"
			},
			{
				pictoPath: {
					white: "iconLegend/blanc_icon_techno.png",
					black: "iconLegend/noir_icon_techno.png"
				},
				text: "Technologique"
			},
			{
				pictoPath: {
					white: "iconLegend/blanc_icon_episte.png",
					black: "iconLegend/noir_icon_episte.png"
				},
				text: "Épistémologique"
			},
			{
				pictoPath: {
					white: "iconLegend/blanc_icon_disciplinaire.png",
					black: "iconLegend/noir_icon_disciplinaire.png"
				},
				text: "Culture disciplinaire"
			}
		],
		format: [
			{
				pictoPath: {
					white: "iconLegend/blanc_icon_capsule_strategique.png",
					black: "iconLegend/noir_icon_capsule_strategique.png"
				},
				text: "Capsule stratégique"
			},
			{
				pictoPath: {
					white: "iconLegend/blanc_icon_demarche_analyse.png",
					black: "iconLegend/noir_icon_demarche_analyse.png"
				},
				text: "Démarche d'analyse"
			},
			{
				pictoPath: {
					white: "iconLegend/blanc_icon_aide_memoire.png",
					black: "iconLegend/noir_icon_aide_memoire.png"
				},
				text: "Aide-mémoire"
			},
			{
				pictoPath: {
					white: "iconLegend/blanc_icon_infographie.png",
					black: "iconLegend/noir_icon_infographie.png"
				},
				text: "Infographie"
			},
			{
				pictoPath: {
					white: "iconLegend/blanc_icon_casfigure_exemple.png",
					black: "iconLegend/noir_icon_casfigure_exemple.png"
				},
				text: "Cas de figure / exemple"
			},
			{
				pictoPath: {
					white: "iconLegend/blanc_icon_canevas_remplir.png",
					black: "iconLegend/noir_icon_canevas_remplir.png"
				},
				text: "Canevas à remplir"
			},
			{
				pictoPath: {
					white: "iconLegend/blanc_icon_tuto.png",
					black: "iconLegend/noir_icon_tuto.png"
				},
				text: "Tutoriel"
			},
			{
				pictoPath: {
					white: "iconLegend/blanc_icon_article_science.png",
					black: "iconLegend/noir_icon_article_science.png"
				},
				text: "Articles scientifiques"
			},
			{
				pictoPath: {
					white: "iconLegend/blanc_icon_article_pro.png",
					black: "iconLegend/noir_icon_article_pro.png"
				},
				text: "Articles professionnels"
			},
			{
				pictoPath: {
					white: "iconLegend/blanc_icon_ref_institut.png",
					black: "iconLegend/noir_icon_ref_institut.png"
				},
				text: "Référence institutionnelle"
			},
			{
				pictoPath: {
					white: "iconLegend/blanc_icon_repertoire.png",
					black: "iconLegend/noir_icon_repertoire.png"
				},
				text: "Répertoire"
			},
			{
				pictoPath: {
					white: "iconLegend/blanc_icon_capsule_video.png",
					black: "iconLegend/noir_icon_capsule_video.png"
				},
				text: "Capsules vidéos"
			}
		],
		licence: [
			{
				pictoPath: {
					white: "iconLegend/blanc_icon_cco.png",
					black: "iconLegend/noir_icon_cco.png"
				},
				text: "CC0"
			},
			{
				pictoPath: {
					white: "iconLegend/blanc_icon_cc_by.png",
					black: "iconLegend/noir_icon_cc_by.png"
				},
				text: "CC-BY"
			},
			{
				pictoPath: {
					white: "iconLegend/blanc_icon_cc_by_sa.png",
					black: "iconLegend/noir_icon_cc_by_sa.png"
				},
				text: "CC-BY-SA"
			},
			{
				pictoPath: {
					white: "iconLegend/blanc_icon_cc_by_nc.png",
					black: "iconLegend/noir_icon_cc_by_nc.png"
				},
				text: "CC-BY-NC"
			},
			{
				pictoPath: {
					white: "iconLegend/blanc_icon_cc_by_nc_sa.png",
					black: "iconLegend/noir_icon_cc_by_nc_sa.png"
				},
				text: "CC-BY-NC-SA"
			},
			{
				pictoPath: {
					white: "iconLegend/blanc_icon_cc_by_nd.png",
					black: "iconLegend/noir_icon_cc_by_nd.png"
				},
				text: "CC-BY-ND"
			},
			{
				pictoPath: {
					white: "iconLegend/blanc_icon_cc_by_nc_nd.png",
					black: "iconLegend/noir_icon_cc_by_nc_nd.png"
				},
				text: "CC-BY-NC-ND"
			},
			{
				pictoPath: {
					white: "iconLegend/blanc_icon_c_tousdroits.png",
					black: "iconLegend/noir_icon_c_tousdroits.png"
				},
				text: "Tous droits réservés"
			},
			{
				pictoPath: {
					white: "iconLegend/blanc_icon_c_autre.png",
					black: "iconLegend/noir_icon_c_autre.png"
				},
				text: "Autre"
			}
		],
		cible: [
			{
				pictoPath: {
					white: "iconLegend/blanc_icon_chercheurs.png",
					black: "iconLegend/noir_icon_chercheurs.png"
				},
				text: "Chercheur·e·s"
			},
			{
				pictoPath: {
					white: "iconLegend/blanc_icon_enseignants.png",
					black: "iconLegend/noir_icon_enseignants.png"
				},
				text: "Format·eur·rice·s"
			},
			{
				pictoPath: {
					white: "iconLegend/blanc_icon_conseillers.png",
					black: "iconLegend/noir_icon_conseillers.png"
				},
				text: "Conseiller·e·s pédagogiques et technopédagogiques"
			},
			{
				pictoPath: {
					white: "iconLegend/blanc_icon_etudiant.png",
					black: "iconLegend/noir_icon_etudiant.png"
				},
				text: "Étudiant·e·s"
			}
		],
		temps: [
			{
				pictoPath: {
					white: "iconLegend/blanc_icon_temps5.png",
					black: "iconLegend/noir_icon_temps5.png"
				},
				text: "15 minutes et moins"
			},
			{
				pictoPath: {
					white: "iconLegend/blanc_icon_temps20_45.png",
					black: "iconLegend/noir_icon_temps20_45.png"
				},
				text: "20 à 45 minutes"
			},
			{
				pictoPath: {
					white: "iconLegend/blanc_icon_temps50_90.png",
					black: "iconLegend/noir_icon_temps50_90.png"
				},
				text: "50 minutes et 1h30"
			},
			{
				pictoPath: {
					white: "iconLegend/blanc_icon_temps2h.png",
					black: "iconLegend/noir_icon_temps2h.png"
				},
				text: "Plus de 2h"
			}
		]
	},
	/**
	 * Donnees pour les titres des dossiers dans les pages Guide pedagorique.
	 */
	nomDossier: [
		"Développer ses connaissances techniques avec le Hardware et le Software",
		"Choisir judicieusement ses méthodes pédagogiques intégrant le numérique",
		"Pour structurer efficacement son environnement numérique d’apprentissage",
		"Pour évaluer en soutien à apprentissages à l’aide des TIC",
		"Pour favoriser l’engagement en formation à distance",
		"Pour réguler efficacement son enseignement"
	],
	/**
	 * Donnee pour les textes d'introcutions des dossiers dans les pages Guide pedagorique et les dossiers specifiques.
	 */
	introDossiers : [
		"Si vous souhaitez comprendre la mécanique derrière le paramétrage et l’installation de votre équipement et de vos logiciels ET développer des réflexes pour diagnostiquer des problèmes techniques pour éventuellement soutenir les étudiants dans la résolution de ceux-ci, ce dossier thématique répondra à vos besoins!",
		"Pour choisir des méthodes pédagogiques adaptées à votre contexte de formation intégrant les TIC ainsi qu’à vos intentions pédagogiques, ce dossier thématique est celui qu’il vous faut explorer! ",
		"Pour obtenir quelques conseils pour faciliter une structuration efficace de l’environnement numérique d’apprentissage, consultez ce dossier!",
		"Si vous souhaitez revisiter les différentes étapes du processus d’évaluation et obtenir des conseils pratiques sur la manière d’intégrer le numérique à vos évaluations dans le but de soutenir l’apprentissage, nous vous invitons à parcourir ce dossier thématique! ",
		"Si vous souhaitez explorer des stratégies pédagogiques pour favoriser la motivation et l’engagement en formation à distance, ce dossier vous sera d’une grande utilité! ",
		"Si vous souhaitez connaître des stratégies d’intervention pédagogique proactives et rétroactives pour faciliter la régulation de votre enseignement en contexte de formation à distance, ce dossier est tout désigné pour vous!"
	],
	/**
	 * Texte a utiliser comme entete pour les differents types de filtres et le placeholder de recherche
	 */
	headerFilters: {
		placeholder: "Saisir des critères par mots-clés",
		formation: "Contexte(s) de formation ciblé(s)",
		theme: "Thématique",
		format:"Format de ressource",
		licence:"Type de licence",
		cible:"Public cible",
		temps:"Temps à investir",
		lien:"Lien vers la ressource"
	},
	headFiltersShort: {
		formation: "Contexte",
		theme: "Thématique",
		format:"Format",
		licence:"License",
		cible:"Public",
		temps:"Temps"
	},
	/**
	 * Textes a utiliser pour le titre et le sous-titre du volet de l'outil de diagnostic (questionnaires)
	 */
	titleBoussole: {
		mainTitle: "La boussole pédagonumérique",
		subtitle: "Trouvez votre azimut!"
	},
	/**
	 * Textes a utiliser pour le titre et le sous-titre du volet de l'outil de la banque de ressource et la
	 * page de consultation des ressources
	 */
	titleRessource: {
		mainTitle: "Banque de ressources",
		subtitle: "Pour une recherche de ressources de formation autonome et adaptée"
	},
	/**
	 * Textes a utiliser pour le titre et le sous-titre du guide pédagogique numérique
	 */
	titleGuide: {
		mainTitle: "Guide pédagogique numérique",
		subtitle: "Des dossiers de formation préparés sur mesure pour vous"
	},
	/**
	 * Textes a utiliser pour le titre et le sous-titre du portail de téléchargement du code source du site
	 */
	titleCodeSource: {
		mainTitle: "Code Source",
		subtitle: "Pour télécharger le code source des composantes du DADI"
	},
	/**
	 * Textes a utiliser pour le titre et le sous-titre des pages a propos
	 */
	titleApropos: {
		mainTitle: "À propos",
		subtitle: ""
	},
	/**
	 * Textes a utiliser pour le titre et le sous-titre la page de sondage
	 */
	titleSondage: {
		mainTitle: "Votre appréciation",
		subtitle: "C'est maintenant votre tour d'évaluer votre expérience du DADI!"
	},
	/**
	 * Textes a utiliser pour le titre et le sous-titre la page contacter
	 */
	titleContacter: {
		mainTitle: "contact",
		subtitle: ""
	},
	/**
	 * Texte a utiliser dans la page d'erreur 404
	 */
	titleErreur : {
		mainTitle: "Erreur 404",
		subtitle: "Il semblerait que la page que vous tentez d'atteindre n'existe pas"
	},
	/**
	 * Texte a utiliser dans la page de resultats
	 */
	resultats : {
		debutRetroaction: "Vos réponses semblent indiquer que :",
		debutObjectif: "Il pourrait être intéressant pour vous :"
	},
	/**
	 * Texte a utiliser specifiquement pour l'exportation pdf de certaines sections
	 */
	textePDF: {
		introSuggestion: {
			title: "Mes ressources d'autoformation",
			subtitle: "Ressources suggérées"
		},
		introResultats: {
			title: "Mes résultats d'autoformation",
			subtitle: "Objectifs et ressources proposés"
		},
		introBanqueRessources: {
			title: "Mes résultats de recherche",
			subtitle: "Ressources trouvées"
		}
	},
	/**
	 * Texte a utiliser pour l'intro de la page de questionnaire
	 */
	introQuestionnaire: {
		choisirQuestionnaire: "Démarrez le questionnaire de niveau 1 en cliquant sur une des deux icônes ",
		description: "La boussole d’autoformation pédagonumérique vous propose un parcours de questionnaires d’autoévaluation organisés qui vous guideront vers des ressources de formation continue adaptées en fonction de vos réponses."
	}
}