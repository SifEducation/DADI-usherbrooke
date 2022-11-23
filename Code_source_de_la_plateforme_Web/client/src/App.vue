<template>
	<div class="global-container">
		<nav id="nav">
			<img class="img-header" alt="Logo DADI" src="@/assets/app/logo2.png"/>
			<div class="bandeau">
				<router-link to="/">Accueil</router-link>
				<div class="dropdown">
					<router-link class="dropbtn" :class="setActiveRoute('/apropos')" to="/apropos/notreequipe">À propos</router-link>
					<div class="dropdown-content">
						<router-link to="/apropos/demarche">Démarche</router-link>
						<router-link to="/apropos/notreequipe">Équipe</router-link>
						<router-link to="/apropos/nospartenaires">Partenaires</router-link>
						<router-link to="/apropos/cadre">Présentation du projet</router-link>
						<router-link to="/apropos/CodeSource">Code source</router-link>
					</div>
				</div>
				<!--<router-link :class="setActiveRoute('/diagnostic')" to="/diagnostic">autoévaluation</router-link>-->
				<router-link :class="setActiveRoute('/banqueressource')" to="/banqueressource">ressources</router-link>
				<router-link class="dropbtn" :class="setActiveRoute('/guide')" to="/guide">guide</router-link>
				<router-link :class="setActiveRoute('/contact')" to="/contact">contact</router-link>
				<!--		<router-link to="/connexion">Connexion</router-link>-->
			</div>
		</nav>
		<router-view/>
		<footer>
			<div class="footer top">
				<div class="col footer-left pl-0">
					<img alt="Logo udes" src="@/assets/app/udes.png" />
				</div>
				<div class="col">
					<img class="img-footer" alt="Logo pole innovation" src="@/assets/app/POLEINNOVATION.png"/>
				</div>
				<div class="col footer-right pr-0">
					<img class="img-footer-right" alt="Logo creative common" src="@/assets/app/creativeCommon.png" /><br/><br/>
					<router-link class="codeSource" to="/apropos/codesource">Code source du DADI</router-link>
				</div>
			</div>
			<div class="footer bottom">
				<div class="col footer-left pl-0">
					<img alt="Logo Fabrique REL" src="@/assets/app/FabriqueREL.png" />
				</div>
				<div class="col">
					<img alt="Logo FIP" src="@/assets/app/FIP.png" />
				</div>
				<div class="col footer-right pr-0">
					<img alt="Logo EES" src="@/assets/app/educationEnseignementSuperieur.png" />
				</div>
			</div>
		</footer>
	</div>
</template>

<script>
	export default {
		methods: {
			/**
			 * Navigation vers la page recu en parametre
			 */
			showPage(s_path) {
				this.$router.push({path: s_path});
			},
			/**
			 * definit si l'onglet est actif selon le chemin actuel
			 * @param {String} s_input Chemin parent a verifier
			 * @returns {{"router-link-active": boolean}} La classe active ou non
			 */
			setActiveRoute(s_input) {
				return {
					"router-link-active": this.$route.path.startsWith(s_input)
				};
			}
		}
	};
</script>

