<template>
	<div class="main-component">
		<Title :main-title="titleBoussole.mainTitle" :subtitle="titleBoussole.subtitle"/>
		<div class="contenu">
			<div class="row intro-section">
				<img src="@/assets/home/boussole.png" alt="boussole" width="60" height="60"/>
				<span class="more">{{introQuestionnaire.description}}</span>
			</div>
			<div v-if="i_current_level===1" class="intro">
				{{introQuestionnaire.choisirQuestionnaire}}
				<img src="@/assets/questionnaire/icon_techno.png">
				ou
				<img src="@/assets/questionnaire/icon_pedago.png">
				ci-dessous.
			</div>
			<div class="row">
				<VoletPerso class="col-3"/>
				<div v-if="i_current_level !== 4" class="col-6">
					<DimProgression :a_current_dimensions="a_current_dimensions" :a_quest_completed="a_questCompleted"
									:i_level="i_current_level" :b_is-results-page="false"/>
					<form v-if="a_questions" v-on:submit="toFeedback">
						<!-- Parcours dynamique de toutes les questions globales du questionnaire courant -->
						<div v-for="(question, index) in a_questions" :key="question.i_id" class="questionnaire">
							<h2>Question {{index + 1}}</h2>
							<h3>{{question.s_description}}</h3>
							<!-- Pour chaque question, on affiche dynamiquement toutes les sous-questions avec les choix de reponse pour chacune -->
							<div v-for="subQuestion in question.a_subQuestions" :key="subQuestion.i_id">
								<h4>{{subQuestion.s_description}}</h4>
								<div class="row">
									<label v-for="answer in question.a_answers" :key="answer" class="col">
										<input type="radio" :name="question.i_id+'.'+subQuestion.i_id" v-on:change="setAnswer" :checked="o_answers[question.i_id][subQuestion.i_id] === answer" required>
										<span class="answer">{{answer}}</span>
									</label>
								</div>
							</div>
						</div>
						<div class="row">
							<button class="custom-btn col" v-on:click="toQuitter">Quitter le questionnaire</button>
							<button class="custom-btn col" type="submit">Soumettre mes réponses</button>
						</div>
					</form>
				</div>
				<LesNiveaux class="col-3" v-if="i_current_level !== 4" :niveau="i_current_level" :nbrQuestion="getNbrQuestion()"/>
			</div>
		</div>
	</div>
</template>

