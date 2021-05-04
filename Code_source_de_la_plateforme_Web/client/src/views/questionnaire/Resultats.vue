<template>
	<div class="main-component">
		<Title :mainTitle="titleBoussole.mainTitle" :subtitle="titleBoussole.subtitle"/>
		<div class="contenu">
			<!-- Attend de recevoir l'objet feedback dynamiquement pour afficher correctement -->
			<div v-if="feedback" class="row">
				<VoletPerso class="col-3"/>
				<div class="col-6">
					<DimProgression :a_current_dimensions="getDimensions()" :a_quest_completed="getQuestCompleted()"
									:i_level="getLevel()" :b_is-results-page="true"/>
					<div class="feedback">
						<div class="titreFeedback">
							{{resultats.debutRetroaction}}
						</div>
						<ul>
							<!-- Affiche la liste des messages de retroaction dynamiquement -->
							<li v-for="message in feedback.a_messages" :key="message">...<span v-html="message"></span></li>
						</ul>
					</div>
					<div class="feedbackRessoures">
						<div class="titreRessources">
							{{resultats.debutObjectif}}
						</div>
						<ul>
							<!-- Affiche la liste des objectifs de retroaction dynamiquement -->
							<li v-for="objectif in feedback.a_objectives" :key="objectif">...{{objectif}}</li>
						</ul>
					</div>
					<div class="row">
						<div class="col res-container">
							<!-- Affiche dynamiquement la liste des ressources suggerees en un lien menant a la fiche de la ressource -->
							<div class="row ressource" v-for="ressource in feedback.a_ressources"  v-bind:key="ressource.i_id">
								<div class="col typeRessource">
									{{ressource.s_format}}
								</div>
								<div class="col linkRessource">
									<router-link class="res-link" v-bind:to="'/banqueressource/'+ressource.i_id">{{ressource.s_name}}</router-link>
								</div>
							</div>
						</div>
					</div>
					<div class="btn-Pdf d-flex justify-content-center">
						<button class="custom-btn" v-on:click="toPdf">Télécharger la rétroaction</button>
						<button v-if="isLoginEnabled" class="row custom-btn" v-on:click="toAddProfil">Ajouter les ressources à mon profil</button>
					</div>
					<div class="row">
						<div v-if="isLoginEnabled" class="col-4">
							<button class="custom-btn" v-on:click="toCreationCompte">Se créer un compte </button>
						</div>
						<div :class="isLoginEnabled ? 'col-4' : 'btn_bas_div'">
							<button class="custom-btn custom-btn-bas" v-on:click="toQuitter">Quitter le questionnaire</button>
						</div>
						<div :class="isLoginEnabled ? 'col-4' : 'btn_bas_div'">
							<button class="custom-btn custom-btn-bas" v-if="!b_allLevelCompleted" v-on:click="toPoursuivre">Poursuivre le questionnaire</button>
							<span class="fin" v-else>Vous avez complété tous les questionnaires!</span>
						</div>
					</div>
				</div>
				<LesNiveaux class="col-3" :niveau="getLevel()" :nbrQuestion="getNbrQuestion()"/>
			</div>
<!--			Affichage si l'utilisateur tente d'acceder directement a la page resultat sans avoir complete au moins un questionnaire-->
			<div v-else>
				<h3>Vous devez compléter le questionnaire d'une composante pour avoir des résultats à afficher</h3>
				<button class="custom-btn" v-on:click="toPoursuivre">Accéder au questionnaire</button>
			</div>
		</div>
	</div>
</template>

