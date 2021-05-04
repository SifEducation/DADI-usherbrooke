<template>
	<div class="contenuNiv">
		<h4 class="header">Mes ressources</h4>
		<div v-if="a_all_ressources.length > 0">
			<div id="prev-res">
				<router-link v-for="res in a_all_ressources" :key="res.i_id" :to="'/banqueressource/' + res.i_id">{{res.s_name}}<br/><br/></router-link>
			</div>
			<button class="custom-btn btn-volet" v-on:click="toPDF">Télécharger la liste</button>
		</div>
		<div v-else class="noRessource">
			Aucune ressource n'a été suggérée jusqu'à présent.
		</div>
		<!-- @TODO faire l'affichage du volet personnel pour un utilisateur connecte -->
	</div>
</template>

<script>
	import pdfExport from "../util/pdfExport";
	import { textePDF } from "../util/sharedData";

	export default {
		name: "VoletPerso",
		data() {
			return {
				a_all_ressources: []
			}
		},
		created() {
			const s_suggestedRes = localStorage.getItem("dadi_suggested_res") || "[]";
			this.a_all_ressources = JSON.parse(s_suggestedRes);
		},
		methods: {
			/**
			 * Fonction qui construit un fichier PDF avec la liste des ressources prealablement suggerees a l'utilisateur.
			 * Recupere une instance modifiee de jsPDF via le module pdfExport.
			 */
			toPDF() {
				const o_pdf = pdfExport.getNewPDFInstance({format: "letter"});

				o_pdf.writeTitle(textePDF.introSuggestion.title);
				o_pdf.writeSubtitle(textePDF.introSuggestion.subtitle);
				this.a_all_ressources.forEach((o_ressource) => {
					o_pdf.writeRessource(o_ressource.s_format + " - " + o_ressource.s_name, {
						url: window.location.protocol + window.location.host + "/banqueressource/" + o_ressource.i_id
					});
				});
				o_pdf.save("dadi_suggestions");
			}
		}
	};
</script>

<style scoped>
	a {
		color: black;
	}

	#prev-res {
		font-size: 14pt;
		max-height: 50vh;
		overflow: auto;
		padding-bottom: 2px;
		line-height: 1.15em;
	}
	.contenuNiv {
		width: 275px;
		border-right: 5px solid #e1e7ea;
		padding-right: 0;
	}
	.header {
		text-transform: uppercase;
		font-weight: 800;
		font-size: 25pt;
		color: #2e2c73;
		margin-bottom: 35px;
	}
	.noRessource {
		font-size: 16pt;
	}
	.btn-volet {
		padding: 10px;
		margin-top: 22px;
	}
</style>