<script>
	import Title from "../../components/Title";
	import VoletPerso from "../../components/VoletPerso";
	import LesNiveaux from "../../components/LesNiveaux";
	import {introQuestionnaire, isLoginEnabled, titleBoussole} from "../../util/sharedData";
	import Request from "../../util/request";
	import DimProgression from "../../components/DimProgression";

	/**
	 * Fonction qui stocke localement les ressources suggerees en retirant les doublons
	 * @param {Array} a_ressources La liste des nouvelles ressources suggerees par la retroaction actuelle
	 */
	function saveRessources(a_ressources) {
		let s_suggestedRessources = localStorage.getItem("dadi_suggested_res") || "[]";
		let a_suggestedRessources = JSON.parse(s_suggestedRessources);
		a_suggestedRessources.push(...a_ressources);
		a_suggestedRessources = a_suggestedRessources.filter((o_ressource, i_index, a_currentRessources) => {
			return a_currentRessources.findIndex((o_res) => o_ressource.i_id === o_res.i_id) === i_index;
		});
		s_suggestedRessources = JSON.stringify(a_suggestedRessources);
		localStorage.setItem("dadi_suggested_res", s_suggestedRessources);
	}

	/**
	 * Fonction que met a jour la progression de l'utilisateur localement. Ajoute le questionnaire recu dans la liste
	 * des questionnaires completes
	 * @param {String} s_completedQuestionnaire identifiant du questionnaire complete a ajouter dans le stockage local
	 */
	function updateProgression(s_completedQuestionnaire) {
		let s_cached_value = localStorage.getItem("dadi_quest_completed") || s_completedQuestionnaire;
		if (s_cached_value !== s_completedQuestionnaire)
			s_cached_value += "," + s_completedQuestionnaire;

		localStorage.setItem("dadi_quest_completed", s_cached_value);
	}

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
	 * Fonction qui met a jour le niveau courant en passant au prochain s'il est complete. Les donnees sur la progression
	 * du niveau courant sont supprimees si on passe au prochain niveau (dadi_quest_completed et dadi_quest_to_complete)
	 */
	function updateCurrentLevel() {
		// Recuperer le dernier niveau commence, s'il existe
		const s_last_level = localStorage.getItem("dadi_last_level");
		if (s_last_level !== null)
		{
			// Si tous les questionnaires du dernier niveau sont completes, passer au prochain et reinitialiser l'avancement
			const s_questToComplete = localStorage.getItem("dadi_quest_to_complete");
			const s_questCompleted = localStorage.getItem("dadi_quest_completed");
			if (s_questToComplete !== null && s_questCompleted !== null && isLevelCompleted(s_questToComplete, s_questCompleted)) {
				localStorage.removeItem("dadi_quest_completed");
				localStorage.removeItem("dadi_quest_to_complete");

				// augmenter le niveau courant de 1
				this.i_current_level = parseInt(s_last_level) + 1;
				localStorage.setItem("dadi_last_level", this.i_current_level);
			} else {
				this.i_current_level = parseInt(s_last_level);
			}
		}
	}

	export default {
		name: "QuestionnaireDim",
		components: {
			DimProgression,
			VoletPerso,
			LesNiveaux,
			Title
		},
		data() {
			return {
				titleBoussole,
				isLoginEnabled,
				introQuestionnaire,
				a_questions: null,
				o_answers: {},
				s_idQuestionnaire: null,
				i_current_level: 1,
				a_current_dimensions: [],
				a_questCompleted: []
			}
		},
		/**
		 * Recuperation des questions du questionnaire courant via le serveur selon le id recu dans le chemin.
		 * Si l'utilisateur a deja commence le questionnaire, ses dernieres reponses sont recuperees localement
		 */
		created() {
			// Mettre a jour le niveau courant si on entre dans un nouveau niveau
			updateCurrentLevel.call(this);
			if (this.i_current_level === 4) {
				this.$router.push({path: "/diagnostic/fin"});
			} else {
				// Recuperer les questionnaires possibles pour le niveau courant
				Request.getQuestionnaires(1, this.i_current_level)
				.then((a_questionnaires) => {
					// conserver la liste des dimensions du niveau courant
					this.a_current_dimensions = a_questionnaires;
					localStorage.setItem("dadi_level_components", JSON.stringify(this.a_current_dimensions));

					// retirer les dimensions deja completees pour le niveau courant, si elles existent
					const s_questionnaireCompleted = localStorage.getItem("dadi_quest_completed");
					if (s_questionnaireCompleted !== null) {
						this.a_questCompleted = s_questionnaireCompleted.split(",");
					} else {
						const s_questToComplete = a_questionnaires.map((o_questionnaire) => {
							return o_questionnaire.i_id;
						}).join(",");
						localStorage.setItem("dadi_quest_to_complete", s_questToComplete);
					}
				})
				.catch(() => {
					alert("Nous avons rencontré une erreur inattendue.\n Veuillez réessayer plus tard.");
				});
			}
		},
		methods: {
			/**
			 * Fonction qui envoie les reponses au serveur et navigue vers la page de retroaction si c'est un succes.
			 * Avant de naviguer, on met a jour l'avancement des questionnaires dans les donnees locales du navigateur.
			 * @param {Event} e_event Action ayant declenchee le traitement, lorsque le formulaire est soumis
			 */
			toFeedback(e_event) {
				// Requis pour arreter le traitement normal du formulaire et eviter des erreurs
				e_event.preventDefault();

				Request.sendAnswers(1, this.s_idQuestionnaire, this.o_answers)
				.then((o_feedback) => {

					// mettre a jour la progression de l'utilisateur
					updateProgression(this.s_idQuestionnaire);
					// Enregistrer les ressource suggerees
					saveRessources(o_feedback.a_ressources);

					// Convertir la retroaction en string pour la conservation et le passage a la prochaine page
					const s_feedback = JSON.stringify(o_feedback);
					localStorage.setItem("dadi_last_feedback", s_feedback);
					console.log(o_feedback);
					this.$router.push({
						name: "PageResult",
						params: {
							feedback: s_feedback
						}
					});
				})
				.catch(() => {
					alert("Nous avons rencontré une erreur inattendue.\n Veuillez réessayer plus tard.")
				});
			},
			/**
			 * Fonction appelee lors de la selection d'une reponse qui met a jour l'objet de reponses a envoyer au serveur
			 * et la sauvegarde locale des reponses pour le questionnaire courant
			 * @param {Event} e_event Evenement ayant declenche l'appel. Utilise pour recuperer la reponse. Le target
			 * 						  est toujours un input qui a un label associe (son parent)
			 */
			setAnswer(e_event) {
				const a_question = e_event.target.name.split(".");
				// Assigner la reponse courante en retirant tout espace superflu
				this.o_answers[a_question[0]][a_question[1]] = e_event.target.labels[0].textContent.trim();
				localStorage.setItem("dadi_questionnaire_" + this.s_idQuestionnaire, JSON.stringify(this.o_answers));
			},
			/**
			 * Fonction appelee pour envoyer au composant le nombre de questionnaire du niveau
			 */
			getNbrQuestion(){
				const tabQuestion = localStorage.getItem("dadi_quest_to_complete");
				return tabQuestion !== null ? tabQuestion.split(",").length : 0;
			},
			/**
			 * Fonction qui recupere et affiche le questionnaire selectionne. La validation du questionnaire est faite
			 * par le composant DimProgression avant d'appeler cette fonction.
			 * @param {String} s_idQuestionnaire Identifiant du sous questionnaire a recuperer
			 */
			getQuestionnaireSelected(s_idQuestionnaire) {
				this.s_idQuestionnaire = s_idQuestionnaire;
				localStorage.setItem("dadi_last_level", this.i_current_level);

				// recupere les questions a afficher
				Request.getQuestions(1, this.s_idQuestionnaire)
				.then((a_data) => {
					this.a_questions = a_data;

					// Recupere les reponses locales si elles existent
					const s_lastAnswers = localStorage.getItem("dadi_questionnaire_" + this.s_idQuestionnaire);
					if (s_lastAnswers !== null) {
						this.o_answers = JSON.parse(s_lastAnswers);
					} else {
						// sinon, reinitialiser l'objet, car on pourrait venir d'un autre questionnaire et initialiser
						// chaque question avec un ensemble de reponses vide
						this.o_answers = {};
						this.a_questions.forEach((o_question) => {
							this.o_answers[o_question.i_id] = {};
						});
					}
				})
				.catch(() => {
					alert("Nous avons rencontré une erreur inattendue.\n Veuillez réessayer plus tard.")
				})
			},
			/**
			 * Quitter le questionnaire sans soumettre les reponses et se rediriger vers la page de fin
			 */
			toQuitter() {
				this.$router.push({path: "/diagnostic/fin"});
			}
		}
	};
