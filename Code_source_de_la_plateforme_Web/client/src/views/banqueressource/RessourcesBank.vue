<template>
	<div class="main-component">
		<Title :mainTitle="titleRessource.mainTitle" :subtitle="titleRessource.subtitle"/>
		<div class="contenu">
			<div class="filter-section">
				<AutoComplete :s_placeholder="headerFilters.placeholder" v-on:tagSelect="addTag"/>
				<!-- Affichage des filtres selon chaque categorie -->
				<Dropdown filter-id="contexts" :filter-text="headFiltersShort.formation" :filter-items="ressourceFilters.formation" v-on:filterChange="changeFilter"/>
				<Dropdown filter-id="themes" :filter-text="headFiltersShort.theme" :filter-items="ressourceFilters.thematique" v-on:filterChange="changeFilter"/>
				<Dropdown filter-id="format" :filter-text="headFiltersShort.format" :filter-items="ressourceFilters.format" v-on:filterChange="changeFilter"/>
				<Dropdown filter-id="license" :filter-text="headFiltersShort.licence" :filter-items="ressourceFilters.licence" v-on:filterChange="changeFilter"/>
				<Dropdown filter-id="audiences" :filter-text="headFiltersShort.cible" :filter-items="ressourceFilters.cible" v-on:filterChange="changeFilter"/>
				<Dropdown filter-id="duration" :filter-text="headFiltersShort.temps" :filter-items="ressourceFilters.temps" v-on:filterChange="changeFilter"/>
				<button class="custom-btn search-btn" v-on:click="filterRessources">Rechercher</button>
			</div>
			<!-- Affichage des filtres appliques seulement si une recherche a ete faite -->
			<div class="applied-keywords" v-if="currentFilter.tags.length > 0">
				<!-- Affiche un bouton pour chacun des filtres appliques dans la recherche -->
				<button class="etiquette-btn" v-for="filter of currentFilter.tags" v-bind:key="filter" v-on:click="removeTag(filter)">{{filter}}<div class="remove-icon"/></button>
			</div>
			<div class="nb-find">{{a_ressources.length}} ressource(s) trouvée(s)</div>
			<button class="custom-btn to-pdf" v-on:click="saveAsPDF">Télécharger la liste (PDF)</button>
			<div class="row">
				<!-- Affichage dynamique des ressources selon le resultat d'une recherche ou les donnees initiales -->
				<RessourceTile v-for="(res, index) in a_ressources" v-bind:ressource="res" :position="index" v-bind:key="res.i_id"/>
			</div>
		</div>
		<Legend/>
	</div>
</template>

<script>
import Title from "../../components/Title";
import Dropdown from "../../components/Dropdown";
import Request from "../../util/request";
import RessourceTile from "../../components/RessourceTile";
import { ressourceFilters, headerFilters, headFiltersShort, titleRessource, textePDF } from "../../util/sharedData";
import Legend from "../../components/Legend";
import AutoComplete from "../../components/AutoComplete";
import pdfExport from "../../util/pdfExport";

