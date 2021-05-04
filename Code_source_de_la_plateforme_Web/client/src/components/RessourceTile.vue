<template>
	<div :class="'ressource-tile ' + getCenter()">
		<h4>{{ressource.s_name}}</h4>
		<div class="description"><span>{{ressource.s_description}}</span></div>
		<div class="stick-bottom">
			<button class="custom-btn" v-on:click="showRessourceCard">Consulter la fiche complète</button>
			<!-- Affichage des icones selon chaque premiere valeur de filtre -->
			<div class="icon-div">
				<div>
					<img alt="cont" :src="getIconPath(ressourceFilters.formation, ressource.a_contexts[0])"/>
					<span class="tooltip-text">{{ressource.a_contexts[0]}}</span>
				</div>
				<div>
					<img alt="theme" :src="getIconPath(ressourceFilters.thematique, ressource.a_theme[0])"/>
					<span class="tooltip-text">{{ressource.a_theme[0]}}</span>
				</div>
				<div>
					<img alt="fmt" :src="getIconPath(ressourceFilters.format, ressource.s_format)"/>
					<span class="tooltip-text">{{ressource.s_format}}</span>
				</div>
				<div>
					<img alt="pub" :src="getIconPath(ressourceFilters.cible, ressource.a_audiences[0])"/>
					<span class="tooltip-text">{{ressource.a_audiences[0]}}</span>
				</div>
				<div>
					<img alt="lic" :src="getIconPath(ressourceFilters.licence, ressource.s_license)"/>
					<span class="tooltip-text">{{ressource.s_license}}</span>
				</div>
				<div>
					<img alt="tps" :src="getIconPath(ressourceFilters.temps, ressource.s_duration)"/>
					<span class="tooltip-text">{{ressource.s_duration}}</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { ressourceFilters } from "../util/sharedData";
	export default {
		name: "RessourceTile",
		props: {
			ressource: Object,
			position: Number
		},
		data() {
			return {
				ressourceFilters
			}
		},
		methods: {
			/**
			 * Fonction faisant la navigation vers une ressource particuliere selon l'identifiant recu
			 */
			showRessourceCard() {
				this.$router.push({path: `/banqueressource/${this.ressource.i_id}`});
			},
			/**
			 * Fonction qui recupere le bon icone selon la categorie recue et qui retourne son chemin
			 * @param {Array} a_categories Liste des options possibles pour la categorie courante
			 * @param {String} s_categorieToFind Valeur de la categorie a verifier (texte de la categorie)
			 * @returns {Module} Module resultant du chemin de l'image trouvee, ou une image par defaut
			 */
			getIconPath(a_categories, s_categorieToFind) {
				const o_categorie = a_categories.find((o_currentCategorie) => {
					return o_currentCategorie.text.toLowerCase() === s_categorieToFind.toLowerCase();
				});

				if (o_categorie) {
					return require('@/assets/'+ o_categorie.pictoPath.black);
				}
				return require('@/assets/iconLegend/a_determiner.png');
			},
			/**
			 * Fonction retournant une classe a utiliser pour appliquer des marges a gauche et droite si la tuile est
			 * au centre de la rangee.
			 * @returns {string} Nom de la classe pour indiquer une tuile du centre
			 */
			getCenter() {
				if (this.position % 3 === 1)
					return "margin-center";
				return "";
			}
		}
	};
</script>

<style scoped>
	h4 {
		color: #222277;
		font-size: 15pt;
		font-weight: 900;
		text-transform: uppercase;
		padding-top: 45px;
		padding-left: 20px;
		padding-right: 20px;
	}

	.ressource-tile {
		position: relative;
		width: 30%;
		border: 3px solid #c2cdd2;
		text-align: center;
		margin-top: 50px;
		padding-bottom: 120px;
	}

	.margin-center {
		margin-left: 5%;
		margin-right: 5%;
	}

	.description {
		font-size: 16pt;
		display: flex;
		height: 124px;
		align-items: center;
		margin: 33px 22px;
	}

	.description span {
		overflow: hidden;
		display: -webkit-box;
		-webkit-line-clamp: 4;
		-webkit-box-orient: vertical;
	}

	.custom-btn {
		height: 38px;
		width: 271px;
		margin-bottom: 30px;
	}

	.icon-div {
		height: 52px;
		background-color: #f0f5f8;
		display: flex;
		align-items: center;
		padding-left: 12px;
		padding-right: 12px;
	}

	.stick-bottom {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
	}

	.icon-div div {
		display: flex;
		position: relative;
		margin-left: auto;
		margin-right: auto;
		justify-content: center;
	}

	/* Tooltip text */
	.tooltip-text {
		text-transform: uppercase;
		font-weight: 600;
		font-size: 10pt;
		text-align: center;
		color: white;
		position: absolute;
		min-width: 100px;
		bottom: 140%;
		visibility: hidden;
		background-color: black;
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
		border-color: black transparent transparent transparent;
	}

	.icon-div div:hover .tooltip-text {
		visibility: visible;
	}

</style>