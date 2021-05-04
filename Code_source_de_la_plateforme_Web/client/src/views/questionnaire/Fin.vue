<template>
	<div class="main-component">
		<Title :main-title="titleBoussole.mainTitle" :subtitle="titleBoussole.subtitle"/>
		<div class="contenu">
			<div class="row">
				<VoletPerso class="col-3"/>
				<div class="col-6">
					<div class="row row-center">
						<h1>Merci d'avoir complété le formulaire</h1>
						<h2>Plusieurs options s’offrent à vous en vue de poursuivre la démarche : </h2>
					</div>
					<!--            //@todo Ajouter le login-->
					<div class="row content-down row-center" v-on:click="toRessource()">
						<div class="img">
							<img class="img-div" alt="livre" src="@/assets/questionnaireFin/livre-fin.png" />
						</div>
						<h4 class="choices">Consulter les ressources</h4>
					</div>
					<div class="row content-down row-center" v-on:click="toGuide()">
						<div class="img">
							<img class="img-div" alt="tete" src="@/assets/questionnaireFin/tete-fin.png" />
						</div>
						<h4 class="choices">Consulter le Guide pédagogique numérique</h4>
					</div>
					<div class="row content-down row-center" v-on:click="toForm()">
						<div class="img">
							<img class="img-div" alt="boussole" src="@/assets/questionnaireFin/boussole-fin.png" />
						</div>
						<h4 class="choices">Évaluer la boussole</h4>
					</div>
				</div>
				<div class="col-3 volet-droite">
					<div class="felicitation">
						<h3>Félicitation!</h3>
						<p>Vous avez complété la démarche</p>
						<div v-if="s_level === '4'">
							<button class="custom-btn" data-toggle="modal" data-target="#confirmRestart">Recommencer</button>
						</div>
						<div v-else>
							<button class="custom-btn" v-on:click="toQuestionnaire">Continuer</button>
						</div>
					</div>
					<div class="conditions">
						<span class="consulter">Consulter les </span>
						<router-link class="conditionClic" to="/conditions">conditions d'utilisation.</router-link>
					</div>
				</div>
			</div>
		</div>
	</div>
	<Modal s_id="confirmRestart" s_title="Voulez-vous vraiment recommencer?" :f_action="toRestart" s_action-text="Recommencer"
		s_content="Assurez-vous d'avoir enregistré les ressources proposées avant de recommencer sinon elles seront perdues. Voulez-vous recommencer le questionnaire à zéro?"/>
</template>

<script>
	import Title from "../../components/Title"
	import VoletPerso from "../../components/VoletPerso";
	import {titleBoussole, isLoginEnabled} from "../../util/sharedData";
	import Modal from "../../components/Modal";

	export default {
		name: "FinQuestionnaire",
		components: {
			Modal,
			VoletPerso,
			Title
		},
		data() {
			return {
				titleBoussole,
				isLoginEnabled,
				s_level: localStorage.getItem('dadi_last_level')
			}
		},
		methods: {
			/**
			 * Navigation vers la page de ressource
			 */
			toRessource() {
				this.$router.push({path: "/banqueressource"});
			},
			/**
			 * Navigation vers la page de ressource
			 */
			toGuide() {
				this.$router.push({path: "/guide"});
			},
			/**
			 * Navigation vers un formulaire microsoft form
			 */
			toForm() {
				this.$router.push({path: "/diagnostic/sondage"});
			},
			/**
			 * Navigation vers la creation d'un compte
			 */
			toCreationCompte() {
				// this.$router.push({path: "/connexion"});
				alert("fonctionnalité à venir");
			},
			/**
			 * Supprime toutes les donnees locales et redirige l'utilisateur au debut du questionnaire
			 */
			toRestart() {
				localStorage.clear();
				this.$router.push({path: "/diagnostic"});
			},
			/**
			 * Ramene a la page du choix du questionnaire
			 */
			toQuestionnaire() {
				this.$router.push({path: "/diagnostic/questionnaire"});
			}
		}
	};
</script>

<style scoped>
	h1{
		text-transform: uppercase;
		font-weight: 900;
		font-size: 15pt;
		padding-bottom: 38px;
		color: #222277;
	}
	h2{
		font-size: 16pt;
		padding-bottom: 57px;
	}
	h4{
		width: 520px;
		height: 100%;
		text-transform: uppercase;
		font-weight: 900;
		font-size: 18pt;
		color: #222277;
		background-color: #f0f5f8;
	}
	.row-center{
		padding-left: 15px;
	}
	.content-down{
		padding-left: 15px;
		padding-right: 15px;
		text-align: left;
		margin-bottom: 37px;
		cursor: pointer;
	}
	.choices{
		z-index: 1;
		height: 82px;
		padding-left: 80px;
		margin-top: auto;
		margin-bottom: auto;
		vertical-align: middle;
		display: flex;
		align-items: center;
	}
	.content-down:hover .choices{
		background-color: #dbe5ea;
	}
	.img{
		width: 51px;
		z-index: 99;
	}
	.img-div{
		transform: translateY(-10px);
	}

	/*CSS du volet de droite*/
	.volet-droite{
		padding-left: 0;
	}
	.felicitation{
		background-color: #a83fa1;
		padding-top: 33px;
		padding-left: 25px;
		padding-right: 25px;
		color: white;
		height: 400px;
	}
	h3{
		font-size: 25pt;
		font-weight: 800;
		text-transform: uppercase;
		margin-bottom: 38px;
	}
	p{
		font-weight: bold;
		font-size: 22pt;
		margin-bottom: 50px;
	}
	.custom-btn{
		font-size: 12pt;
		padding: 13px;
	}
	.conditions{
		font-size: 12pt;
		padding-top: 27px;
	}
	.consulter{
		color: black;
	}
	.conditionClic{
		font-weight: bold;
		color: #a83fa1;
	}
</style>