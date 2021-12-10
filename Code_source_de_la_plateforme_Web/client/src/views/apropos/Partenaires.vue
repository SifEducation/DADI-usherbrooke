<template>
	<div class=" main-component">
		<Title :mainTitle="titleApropos.mainTitle" :subtitle="titleApropos.subtitle"/>
		<div class="contenu">
			<h1>Partenaires</h1>
			<p>
				La plateforme Web DADI a été rendue possible grâce au soutien financier du Ministère de l’Éducation
				et de l’Enseignement supérieur dans le cadre du projet <a class="text-mauve" @click="toRessourceLink()">LaFabriqueREL</a>, du Fonds d’innovation pédagogique
				de l’Université de Sherbrooke ainsi que de la contribution de la Faculté d’éducation de l’Université de
				Sherbrooke.<br/><br/>
				Soulignons la contribution toute spéciale du vice-recteur adjoint aux études de
				l’Université de Sherbrooke, Monsieur Serge Allary, et de Madame Marianne Dubé, conseillère pédagogique
				au Service de Soutien à la formation dédiée au projet LaFabriqueREL. <br/><br/>
				Nous remercions chaleureusement toutes et tous nos partenaires d’avoir cru en notre projet
				et d’avoir contribué à l’amélioration de la qualité de la formation à distance par l’entremise
				de ce dispositif.
			</p>
			<div class="row">
				<div class="col">
					<img alt="LogoMES" src="@/assets/partenaires/quebec.png" />
				</div>
				<div class="col">
					<img alt="LogoFabriqueREL" src="@/assets/partenaires/fabrique.png" />
				</div>
				<div class="col">
					<img alt="LogoUdeS" src="@/assets/partenaires/udes-noir.png"/>
				</div>
				<div class="col">
					<img alt="LogoFEDU" src="@/assets/partenaires/logo-education.png" />
				</div>
			</div>
			<div>
				<p class="section-bas">Enfin, merci à notre équipe de personnes programmeuses finissantes du baccalauréat en informatique de la Faculté des sciences de 
					                   l'Université de Sherbrooke pour leur participation au développement du dispositif; sans elles, le DADI n'aurait jamais pu voir le jour.</p>
			</div>
		</div>
	</div>
</template>

<script>
import Title from "../../components/Title"
import {titleApropos} from "@/util/sharedData";
export default {
	name: "NosPartenaires",
	components: {
		Title
	},
	data() {
		return {
			titleApropos
		};
	},
	methods: {
		/**
		 * Navigation vers la page de la fabrique REL
		 */
		toRessourceLink(){
			window.open("https://fabriquerel.org");
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
		margin-bottom: 45px;
	}

	p {
		text-align: Left;
		font-size: 16pt;
		margin-bottom: 35px;
	}

	a {
		color: #a83fa1;
		font-weight: normal;
		cursor: pointer;
	}

	.row {
		padding-bottom: 59px;
		border-bottom: solid 2px #e1e7ea;
		margin-left: 2px;
		margin-right: 2px;
	}

	.col {
		padding-right: 40px;
		padding-left: 0;
	}

	.section-bas {
		padding-top: 53px;
	}
</style>