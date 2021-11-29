<template>
	<div :class="'niveau niv' + i_level">
		<div class="inside">
			<img class="img-niveau" alt="Image niveau" :src="require('@/assets/questionnaire/icon_niv' + i_level + '.png')"/>
			&nbsp;&nbsp;Niveau {{i_level}} :
			<div :class="'rond ' + getSelectableClass(questionnaire.i_id)" v-for="questionnaire in a_current_dimensions" v-bind:key="questionnaire.i_id" v-on:click="getQuestionnaireSelected($event, questionnaire.i_id)">
				<img alt="Image dimension" :src="require('@/assets/questionnaire/' + getImageSource(questionnaire.a_components))"/>
				<!-- Pour afficher le tooltip -->
				<span class="tooltip-text">{{getText(questionnaire.a_components)}}</span>
				<div class="current-dim"></div>
			</div>
		</div>
	</div>
</template>
<script>
	import { niveau1, niveau2, niveau3 } from "../util/sharedData";
	const imagesNiv = [ niveau1, niveau2, niveau3];

	export default {
		name: "DimProgression",
		props: {
			a_current_dimensions: Array,
			a_quest_completed: Array,
			i_level: Number,
			b_isResultsPage: Boolean
		},
		methods: {
			/**
			 * Fonction qui determine si la dimension (sous-questionnaire) donnee a deja ete completee
			 * @param {Number|String} i_idDim Identifiant du sous-questionnaire a verifier
			 * @returns {boolean} Retourne vrai si la dimension est completee, faux autrement
			 */
			isDimensionCompleted(i_idDim) {
				return this.a_quest_completed.includes(i_idDim.toString());
			},
			/**
			 * Fonction qui determine le nom de la classe a ajouter pour un sous-questionnaire complete selon le niveau
			 * et s'il est clickable selon la page sur laquelle le composant se trouve
			 * @param {number} i_id Identifiant du sous questionnaire pour lequel on veut la classe
			 * @returns {string} Retourne le nom de la classe a utiliser si le sous-questionnaire est complete, une
			 * 					 chaine vide si la sous-questionnaire n'est pas complete
			 */
			getSelectableClass(i_id) {
				if (this.isDimensionCompleted(i_id)) {
					return "niv" + this.i_level + "-completed";
				} else if (!this.b_isResultsPage) {
					return "clickable";
				}
				return "";
			},
			/**
			 * Fonction recuperant l'image associee aux dimensions du questionnaire
			 * @param {Array} a_comps Liste des composantes associees au sous questionnaire courant
			 * @returns {String} chemin de l'image a afficher
			 */
			getImageSource(a_comps) {
				const s_compKey = a_comps.sort().join('_');
				return imagesNiv[this.i_level - 1][s_compKey].path;
			},
			/**
			 * Fonction qui retourne le texte a afficher pour une dimension donnee
			 */
			getText(a_comps) {
				const s_compKey = a_comps.sort().join('_');
				return imagesNiv[this.i_level - 1][s_compKey].nom;
			},
			/**
			 * Fonction qui appelle la fonction de son parent si elle existe et que la dimension n'est pas completee. Il
			 * ajoute une classe courante pour afficher a l'utilisateur
			 * @param {Event} e_event Evenement ayant declenche la fonction qui permet de recuperer l'element courant
			 * @param {String} s_idQuestionnaire Identifiant du sous questionnaire a recuperer
			 */
			getQuestionnaireSelected(e_event, s_idQuestionnaire) {
				if (this.$parent.getQuestionnaireSelected !== undefined && !this.isDimensionCompleted(s_idQuestionnaire)) {
					const a_dimensionsComp = document.getElementsByClassName("rond");
					Array.prototype.forEach.call(a_dimensionsComp, comp => {
						comp.classList.remove("current");
					});
					e_event.currentTarget.classList.add("current");

					this.$parent.getQuestionnaireSelected(s_idQuestionnaire);
				}
			}
		}
	};
</script>
<style scoped>
	.inside {
		display: flex;
		align-items: center;
		position: relative;
		top: 10px;
		left: 20px;
	}
	.niveau {
		height: 80px;
		text-transform: uppercase;
		font-weight: 900;
		font-size: 18pt;
		color: white;
	}

	.niv1 {
		background-color: #18c687;
	}
	.niv2 {
		background-color: #a83fa1;
	}
	.niv3 {
		background-color: #3737dd;
	}
	.rond {
		width: 37px;
		height: 37px;
		display: inline-flex;
		position: relative;
		justify-content: center;
		align-items: center;
		margin-left: 12px;
		border-radius: 50%;
		background-color: white;
	}
	.clickable {
		cursor: pointer;
	}

	.niv1-completed {
		background-color: #51fdbf;
	}
	.niv2-completed {
		background-color: #edabe9;
	}
	.niv3-completed {
		background-color: #b5ccfe;
	}
	/* Tooltip text */
	.tooltip-text {
		position: absolute;
		bottom: 130%;
		visibility: hidden;
		font-weight: 600;
		font-size: 10pt;
		text-align: center;
		color: #222277;
		background-color: #e1e7ea;
		padding: 10px;
	}

	/* Tooltip arrow */
	.tooltip-text::after {
		content: "";
		position: absolute;
		top: 100%;
		left: 50%;
		margin-left: -9px;
		border-width: 8px;
		border-style: solid;
		border-color: #e1e7ea transparent transparent transparent;
	}
	.rond:hover .tooltip-text {
		visibility: visible;
	}
	.current-dim {
		visibility: hidden;
		position: absolute;
		top: 120%;
		width: 5px;
		height: 5px;
		background-color: white;
		border-radius: 50%;
	}
	.rond.current .current-dim {
		visibility: visible;
	}
</style>