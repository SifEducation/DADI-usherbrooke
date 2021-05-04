<template>
	<div class=" main-component">
		<Title :main-title="titleGuide.mainTitle" :subtitle="titleGuide.subtitle"/>
		<div class="contenu">
			<div class="row dossier">
				<div class="img-dossier">
					<img class="img-div" alt="dossier1" src="@/assets/guide/dossier1.png" />
				</div>
				<div class="col">
					<h5>{{nomDossier[0]}}</h5>
					<p>{{introDossiers[0]}}</p>
					<button class="custom-btn" v-on:click="toDossier(1)">Accéder au dossier</button>
				</div>
			</div>
			<div class="row dossier">
				<div class="img-dossier">
					<img class="img-div" alt="dossier2" src="@/assets/guide/dossier2.png" />
				</div>
				<div class="col">
					<h5>{{nomDossier[1]}}</h5>
					<p>{{introDossiers[1]}}</p>
					<button class="custom-btn" v-on:click="toDossier(2)">Accéder au dossier</button>
				</div>
			</div>
			<div class="row dossier">
				<div class="img-dossier">
					<img class="img-div" alt="dossier3" src="@/assets/guide/dossier3.png" />
				</div>
				<div class="col">
					<h5>{{nomDossier[2]}}</h5>
					<p>{{introDossiers[2]}}</p>
					<button class="custom-btn" v-on:click="toDossier(3)">Accéder au dossier</button>
				</div>
			</div>
			<div class="row dossier">
				<div class="img-dossier">
					<img class="img-div" alt="dossier4" src="@/assets/guide/dossier4.png" />
				</div>
				<div class="col">
					<h5>{{nomDossier[3]}}</h5>
					<p>{{introDossiers[3]}}</p>
					<button class="custom-btn" v-on:click="toDossier(4)">Accéder au dossier</button>
				</div>
			</div>
			<div class="row dossier">
				<div class="img-dossier">
					<img class="img-div" alt="dossier5" src="@/assets/guide/dossier5.png" />
				</div>
				<div class="col">
					<h5>{{nomDossier[4]}}</h5>
					<p>{{introDossiers[4]}}</p>
					<button class="custom-btn" v-on:click="toDossier(5)">Accéder au dossier</button>
				</div>
			</div>
			<div class="row dossier">
				<div class="img-dossier">
					<img class="img-div" alt="dossier6" src="@/assets/guide/dossier6.png" />
				</div>
				<div class="col">
					<h5>{{nomDossier[5]}}</h5>
					<p>{{introDossiers[5]}}</p>
					<button class="custom-btn" v-on:click="toDossier(6)">Accéder au dossier</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Title from "../../components/Title";
import { nomDossier, introDossiers, titleGuide } from "../../util/sharedData";
export default {
	name: "NumericGuide",
	/**
	 * Fonction qui va chercher le texte d'introduction du dossier et le titre
	 * @returns {{introDossiers}}
	 */
	data() {
		return {
			nomDossier,
			introDossiers,
			titleGuide
		};
	},
	components: {
		Title
	},
	/**
	 * Lien pour acceder au dossier clique
	 */
	methods: {
		toDossier: function(idDossier) {
			this.$router.push({path: `/guide/${idDossier}`});
		}
	}
};
</script>

<style scoped>
	.dossier {
		height: 289px;
		background-color: #f0f5f8;
		margin: auto 0 28px;
		vertical-align: middle;
		display: flex;
		align-items: center;
	}
	.img-dossier{
		width: 363px;
	}

	.img-div{
		padding-left: 73px;
	}
	h5{
		font-weight: 900;
		font-size: 15pt;
		text-transform: uppercase;
		color: #222277;
	}
	p{
		font-size: 15pt;
	}
	.custom-btn{
		padding: 10px 50px;
		font-size: 12pt;
	}
</style>