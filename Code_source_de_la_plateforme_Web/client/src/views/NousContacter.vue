<template>
	<div class=" main-component">
		<Title :main-title="titleContacter.mainTitle" :subtitle="titleContacter.subtitle"/>
		<div class="contenu">
			<div class="row">
				<div class="col-4">
					<h1>Pour nous contacter</h1>
					<h2>Avez-vous des questions ou des demandes à nous soumettre?</h2>
					<h2>Avez-vous des commentaires à nous faire parvenir?</h2>
					<h2>Souhaiteriez-vous proposer un ajout à la banque de ressources?</h2>
					<h3>Si vous souhaitez entrer en contact avec l’équipe du Pôle, faites-nous parvenir un message via le formulaire ci-dessous et nous nous ferons une joie de vous répondre, voire de collaborer avec vous!</h3>
				</div>
				<iframe class="col-8" src="https://forms.office.com/Pages/ResponsePage.aspx?id=RIdaOjVZ-UWUI7MsOl3ggkjY8-RzuENFg0xC2ggIr3lUNE02WlhQMkowSENJUUtYSDVMVUNOUzFJViQlQCN0PWcu&embed=true">Chargement…</iframe>

				<!-- Formulaire complet remplacant le MS forms si jamais il est decide de se tourner vers une option plus maison -->

				<!--        <form class="col-8">-->
				<!--    <div>-->
				<!--          <div class="form-field row">-->
				<!--            <div class="col">-->
				<!--              <label class="header" for="prenom">Prénom</label><br>-->
				<!--              <input type="demiText" id="prenom" name="prenom"/>-->
				<!--            </div>-->
				<!--            <div class="col">-->
				<!--              <label class="header" for="nom">Nom</label><br>-->
				<!--              <input type="demiText" id="nom" name="nom"/><br><br>-->
				<!--            </div>-->
				<!--          </div>-->
				<!--          <div class="form-field">-->
				<!--            <label class="header" for="courriel">Courriel</label><br>-->
				<!--            <input type="text" id="courriel" name="courriel"/><br><br>-->
				<!--          </div>-->
				<!--          <div class="form-field">-->
				<!--            <label class="header" for="etablissement">Établissement</label><br>-->
				<!--            <input type="text" id="etablissement" name="etablissement"/><br><br>-->
				<!--          </div>-->
				<!--          <div class="form-field">-->
				<!--            <label class="header" for="objet">Objet</label><br>-->
				<!--            <input type="text" id="objet" name="objet"/><br><br>-->
				<!--          </div>-->
				<!--          <div class="form-field">-->
				<!--            <label class="header" for="message">Message</label><br>-->
				<!--            <textarea id="message" name="message" rows="5" cols="30"></textarea><br><br>-->
				<!--          </div>-->
				<!--          <div class="form-row">-->
				<!--            <button class="custom-btn" type="button" onclick="alert('Une erreur est survenue..!')">Envoyer</button>-->
				<!--          </div>-->
				<!--          </form>-->
			</div>
		</div>
	</div>
</template>

<script>
	import Title from "../components/Title";
	import { titleContacter } from "@/util/sharedData";
	export default {
		name: "nouscontacter",
		components: {
			Title
		},
		methods: {},
		data() {
			return {
				titleContacter,
			}
		}
	};
</script>

<style scoped>
	h1 {
		text-transform: uppercase;
		font-weight: 800;
		font-size: 25pt;
		color: #222277;
		margin-bottom: 35px;
	}
	h2 {
		font-weight: bold;
		margin-bottom: 32px;
	}

	h3, h2 {
		font-size: 16pt;
		color: black;
	}

	iframe {
		height: 1400px;
		border: none;
	}

	/*******************************************************************************/
	/*CSS pour la section de nous contacter si le module de courriel est implemente*/
	/*******************************************************************************/
	input[type=text], select, textarea {
		width: 100%;
		padding: 12px;
		border: none;
		resize: vertical;
		background-color: #f0f5f8;
	}
	input[type=demiText], select, textarea {
		width: 100%;
		padding: 12px;
		border: none;
		resize: vertical;
		background-color: #f0f5f8;
	}

	.header {
		text-transform: uppercase;
		font-weight: 900;
		font-size: 15pt;
		color: #222277;
	}

	.custom-btn {
		font-weight: bold;
		font-size: 16pt;
		padding: 12px 40px 15px;
	}
	/*******************************************************************************/
	/*     Fin du CSS pour la section si le module de courriel est implemente      */
	/*******************************************************************************/
</style>