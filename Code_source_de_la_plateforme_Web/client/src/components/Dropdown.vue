<template>
	<div class="dropdown">
		<button class="btn-dropdown" data-toggle="dropdown" data-flip="false">
			{{filterText}}
			<img src="@/assets/banqueRessource/triangle.png"/>
		</button>
		<div class="dropdown-menu">
			<div v-for="elem of filterItems" :key="elem.text">
				<label class="filter" v-on:click="stopPropagation">
					<input type="checkbox" v-bind:value="elem.text" v-on:change="changeFilter">
					<span class="label-text">{{elem.text}}</span>
				</label>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Dropdown",
		props: {
			filterText: String,
			filterId: String,
			filterItems: Array
		},
		emits: ["filterChange"],
		methods: {
			/**
			 * Fonction a executer quand un filtre est selectionne/deselectionne pour mettre a jour les filtres
			 * @param {Event} e_event Evenement genere lors du changement de valeur du checkbox
			 */
			changeFilter(e_event) {
				const o_filterInfo = {
					s_name: this.filterId,
					b_selected: e_event.target.checked,
					s_value: e_event.target.value
				}
				this.$emit("filterChange", o_filterInfo);
			},
			/**
			 * Fonction prevenant la propagation de l'evenement recu pour notamment empecher la fermeture du dropdown
			 * @param {Event} e_event Evenement dont on veut stopper la propagation
			 */
			stopPropagation(e_event) {
				e_event.stopPropagation();
			}
		}
	};
</script>

<style scoped>
	.btn-dropdown {
		font-weight: bold;
		font-size: 12pt;
		color: #818285;
		height: 38px;
		border: 2px solid #c2cdd2;
		background-color: white;
		margin: 0 5px;
		padding-right: 9px;
		padding-left: 9px;
	}

	.btn-dropdown img {
		padding-left: 7px;
	}

	.dropdown-menu {
		font-weight: 300;
		font-size: 12pt;
		color: white;
		background-color: #222277;
		border-radius: initial;
		border: none;
		padding: 0;
		z-index: 99;
	}

	.filter {
		padding: 12px;
		width: 190px;
		margin-bottom: 0;
		cursor: pointer;
		border-bottom: 1px solid white;
	}

	.filter:hover {
		background-color: #323293;
	}

	.label-text {
		display: inline-block;
		width: 90%;
		padding-left: 5px;
	}

	.filter input {
		vertical-align: top;
		margin-top: 5px;
	}
</style>