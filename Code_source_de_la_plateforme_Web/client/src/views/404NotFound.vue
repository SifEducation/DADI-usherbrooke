<template>
	<div class="main-component">
		<Title :main-title="titleErreur.mainTitle" :subtitle="titleErreur.subtitle"/>
		<div class="contenu">
			<button class="custom-btn" v-on:click="toHome">Retourner à l'accueil</button>
		</div>
	</div>
</template>

<script>
	import Title from "../components/Title";
	import { titleErreur } from "../util/sharedData";
	export default {
		name: "404NotFound",
		components: {
			Title
		},
		data() {
			return {
				titleErreur
			};
		},
		methods: {
			/**
			 * Retourner à l'accueil
			 */
			toHome() {
				this.$router.push({path: "/"});
			}
		}
	};
</script>

<style scoped>
	.custom-btn {
		height: 38px;
		padding-left: 15px;
		padding-right: 15px;
	}
</style>