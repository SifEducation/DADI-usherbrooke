<template>
	<div class="lesNibeaux">
		<div class="contenuNiv">
			<div class="header">
				<p>Les niveaux</p>
			</div>
			<div class="etape">
				<p>{{textesEtape[niveau-1]}}</p>
			</div>
			<div>
				<div :class="'niveau niv' + niveau">
					<img class="img-niveau" alt="Image niveau" :src="require('@/assets/questionnaire/icon_niv' + niveau + '_50pourcent.png')" />
					<span class="niveau-comp">Niveau {{niveau}}</span>
					<div class="listComponents" v-for="dimension of Object.values(imagesNiveaux[niveau-1])" :key="dimension">
						<img class="img-composante" alt="Image composante" :src="require('@/assets/questionnaire/' + dimension.path)"/>
						<span class="composantes">{{ dimension.nom }}</span>
					</div>
				</div>
			</div>
			<div class="bas">
				<p> Cette section compte <strong>{{nbrQuestion}} questionnaires</strong></p>
			</div>
		</div>
		<div class="conditions">
			<span class="consulter">Consulter les </span>
			<router-link class="conditionClic" to="/conditions">conditions d'utilisation.</router-link>
		</div>
	</div>
</template>

<script>
	import { niveau1, niveau2, niveau3, textesEtape } from "../util/sharedData";
	export default {
		name: "LesNiveaux",
		props: {
			niveau: Number,
			nbrQuestion: Number
		},
		data() {
			return {
				imagesNiveaux : [niveau1, niveau2, niveau3],
				textesEtape
			}
		}
	};
</script>

<style scoped>
	.lesNibeaux{
		display: block;
		width: 275px;
	}
	.contenuNiv {
		background-color: #f0f5f8;
	}

	.header{
		text-transform: uppercase;
		font-weight: 800;
		font-size: 25pt;
		color: #2e2c73;
		padding-top: 25px;
		padding-left: 23px;
	}

	.etape{
		font-weight: bold;
		font-size: 22pt;
		color: black;
		padding-left: 23px;
	}
	.niveau{
		text-transform: uppercase;
		padding-left: 23px;
		padding-bottom: 43px;
	}

	.listComponents{
		display: inline-block;
		font-weight: bold;
		font-size: 11pt;
		color: #222277;
		position: relative;
		top: 5px;
		left: 50px;
		margin-bottom: 12px;
	}
	.composantes{
		width: 171px;
		display: inline-block;
		padding-left:30px;
	}
	.niv1{
		color: #18c687;
	}
	.niv2{
		color: #a83fa1;
	}
	.niv3{
		color: #3737dd;
	}
	.img-composante{
		position: absolute;
		top:7%;
	}
	.bas{
		font-size: 15pt;
		color: black;
		background-color: #e1e7ea;
		height: 90px;
		padding: 15px 40px 18px 23px;
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
	.niveau-comp{
		font-weight: 900;
		font-size: 14pt;
		padding-left: 17px;
	}

</style>