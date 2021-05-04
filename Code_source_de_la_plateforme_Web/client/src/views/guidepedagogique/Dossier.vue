<template>
	<div class=" main-component">
		<Title :main-title="titleGuide.mainTitle" :subtitle="titleGuide.subtitle"/>
		<div class="contenu">
			<div>
				<button :class="'btn-dossier ' + getActiveFile(1)"  v-on:click="toDossier(1)">Dossier 1</button>
				<button :class="'btn-dossier ' + getActiveFile(2)" v-on:click="toDossier(2)">Dossier 2</button>
				<button :class="'btn-dossier ' + getActiveFile(3)" v-on:click="toDossier(3)">Dossier 3</button>
				<button :class="'btn-dossier ' + getActiveFile(4)" v-on:click="toDossier(4)">Dossier 4</button>
				<button :class="'btn-dossier ' + getActiveFile(5)" v-on:click="toDossier(5)">Dossier 5</button>
				<button :class="'btn-dossier ' + getActiveFile(6)" v-on:click="toDossier(6)">Dossier 6</button>
			</div>
			<div class="row">
				<div class="col-4 img-dossier">
					<img class="img-div" alt="Image dossier" :src="require('@/assets/guide/dossier' + s_idDossier + '.png')" />
				</div>
				<div class="col">
					<h2>{{ nomDossier[s_idDossier -1] }}</h2>
				</div>
			</div>
			<div class="row ressource-tiles">
				<!-- Affichage dynamique des ressources selon le dossier courant -->
				<RessourceTile v-for="(res, index) in a_ressources" v-bind:ressource="res" :position="index" v-bind:key="res.i_id"/>
			</div>
			<button class="custom-btn btn-guide" v-on:click="toGuide()">Retourner au guide pédagogique</button>
		</div>
	</div>
</template>

<script>
import { nomDossier, introDossiers, titleGuide } from "../../util/sharedData";
import Request from "../../util/request";
import RessourceTile from "../../components/RessourceTile";
import Title from "../../components/Title";
export default {
	name: "Dossier",
	components: {
		RessourceTile,
		Title
	},
	/**
	 * Fonction qui va chercher les données pour l'affichage dynamique des ressources a afficher
	 * et le texte d'introduction du dossier.
	 */
	data() {
		return {
			a_ressources: null,
			nomDossier,
			introDossiers,
			titleGuide,
			s_idDossier: this.$route.params.idDossier
		};
	},
	created() {
		this.refreshRessources(this.$route.params.idDossier);
	},
	watch: {
		"$route.params.idDossier": function (s_id) {
			if (s_id)
				this.refreshRessources(s_id);
		}
	},
	/**
	 * Lien pour acceder a la ressource clique
	 */
	methods: {
		/**
		 * Fonction navigant vers la ressource selectionnee
		 */
		toRessource(idRessource) {
			this.$router.push({path: `/banqueressource/${idRessource}`});
		},
		/**
		 * Fonction qui recupere les ressources du dossier et met a jour l'affichage dynamique
		 * @param {String} s_id Identifiant du dossier pour lequel on souhaite les ressources
		 */
		refreshRessources(s_id) {
			this.s_idDossier = s_id;
			Request.getRessources({folder: this.s_idDossier})
				.then((a_res) => {
					this.a_ressources = a_res;
				})
				.catch(()=> {
					alert("C'est embarrassant... Nous n'avons pas retrouvé la ressource demandée.\n Veuillez réessayer plus tard.");
					this.$router.push({path: "/guide"});
				});
		},
		/**
		 * Navigation vers la page des conditions d'utilisations
		 */
		toGuide: function() {
			this.$router.push({path: "/guide"});
		},
		/**
		 * Lien pour acceder au dossier clique
		 */
		toDossier: function(idDossier) {
			this.$router.push({path: `/guide/${idDossier}`});
		},
		/**
		 * Fonction qui determine le nom de la classe a ajouter pour le dossier actif
		 * @param {number} i_id Identifiant du dossier courrant pour lequel on veut la classe
		 * @returns {string} Retourne le nom de la classe a utiliser si le dossier actif, une
		 * 					 chaine vide si le dossier n'est pas actif
		 */
		getActiveFile(i_id) {
			if (i_id === parseInt(this.s_idDossier)) {
				return "active-dossier";
			}
			return "";
		},
	}
};
</script>

<style scoped>
	.btn-dossier {
		border: 2px solid #c2cdd2;
		background-color: white;
		padding: 10px 23px;
		font-size: 12pt;
		font-weight: bold;
		color: #818285;
		margin-right: 17px;
	}
	.active-dossier {
		background-color: #dbe5ea;
	}
	.img-dossier {
		width: 363px;
	}
	h2 {
		font-size: 25pt;
		font-weight: 900;
		text-transform: uppercase;
		color: #222277;
	}
	.col {
		margin-top: auto;
		margin-bottom: auto;
	}
	.row {
		padding-top: 55px;
		padding-bottom: 70px;
	}
	.btn-guide {
		font-size: 12pt;
		padding: 10px 10px;
	}
	.ressource-tiles {
		margin-left: 0;
		margin-right: 0;
	}
</style>