<template>
	<div class="titre">
		<h1>{{mainTitle}}</h1>
		<h2>{{subtitle}}</h2>
	</div>
</template>

<script>
export default {
	name: "Title",
	props: {
		mainTitle: String,
		subtitle: String
	}
};
</script>

<style scoped>
	h1, h2 {
		position: relative;
		top: 35px;
	}
	h1 {
		text-transform: uppercase;
		font-weight: 900;
		font-size: 40pt;
		color: #2e2c73;
	}
	h2 {
		font-weight: bold;
		font-size: 20pt;
		color: #a83fa1;
	}
	.titre{
		background-image: url("../assets/backgroundTitle.png");
		background-repeat: no-repeat;
		height: 172px;
	}

</style>