<script>
	import Title from "../../components/Title";
	import VoletPerso from "../../components/VoletPerso";
	import LesNiveaux from "../../components/LesNiveaux";
	import DimProgression from "../../components/DimProgression";
	import {isLoginEnabled, textePDF, resultats, niveau1, niveau2, niveau3, titleBoussole} from "../../util/sharedData";
	import pdfExport from "../../util/pdfExport";

	/**
	 * Fonction qui verifie si toutes les questions du niveau courant ont ete completees en comparant ceux a completer
	 * avec ceux qui le sont deja
	 * @param {String} s_questToComplete Identifiants des sous questionnaires a completer separes par une virgule
	 * @param {String} s_questCompleted Identifiants des sous questionnaires deja completes separes par une virgule
	 * @returns {boolean} Resultat de la comparaison des questionnaires a completer et completes recu en parametre.
	 * 					  Retourne vrai si s_questCompleted contient tous les identifiants dans s_questToComplete,
	 * 					  faux autrement
	 */
	function isLevelCompleted(s_questToComplete, s_questCompleted) {
		return s_questToComplete.split(",").every((s_questionnaireId) => {
			return s_questCompleted.split(",").some((s_completed) => {
				return s_completed === s_questionnaireId;
			});
		})
	}

	/**
	 * Fonction qui verifie si tous les niveau sont completes et si oui, desactive le bouton de poursuite et augmente
	 * le niveau si jamais l'utilisateur tente de se rendre a la page du questionnaire directement
	 * @returns {boolean} Retourne vrai si tous les niveaux sont completes, faux autrement
	 */
	function getLevelsCompletion() {
		const s_lastLevel = localStorage.getItem("dadi_last_level");

		if (s_lastLevel === "3") {
			const s_questToComplete = localStorage.getItem("dadi_quest_to_complete");
			const s_questCompleted = localStorage.getItem("dadi_quest_completed");
			if (s_questToComplete !== null && s_questCompleted !== null && isLevelCompleted(s_questToComplete, s_questCompleted)) {
				localStorage.setItem("dadi_last_level", parseInt(s_lastLevel) + 1);
				return true;
			}
		}
		return s_lastLevel === "4";
	}

	export default {
		name: "PageResult",
		components: {
			Title,
			VoletPerso,
			LesNiveaux,
			DimProgression
		},
		data() {
			return {
				isLoginEnabled,
				feedback: null,
				b_allLevelCompleted: getLevelsCompletion(),
				resultats,
				titleBoussole,
				imagesNiveaux: [niveau1, niveau2, niveau3]
			}
		},
		/**
		 * Affiche la derniere retroaction sauvegardee localement si elle existe et qu'on ne vient pas de la navigation
		 * normale de l'application
		 */
		created() {
			// Si on ne vient pas de la navigation (ex: refresh), afficher la derniere retroaction connue, s'il y en a une
			if (Object.keys(this.$route.params).length === 0) {
				const s_lastFeedback = localStorage.getItem("dadi_last_feedback");
				if (s_lastFeedback !== null)
					this.feedback = JSON.parse(s_lastFeedback);
			} else {
				// recupere la retroaction de la navigation et la transforme en objet
				this.feedback = JSON.parse(this.$route.params.feedback);
			}
		},
		methods: {
			/**
			 * Fonction qui construit un fichier pdf avec les retroactions, objectifs et ressources provenant de la
			 * retroaction du questionnaire qui vient d'etre complete.
			 */
			toPdf() {
				const o_pdf = pdfExport.getNewPDFInstance({format: "letter"});

				// Imprimer un petit texte d'intro du niveau et composante completee
				o_pdf.writeTitle(textePDF.introResultats.title);

				// Imprimer la liste des retroaction
				o_pdf.writeSubtitle(resultats.debutRetroaction);
				this.feedback.a_messages.forEach((s_message) => {
					o_pdf.writeText(" - " + s_message.replace(/<[\w]+>|<\/[\w]+>/g, ""));
				});

				// Imprimer la liste des objectifs
				o_pdf.writeSubtitle(resultats.debutObjectif);
				this.feedback.a_objectives.forEach((s_objectif) => {
					o_pdf.writeText(" - " + s_objectif);
				});

				// imprimer la liste des ressources pour le questionnaire courant
				o_pdf.writeSubtitle(textePDF.introSuggestion.subtitle);
				this.feedback.a_ressources.forEach((o_ressource) => {
					o_pdf.writeRessource(o_ressource.s_format + " - " + o_ressource.s_name, {
						url: window.location.protocol + window.location.host + "/banqueressource/" + o_ressource.i_id
					});
				});
				o_pdf.save("dadi_retroaction");
			},
			toAddProfil() {
				alert("Fonctionnalité à venir");
			},
			/**
			 * Navigation vers la creation de compte
			 */
			toCreationCompte: function() {
				alert("Fonctionnalité à venir");
			},
			/**
			 * Navigation vers la page de questionnaire
			 */
			toPoursuivre: function() {
				this.$router.push({path: "/diagnostic"});
			},
			/**
			 * Navigation vers la page fin questionnaire
			 */
			toQuitter: function() {
				this.$router.push({path: "/diagnostic/fin"});
			},
			/**
			 * Fonction appelee pour envoyer au composant le niveau du questionnaire et pour l'affichage conditionnel
			 * du css pour le questionnaire courant.
			 */
			getLevel(){
				const s_last_level = localStorage.getItem("dadi_last_level") || "1";
				return s_last_level === "4" ? 3 : parseInt(s_last_level);
			},
			/**
			 * Fonction appelee pour envoyer au composant le nombre de questionnaire du niveau
			 */
			getNbrQuestion(){
				const tabQuestion = localStorage.getItem("dadi_quest_to_complete") || "";
				return tabQuestion.split(",").length;
			},
			/**
			 * Fonction qui retourne un tableau des composantes courantes si elles existent, sinon un tableau vide
			 * @returns {Array} Liste des sous questionnaires du niveau courant
			 */
			getDimensions(){
				const rawComponents = localStorage.getItem("dadi_level_components") || "[]";
				return JSON.parse(rawComponents);
			},
			/**
			 * Fonction qui recupere la liste des sous questionnaires completes du niveau courant s'il y en a
			 * @returns {string[]} Liste des identifiants des sous questionnaires completes
			 */
			getQuestCompleted() {
				const s_questionnaireCompleted = localStorage.getItem("dadi_quest_completed") || "";
				return s_questionnaireCompleted.split(",");
			}
		}
	};
