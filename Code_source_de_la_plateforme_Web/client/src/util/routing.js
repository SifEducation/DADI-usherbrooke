import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
	{
		path: "/",
		name: "Accueil",
		component: Home
	},
	{
		path: "/apropos/demarche",
		name: "Demarche",
		component: () => import("../views/apropos/Demarche.vue")
	},
	{
		path: "/apropos/notreequipe",
		name: "NotreEquipe",
		component: () => import("../views/apropos/Equipe.vue")
	},
	{
		path: "/apropos/nospartenaires",
		name: "NosPartenaires",
		component: () => import("../views/apropos/Partenaires.vue")
	},
	{
		path: "/apropos/cadre",
		name: "Cadre",
		component: () => import("../views/apropos/PresentationProjet.vue")
	},
	{
		path: "/guide",
		name: "GuidePedagogique",
		component: () => import("../views/guidepedagogique/NumericGuide.vue")
	},
	{
		path: "/diagnostic",
		name: "OutilAutoEvaluation",
		/**
		 * Fonction qui redirige a l'accueil ou la fin selon l'etat de completion du questionnaire
		 * @returns {string} Chemin de la page a afficher
		 */
		redirect: () => {
			if (localStorage.getItem("dadi_last_level") === "4") {
				return "/diagnostic/fin";
			}
			return "/diagnostic/questionnaire";
		}
	},
	{
		path: "/diagnostic/questionnaire",
		name: "AccueilQuestionnaire",
		component: () => import("../views/questionnaire/QuestionnaireDim.vue")
	},
	{
		path: "/banqueressource",
		name: "BanqueRessources",
		component: () => import("../views/banqueressource/RessourcesBank.vue")
	},
	{
		path: "/banqueressource/:idRessource",
		name: "RessourceDetails",
		component: () => import("../views/banqueressource/DetailRessource.vue")
	},
	{
		path: "/apropos/codesource",
		name: "CodeSource",
		component: () => import("../views/apropos/CodeSource.vue")
	},
	// @TODO activer la route une fois le login implemente
	// {
	// 	path: "/connexion",
	// 	name: "Connexion",
	// 	component: () => import("../views/Login.vue")
	// },
	//Sous-pages de la page Guide numérique
	{
		path: "/guide/:idDossier",
		name: "Dossier",
		component: () => import("../views/guidepedagogique/Dossier.vue")
	},
	{
		path: "/contact",
		name: "NousContacter",
		component: () => import("../views/NousContacter.vue")
	},
	{
		path: "/conditions",
		name: "ConditionsUtilisation",
		component: () => import("../views/questionnaire/ConditionsUtilisation.vue")
	},
	{
		path: "/diagnostic/resultats",
		name: "PageResult",
		component: () => import("../views/questionnaire/Resultats.vue")
	},
	{
		path: "/diagnostic/fin",
		name: "FinQuestionnaire",
		component: () => import("../views/questionnaire/Fin.vue")
	},
	{
		path: "/diagnostic/sondage",
		name: "SondageQuestionnaire",
		component: () => import("../views/questionnaire/Sondage.vue")
	},
	// Chemin qui capte tous les urls invalides
	{
		path: "/:pathMatch(.*)*",
		name: "404NotFound",
		component: () => import("../views/404NotFound.vue")
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

/**
 * Permet de ramener la page en haut completement avant chaque navigation
 */
router.beforeEach(() => {
	window.scrollTo(0, 0);
});

export default router
