<template>
	<div class="main-component">
		<Title :main-title="titleCodeSource.mainTitle" :subtitle="titleCodeSource.subtitle"/>
		<div class="contenu">
			<div>
				<p class="text-pres-haut">La plateforme web DADI s'inscrit dans la philosophie du partage de ressources éducatives libres entre les personnes formatrices au niveau supérieur.</p>
				<p class="text-pres">Cette section du site vous propose des liens de téléchargement vers les fichiers sources du projet DADI. </p>
			</div>
			<div class="row licence">
				<div class="col-4">
					<img class="info-licence" alt="Logo Creative commun" src="@/assets/codesSource/creative-common.png"/>
				</div>
				<div class="col-8 col-licence">
					<p class="info-licence"><strong>Le contenu est sous licence <a class="text-mauve" @click="toLicence()">CC-BY-NC-SA 4.0</a>.</strong></p>
					<p class="info-licence">Celle-ci vous permet en tant que personne utilisatrice de :</p>
					<ul>
						<li class="li-pres"><strong>Partager.</strong> Copier et redistribuer le contenu du DADI.</li>
						<li class="li-pres"><strong>Adapter.</strong> Remixer, adapter ou transformer le contenu original du DADI.</li>
					</ul>
					<p class="info-licence">...en respectant les conditions suivantes:</p>

					<ul>
						<li class="li-pres"><strong>Attribuer.</strong> Rendre le crédit à l'auteur en renvoyant à la ressource originale adaptée et en indiquant les changements réalisés (s'il y a lieu).</li>
						<li class="li-pres"><strong>Non commercialiser.</strong> Ne pas utiliser les ressources du DADI à des fins commerciales.</li>
						<li class="li-pres"><strong>Partager.</strong> Si les ressources du DADI sont remixées, transformées ou adaptées, ces nouvelles versions devront également être redistribuées sous la licence CC-BY-NC-SA 4.0</li>
					</ul>
					<button class="custom-btn btn-conditions" v-on:click="toConditions()">Consulter les conditions d'utilisation</button>
				</div>
			</div>
			<div class="row lien-codes">
				<div class="col col-gauche">
					<img class="img-div" alt="boussole" src="@/assets/codesSource/boussole-code.png" />
					<h4>Questionnaire de la boussole</h4>
					<p class="text-ressource">Si vous souhaitez adapter le questionnaire de l’outil d’autoévaluation à des fins pédagogiques ou de recherche, vous y avez accès ci-dessous.</p>
					<button class="custom-btn btn-codes" v-on:click="toCode('https://github.com/Pole-education/DADI/tree/main/Questionnaire_de_la_boussole')">Accéder au code</button>
				</div>
				<div class="col">
					<img class="img-div" alt="livre" src="@/assets/codesSource/livre-code.png" />
					<h4>Ressources originales de la banque </h4>
					<p class="text-ressource">Si vous souhaitez consulter l’ensemble des ressources originales de la banque de ressources, vous pouvez consulter le lien ci-dessous. </p>
					<button class="custom-btn btn-codes" v-on:click="toCode('https://github.com/Pole-education/DADI/tree/main/Ressources_originales_de_la_banque')">Accéder au code</button>
				</div>
			</div>
			<div class="row lien-codes-bas">
				<div class="col col-gauche">
					<img class="img-div" alt="plateforme" src="@/assets/codesSource/plateforme-code.png" />
					<h4>Code source de la plateforme Web </h4>
					<p class="text-ressource">Si vous souhaitez consulter l’infrastructure technologique derrière la plateforme DADI, vous pouvez accéder à une copie du code source via le lien ci-dessous.</p>
					<button class="custom-btn btn-codes" v-on:click="toCode('https://github.com/Pole-education/DADI/tree/main/Code_source_de_la_plateforme_Web')">Accéder au code</button>
				</div>
				<div class="col">
					<img class="img-div" alt="visuel" src="@/assets/codesSource/visuel-code.png" />
					<h4>Éléments visuels du&nbsp;site </h4>
					<p class="text-ressource">Si vous souhaitez télécharger les fichiers visuels sources de la plateforme web DADI, ceux-ci sont accessibles via le lien ci-dessous.</p>
					<button class="custom-btn btn-codes" v-on:click="toCode('https://github.com/Pole-education/DADI/tree/main/Elements_visuels_du_site ')">Accéder au code</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Title from "../../components/Title"
import { titleCodeSource} from "@/util/sharedData";

export default {
	name: "Contact",
	components: {
		Title
	},
	data() {
		return {
			titleCodeSource
		};
	},
	methods: {
		/**
		 * Navigation vers les différents liens de code source du site
		 */
		toCode: function(lien) {
			window.open(lien);
		},
		/**
		 * Navigation vers la page des conditions d'utilisations
		 */
		toConditions: function() {
			this.$router.push({path: "/conditions"});
		},
		/**
		 * Navigation vers la page de la licence
		 */
		toLicence(){
			window.open("https://creativecommons.org/licenses/by-nc-sa/4.0/");
		}
	}
};
</script>

<style scoped>
	h4 {
		font-weight: 900;
		font-size: 25pt;
		text-transform: uppercase;
		color: #222277;
		text-align: center;
		padding: 87px 52px 38px;
	}

	p, li {
		font-size: 16pt;
	}

	a {
		color: #a83fa1;
		font-weight: normal;
		cursor: pointer;
	}

	.text-pres-haut{
		margin-bottom: 33px;
	}

	.text-pres {
		margin-bottom: 64px;
	}

	.licence {
		border-bottom: solid 2px #e1e7ea;
		border-top: solid 2px #e1e7ea;
		margin-left: 2px;
		margin-right: 2px;
		margin-bottom: 102px;
	}

	.info-licence{
		padding-top: 38px;
		padding-left: 0;
	}

	.col-licence{
		padding-bottom: 38px;
		padding-right: 0;
	}

	.li-pres{
		margin-left: 40px;
	}

	.lien-codes{
		margin-bottom: 111px;
	}

	.lien-codes-bas, .lien-codes{
		margin-left: 0;
		margin-right: 0;
	}

	.col {
		height: 465px;
		margin-top: auto;
		margin-bottom: auto;
		vertical-align: middle;
		background-color: #f0f5f8;
		padding-right: 0;
		padding-left: 0;
	}

	.col-gauche {
		margin-right: 63px;
	}

	.img-div {
		position: absolute;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.text-ressource {
		font-size: 16pt;
		text-align: center;
		padding-left: 40px;
		padding-right: 40px;
	}

	.col-4 {
		padding-left: 0;
	}

	.custom-btn {
		font-size: 12pt;
	}

	.btn-conditions {
		padding: 12px 16px;
		margin-top: 33px;
	}

	.btn-codes {
		padding: 9px 18px;
		position: absolute;
		bottom: 40px;
		left: 50%;
		transform: translateX(-50%);
	}
</style>