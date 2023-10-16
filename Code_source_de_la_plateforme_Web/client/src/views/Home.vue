<template>
	<div class="main-component">
		<div class="Title" >
			<img class="img-logo" alt="Logo DADI" src="@/assets/home/illustrationLOGO.png" />
			<img class="img-text" alt="Logo DADI" src="@/assets/home/AccueilTitre.png" />
		</div>
		<div class="row">
			<!--<div class="col">
				<img class="img-div" alt="boussole" src="@/assets/home/boussole.png" />
				<h3>La boussole</h3>
				<p>Pour vous porter un regard réflexif sur différentes dimensions de votre savoir technopédagogique disciplinaire et obtenir des pistes pour innover dans votre situation personnelle</p>
				<button class="custom-btn" v-on:click="toBoussole">faire le test</button>
			</div>-->
			<div class="col col-center" >
				<img class="img-div" alt="Livre" src="@/assets/home/livre.png" />
				<h3>La Banque de ressources</h3>
				<p>Pour consulter une banque complète d'outils et de ressources vous permettant de développer vos compétences en technopédagogie, classées selon vos besoins</p>
				<button class="custom-btn" v-on:click="toRessourceBank">consulter</button>
			</div>
			<div class="col">
				<img class="img-div" alt="Tete" src="@/assets/home/tete.png" />
				<h3>Le Guide pédagogique numérique</h3>
				<p>Pour consulter des dossiers thématiques de formation préparés sur mesure pour vous...</p>
				<button class="custom-btn" v-on:click="toNumericGuide">consulter</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Home",
		methods: {
			/**
			 * Navigation vers la page d'accueil de l'outil d'evaluation (les questionnaires)
			 */
			/*toBoussole: function() {
				this.$router.push({path: "/diagnostic"});
			},*/
			/**
			 * Navigation vers la page d'accueil de la banque de ressources
			 */
			toRessourceBank: function() {
				this.$router.push({path: "/banqueressource"});
			},
			/**
			 * Navigation vers le guide pedagogique numerique
			 */
			toNumericGuide: function() {
				this.$router.push({path: "/guide"});
			}
		}
	};
</script>

<style scoped>
	.row {
		margin-left: 0;
		margin-right: 0;
	}

	h3 {
		text-transform: uppercase;
		font-weight: 900;
		font-size: 25pt;
		color: #222277;
		text-align: center;
		margin: 125px 0 39px;
	}

	p {
		font-size: 14pt;
		text-align: center;
		margin: 0 41px 0;
	}

	.main-component {
		background-image: url("../assets/home/texture.png");
		background-repeat: no-repeat;
	}

	.Title {
		display: inline-block;
		margin-bottom: 144px;
	}

	.img-logo {
		padding-top: 80px;
		margin-right: 31px;
	}

	.img-text {
		position: absolute;
		padding-top: 163px;
	}

	.img-div {
		position: absolute;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.col {
		background-color: #f0f5f8;
		height: 532px;
		margin-bottom: 140px;
	}

	.col-center {
		margin: 0 38px 0;
	}

	.custom-btn {
		font-size: 16pt;
		width: 243px;
		height: 47px;
		position: absolute;
		bottom: 47px;
		left: 50%;
		transform: translate(-50%, -50%);
	}
</style>