export default {
	name: "RessourcesBank",
	components: {
		AutoComplete,
		Legend,
		Title,
		Dropdown,
		RessourceTile
	},
	/**
	 * Fonction recuperant la liste des ressources sans filtres une fois la page generee
	 */
	created() {
		Request.getRessources()
			.then((a_res_data) => {
				this.a_ressources = a_res_data;
			})
			.catch(() => {
				this.a_ressources = [];
				alert("Nous avons rencontré une erreur inattendue.\n Veuillez réessayer plus tard.");
			})
	},
	/**
	 * Initialise les donnees utilisees par la banque de ressources
	 */
	data() {
		return {
			titleRessource,
			ressourceFilters,
			headerFilters,
			headFiltersShort,
			currentFilter: {
				contexts: [],
				themes: [],
				format: [],
				license: [],
				audiences: [],
				duration:[],
				tags: []
			},
			b_filter_applied: false,
			applied_filters: [],
			a_ressources: []
		}
	},
	methods: {
		/**
		 * fonction enregistrant la liste des ressources sous format pdf
		 */
		saveAsPDF: function() {
			const o_pdf = pdfExport.getNewPDFInstance({format: "letter"});

			o_pdf.writeTitle(textePDF.introBanqueRessources.title);
			o_pdf.writeSubtitle(textePDF.introBanqueRessources.subtitle);
			this.a_ressources.forEach((o_ressource) => {
				o_pdf.writeRessource(o_ressource.s_format + " - " + o_ressource.s_name, {
					url: window.location.protocol + window.location.host + "/banqueressource/" + o_ressource.i_id
				});
			});
			o_pdf.save("dadi_recherche");
		},
		/**
		 * Fonction ajoutant ou retirant un element du filtre qui sera eventuellement envoye a la BD
		 * @param {Object} o_filterChanged Contient le filtre affecte (s_name), la valeur modifiee (s_value) et
		 * si cette valeur est selectionnee ou non (b_selected)
		 */
		changeFilter: function(o_filterChanged) {
			if (o_filterChanged.b_selected) {
				this.currentFilter[o_filterChanged.s_name].push(o_filterChanged.s_value);
				this.applied_filters.push(o_filterChanged.s_value);
			}
			else {
				const i_valueIndex = this.currentFilter[o_filterChanged.s_name].indexOf(o_filterChanged.s_value);
				if (i_valueIndex !== -1)
					this.currentFilter[o_filterChanged.s_name].splice(i_valueIndex, 1);
			}
		},
		/**
		 * Fonction appelee quand le composant Autocomplete emet un evenement d'etiquette selectionne pour l'ajouter
		 * a la liste des filtres courants s'il n'y est pas deja
		 */
		addTag(s_tagValue) {
			if (!this.currentFilter.tags.includes(s_tagValue))
				this.currentFilter.tags.push(s_tagValue);
		},
		/**
		 * fonction envoyant les filtres selectionnes au serveur et qui recupere la liste des ressources correspondantes
		 */
		filterRessources: function() {
			this.b_filter_applied = true;
			Request.getRessources(this.currentFilter)
				.then((result) => {
					this.a_ressources = result;
				})
				.catch(() => {
					alert("Nous avons rencontré une erreur inattendue.\n Veuillez réessayer plus tard.");
				})
		},
		/**
		 * fonction qui retire l'etiquette de la liste des filtres applicables
		 */
		removeTag(s_tagToRemove) {
			const i_tagIndex = this.currentFilter.tags.indexOf(s_tagToRemove);
			if (i_tagIndex !== -1)
				this.currentFilter.tags.splice(i_tagIndex, 1);
		}
	}
};
</script>

<style scoped>
	.contenu {
		min-height: 1750px;
	}
	.row {
		margin-left: 0;
		margin-right: 0;
	}
	.search-btn {
		height: 38px;
		margin-left: 17px;
		width: 141px;
	}
	.etiquette-btn {
		height: 38px;
		border: none;
		padding: 0 17px;
		background-color: #818285;
		color: white;
		display: inline-flex;
		align-items: center;
		margin-right: 13px;
		margin-bottom: 13px;
	}
	.remove-icon {
		display: inline-block;
		height: 25px;
		width: 25px;
		border-radius: 50%;
		background: white url("../../assets/banqueRessource/x.png") no-repeat center;
		color: #818285;
		margin-left: 8px;
	}
	.filter-section {
		margin-bottom: 33px;
	}
	.applied-keywords {
		margin-bottom: 46px;
	}
	.nb-find {
		font-size: 16pt;
		font-weight: bold;
		color: #818285;
		display: inline-block;
	}
	.to-pdf {
		height: 38px;
		padding: 0 12px;
		margin-left: 42px;
	}
</style>