<style>
	@font-face {
		font-family: "NunitoSans";
		src: url(./fonts/Nunito_Sans/NunitoSans-Regular.ttf) format("truetype");
	}
	@font-face {
		font-family: "NunitoSans";
		src: url(./fonts/Nunito_Sans/NunitoSans-Bold.ttf) format("truetype");
		font-weight: bold;
	}
	@font-face {
		font-family: "NunitoSans";
		src: url(./fonts/Nunito_Sans/NunitoSans-BoldItalic.ttf) format("truetype");
		font-weight: bold;
		font-style: italic;
	}
	@font-face {
		font-family: "NunitoSans";
		src: url(./fonts/Nunito_Sans/NunitoSans-Black.ttf) format("truetype");
		font-weight: 900;
	}
	@font-face {
		font-family: "NunitoSans";
		src: url(./fonts/Nunito_Sans/NunitoSans-BlackItalic.ttf) format("truetype");
		font-weight: 900;
		font-style: italic;
	}
	@font-face {
		font-family: "NunitoSans";
		src: url(./fonts/Nunito_Sans/NunitoSans-ExtraBold.ttf) format("truetype");
		font-weight: 800;
	}
	@font-face {
		font-family: "NunitoSans";
		src: url(./fonts/Nunito_Sans/NunitoSans-ExtraBoldItalic.ttf) format("truetype");
		font-weight: 800;
		font-style: italic;
	}
	@font-face {
		font-family: "NunitoSans";
		src: url(./fonts/Nunito_Sans/NunitoSans-ExtraLight.ttf) format("truetype");
		font-weight: 200;
	}
	@font-face {
		font-family: "NunitoSans";
		src: url(./fonts/Nunito_Sans/NunitoSans-ExtraLightItalic.ttf) format("truetype");
		font-weight: 200;
		font-style: italic;
	}
	@font-face {
		font-family: "NunitoSans";
		src: url(./fonts/Nunito_Sans/NunitoSans-Italic.ttf) format("truetype");
		font-style: italic;
	}
	@font-face {
		font-family: "NunitoSans";
		src: url(./fonts/Nunito_Sans/NunitoSans-Light.ttf) format("truetype");
		font-weight: 300;
	}
	@font-face {
		font-family: "NunitoSans";
		src: url(./fonts/Nunito_Sans/NunitoSans-LightItalic.ttf) format("truetype");
		font-weight: 300;
		font-style: italic;
	}
	@font-face {
		font-family: "NunitoSans";
		src: url(./fonts/Nunito_Sans/NunitoSans-SemiBold.ttf) format("truetype");
		font-weight: 600;
	}
	@font-face {
		font-family: "NunitoSans";
		src: url(./fonts/Nunito_Sans/NunitoSans-SemiBoldItalic.ttf) format("truetype");
		font-weight: 600;
		font-style: italic;
	}

	#app {
		font-family: "NunitoSans", sans-serif;
		color: #2c3e50;
	}
	/*CSS pour le bandeau du site internet*/
	#nav {
		height: 134px;
		border-bottom: 2px solid #15e89c;
		text-align: right;
	}
	.global-container {
		position: relative;
		min-height: 100vh;
		overflow-x: hidden;
	}
	.bandeau {
		display: inline-block;
		margin-right: calc(349px - (1920px - 100vw) / 2);
		padding-top: 60px;
	}
	.bandeau a:hover {
		text-decoration: none;
		color: #a54399;
	}
	.bandeau a {
		text-transform: uppercase;
		font-weight: bold;
		font-size: 13pt;
		color: #2e2c73;
		padding-left: 15px;
	}
	.bandeau a.router-link-active {
		color: #a54399;
	}
	.dropbtn {
		border: none;
	}
	.dropdown {
		display: inline-block;
	}
	.dropdown-content {
		display: none;
		position: absolute;
		left: -20px;
		min-width: 160px;
		z-index: 1;
		padding-top: 20px;
		text-align: left;
	}
	.dropdown-content a {
		text-transform: none;
		background-color: #222277;
		color: white;
		font-weight: bold;
		font-size: 11pt;
		padding: 12px 18px;
		text-decoration: none;
		display: block;
		border-bottom: white 1px solid;
	}
	.dropdown-content a:hover {
		background-color: #323293;
		color: white;
		text-decoration: none;
	}
	.dropdown:hover .dropdown-content {
		display: block;
	}
	.img-header {
		position: absolute;
		top: 36px;
		left: calc(349px - (1920px - 100vw) / 2);
	}

	/*CSS pour le footer du site */
	footer {
		position: absolute;
		bottom: 0;
		width: 100%;
	}
	.footer {
		text-align: center;
		display: flex;
		align-items: center;
		padding-left: calc(349px - (1920px - 100vw) / 2);
		padding-right: calc(349px - (1920px - 100vw) / 2);
	}
	.top {
		background-color: #323292;
		height: 177px;
	}
	.bottom {
		background-color: #222376;
		height: 267px;
	}
	.footer-right {
		text-align: right;
		padding-right: 0;
	}
	.footer-left {
		text-align: left;
		padding: 0;
	}
	.codeSource{
		text-transform: none;
		color: white;
		font-weight: bold;
		font-size: 12pt;
	}
	.codeSource:hover{
		color: #22fbad;
	}

	/*CSS partage entre toutes les pages du site*/
	.main-component {
		padding-bottom: 464px;    /* Footer height + 20px */
		overflow-x: hidden;
	}
	.main-component>* {
		padding-left: calc(349px - (1920px - 100vw) / 2);
		padding-right: calc(349px - (1920px - 100vw) / 2);
	}
	.main-component>title {
		padding-left:0;
		padding-right: 0;
		padding-top: 0;
	}
	.contenu{
		padding-top: 117px;
		padding-bottom: 125px;
	}
	.custom-btn{
		background-color: #15e89c;
		font-size: 11pt;
		color: #222277;
		font-weight: bold;
		text-transform: uppercase;
		border: none;
	}
	.custom-btn:hover{
		background-color: #22fbad;
	}

</style>
