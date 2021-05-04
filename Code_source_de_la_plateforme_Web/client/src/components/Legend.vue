<template>
	<aside id="legend">
		<button id="legendBtn" v-on:click="expandLegend">Légende des icônes</button>
		<div class="content">
			<section>
				<div class="legend-title">{{headerFilters.formation}}</div>
				<!-- Affichage des elements possibles pour le contexte de formation -->
				<div class="elem-container" v-for="elem in ressourceFilters.formation" v-bind:key="elem.text">
					<img alt="picto" v-bind:src="require('@/assets/'+ elem.pictoPath.white)"/>
					<span class="legend-text">{{elem.text}}</span>
				</div>
			</section>
			<section>
				<div class="legend-title">{{headerFilters.theme}}</div>
				<!-- Affichage des elements possibles pour la thematique -->
				<div class="elem-container" v-for="elem in ressourceFilters.thematique" v-bind:key="elem.text">
					<img alt="picto" v-bind:src="require('@/assets/'+ elem.pictoPath.white)"/>
					<span class="legend-text">{{elem.text}}</span>
				</div>
			</section>
			<section>
				<div class="legend-title">{{headerFilters.format}}</div>
				<!-- Affichage des elements possibles pour le format des ressources -->
				<div class="elem-container" v-for="elem in ressourceFilters.format" v-bind:key="elem.text">
					<img alt="picto" v-bind:src="require('@/assets/'+ elem.pictoPath.white)"/>
					<span class="legend-text">{{elem.text}}</span>
				</div>
			</section>
			<section>
				<div class="legend-title">{{headerFilters.cible}}</div>
				<!-- Affichage des elements possibles pour le public cible -->
				<div class="elem-container" v-for="elem in ressourceFilters.cible" v-bind:key="elem.text">
					<img alt="picto" v-bind:src="require('@/assets/'+ elem.pictoPath.white)"/>
					<span class="legend-text">{{elem.text}}</span>
				</div>
			</section>
			<section>
				<div class="legend-title">{{headerFilters.temps}}</div>
				<!-- Affichage des elements possibles pour le temps a consacrer -->
				<div class="elem-container" v-for="elem in ressourceFilters.temps" v-bind:key="elem.text">
					<img alt="picto" v-bind:src="require('@/assets/'+ elem.pictoPath.white)"/>
					<span class="legend-text">{{elem.text}}</span>
				</div>
			</section>
		</div>
	</aside>
</template>

<script>
import { headerFilters, ressourceFilters} from "../util/sharedData";
export default {
	name: "Legend",
	data() {
		return {
			headerFilters,
			ressourceFilters
		}
	},
	methods: {
		/**
		 * Affiche et masque la legende dynamiquement avec animation via css
		 */
		expandLegend() {
			const o_legend = document.getElementById("legend");
			o_legend.classList.toggle("legend-expand");
			if (!o_legend.classList.contains("legend-expand")) {
				o_legend.classList.add("legend-collapse");
			} else {
				o_legend.classList.remove("legend-collapse");
			}
		}
	}
};
</script>

<style scoped>
	#legend {
		position: absolute;
		background-color: #222277;
		width: calc(100vw * 505 / 1920);
		min-width: 430px;
		height: 1335px;
		left: 100%;
		top: 520px;
		z-index: 999;
		padding: 0;
	}
	#legendBtn {
		transform: translate(-141px, 55px);
		width: 142px;
		height: 105px;
		text-transform: uppercase;
		font-weight: bold;
		font-size: 15pt;
		color: white;
		text-align: center;
		background-color: #222277;
		display: flex;
		padding: 0 25px;
		align-items: center;
		border: none;
	}

	.content {
		position: absolute;
		top: 0;
		padding: 50px calc(100vw * 70 / 1920);
		font-size: 14pt;
		color: white;
	}

	.content img {
		margin-right: 12px;
		color: black;
	}

	.elem-container {
		display: flex;
		align-items: center;
	}

	section {
		margin-bottom: 30px;
	}

	.legend-text {
		font-weight: 300;
		display: inline-block;
		width: 305px;
	}

	.legend-title {
		font-weight: 800;
		text-transform: uppercase;
		margin-bottom: 25px;
	}

	.legend-expand {
		transform: translateX(-100%);
		animation: unshrinkleft 1s;
	}
	.legend-collapse {
		animation: shrinkleft 1s;
	}

	@keyframes shrinkleft {
		0% {transform: translateX(-100%);}
		100% {transform: translateX(0);}
	}

	@keyframes unshrinkleft {
		0% {transform: translateX(0);}
		100% {transform: translateX(-100%);}
	}

</style>