</script>

<style scoped>
	h3{
		font-weight: bold;
		font-size: 25pt;
		color: #222277;
		padding-bottom: 30px;
	}
	.res-link {
		display: block;
	}
	.contenu{
		padding-top: 117px;
		padding-bottom: 175px;
	}
	.feedback{
		font-size: 16pt;
		color: #222277;
		margin-top: 30px;
		margin-bottom: 30px;
	}
	.titreFeedback{
		font-weight: bold;
		padding-bottom: 15pt;
	}
	.feedbackRessoures{
		font-size: 16pt;
		margin-bottom: 30px;
	}
	.titreRessources{
		font-weight: bold;
		padding-bottom: 15px;
	}
	.res-container{
		margin-right: 18px;
		margin-left: 18px;
	}
	.res-container:first-child{
		border-top: solid 2px #e1e7ea;
	}
	.ressource{
		border-bottom: solid 2px #e1e7ea;
		padding-top: 5px;
		padding-left: 2px;
		padding-right: 2px;
	}
	.col{
		flex-basis: auto;
	}
	.typeRessource{
		font-weight: bold;
		font-size: 12pt;
		width: 100px;
		left: -15px;
	}
	.linkRessource{
		width: 450px;
		left: -15px;
	}
	.linkRessource a{
		color: black;
	}
	.btn-Pdf{
		margin-top: 20px;
		margin-bottom: 79px;
	}
	.custom-btn{
		padding: 11px 15px 11px;
	}
	.custom-btn-bas{
		width: 100%;
	}
	.fin{
		font-weight: 600;
		font-size: 17px;
		color: #222277;
	}

	.col-6 {
		padding-right: 0;
	}

	.btn_bas_div {
		width: 50%;
		padding-right: 15px;
		padding-left: 15px;
	}
</style>