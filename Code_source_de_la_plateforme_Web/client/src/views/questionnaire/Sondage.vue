<template>
	<div class=" main-component">
		<Title :mainTitle="titleSondage.mainTitle" :subtitle="titleSondage.subtitle"/>
		<div class="contenu">
			<iframe width="100%" height="1600px" src= "https://forms.office.com/Pages/ResponsePage.aspx?id=RIdaOjVZ-UWUI7MsOl3ggkjY8-RzuENFg0xC2ggIr3lUOVZHMVdLUVhPV0MzNkhOVDY0TUswQVFEMSQlQCN0PWcu&embed=true">Chargement</iframe>
		</div>
	</div>
</template>

<script>
	import Title from "../../components/Title";
	import {titleSondage} from "../../util/sharedData";
	export default {
		name: "Sondage",
		components: {
			Title
		},
		data() {
			return {
				titleSondage
			}
		}
	};
</script>

<style scoped>
	iframe {
		border: none;
	}
</style>