</script>

<style scoped>
	h2{
		text-transform: uppercase;
		font-weight: 900;
		font-size: 15pt;
		color: #222277;
		padding-bottom: 25px;
	}
	h4{
		font-weight: 800;
		color: #222277;
		margin-top: 40px;
	}
	h3, h4 {
		font-size: 16pt;
	}
	.questionnaire{
		margin-top: 30px;
	}
	input {
		display: block;
		width: 22px;
		height: 22px;
		margin-left: auto;
		margin-right: auto;
	}
	label {
		margin-top: 10px;
	}
	.answer {
		display: block;
		text-transform: capitalize;
		text-align: center;
		margin-left: auto;
		margin-right: auto;
		padding-top: 5px;
		font-size: 15pt;
	}
	.intro-section.row {
		margin-left: 0;
		margin-right: 0;
		margin-bottom: 60px;
	}
	.intro-section>img {
		margin-top: auto;
		margin-bottom: auto;
	}

	.intro {
		font-weight: bold;
		font-size: 20pt;
		color: #18c687;
		margin-bottom: 20px;
	}
	.more {
		font-size: 16pt;
		width: calc(100% - 60px);
		padding-left: 19px;
	}

	.custom-btn {
		margin-left: 15px;
		margin-right: 15px;
		margin-top: 60px;
		height: 38px;
	}

	.col-6 {
		padding-right: 0;
	}
</style>
