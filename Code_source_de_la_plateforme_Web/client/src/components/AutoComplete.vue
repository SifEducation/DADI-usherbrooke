<template>
	<!-- Champ de recherche par mots-cles. On attache un listener sur les trois touches ayant un traitement specifique -->
	<input class="search-input" ref="inputsearch" type="text" :placeholder="s_placeholder" v-on:input="filterTags" v-on:keydown.down.up.enter="setCurrentSelection" v-on:blur="checkTagClick"/>
	<div v-if="allTags" class="autocomplete-items">
		<!-- Si on a des etiquettes, construire dynamiquement la liste affichee selon l'entree du champ plus haut
			b_tagClicked est change au mousedown pour indiquer que l'utilisateur a clique sur une etiquette. Necessaire
			pour gerer correctement la perte du focus par l'input -->
		<div class="autocomplete-tag" v-for="tag in displayTags" :key="tag" v-on:click="addTagToFilters(tag)" v-on:mousedown="b_tagClicked = true">
			<b>{{tag.substr(0, $refs.inputsearch.value.length)}}</b>{{tag.substr($refs.inputsearch.value.length)}}
		</div>
	</div>

</template>

<script>
	import Request from "../util/request";

	export default {
		name: "AutoComplete",
		props: {
			s_placeholder: String,
			s_parentTagList: String
		},
		emits: ["tagSelect"],
		data() {
			return {
				allTags: null,
				displayTags: [],
				tagFocus: -1,
				b_tagClicked: false
			}
		},
		/**
		 * Fonction qui, a la creation, recupere la liste des etiquettes possibles du serveur
		 */
		created() {
			Request.getActiveKeywords()
			.then((a_keywords) => {
				this.allTags = a_keywords;
			})
			.catch(() => {
				this.allTags = [];
			});
		},
		methods: {
			/**
			 * Fonction appelee quand du texte est entre dans le champ de recherche qui prend la valeur courante du
			 * texte entre pour filtrer les suggestions qui commencent par cette valeur.
			 */
			filterTags() {
				this.tagFocus = -1;
				const currentVal = this.$refs.inputsearch.value;
				if (currentVal) {
					this.displayTags = this.allTags.filter((tag) => {
						return tag.toUpperCase().startsWith(currentVal.toUpperCase());
					})
				} else {
					this.displayTags = [];
				}
			},
			/**
			 * Fonction a executer quand un mot-cle de la liste est selectionne (via clic ou clavier)
			 * @param {String} s_tag Valeur de l'etiquette associee au tag selectionnee
			 */
			addTagToFilters(s_tag) {
				this.hideOptions();
				this.$emit("tagSelect", s_tag);
			},
			/**
			 * Fonction qui reinitialise la valeur du mot-cle et qui enleve tous les mots-cles affiches
			 */
			hideOptions() {
				this.$refs.inputsearch.value = "";
				this.displayTags = [];
			},
			/**
			 * Fonction appelee quand le champ perd le focus et qui verifie si la perte du focus est due a un clic sur
			 * un des mots-cles affiches. Necessaire pour permettre de masquer la liste quand le focus est perdu, mais
			 * permettre d'enregistrer le mot-cle selectionne via un clic de souris. Le blur event bloque l'evenement du
			 * clic autrement.
			 * @param {FocusEvent} e_event Evenement ayant cause l'appel de cette fonction (perte du focus par le champ)
			 */
			checkTagClick(e_event) {
				if (this.b_tagClicked) {
					e_event.preventDefault();
					this.b_tagClicked = false; // reinitialiser pour le prochain appel
				} else {
					this.hideOptions();
				}
			},
			/**
			 * Fonction appelee quand une touche du clavier est appuyee pour definir la selection active quand la touche
			 * haut ou bas est appuyee. Si la toucher Enter est appuyee, soumet la selection comme pour un clic.
			 * Dans tous les autres cas, on ne fait rien
			 * @param {KeyboardEvent} e_event Evenement de clavier recu donnant la touche appuyee (seulement les trois
			 * 								  cas speciaux vont declencher cette fonction)
			 */
			setCurrentSelection(e_event) {
				const a_listedTags = document.getElementsByClassName("autocomplete-tag");
				switch (e_event.key) {
					case "ArrowDown":
						a_listedTags.forEach((d_tag) => {
							d_tag.classList.remove("autocomplete-active");
						});

						this.tagFocus++;
						if (this.tagFocus >= a_listedTags.length)
							this.tagFocus = 0;

						a_listedTags[this.tagFocus].classList.add("autocomplete-active");
						break;
					case "ArrowUp":
						a_listedTags.forEach((d_tag) => {
							d_tag.classList.remove("autocomplete-active");
						});

						this.tagFocus--;
						if (this.tagFocus < 0)
							this.tagFocus = (a_listedTags.length - 1);

						a_listedTags[this.tagFocus].classList.add("autocomplete-active");
						break;
					case "Enter":
						if (this.tagFocus > -1)
							a_listedTags[this.tagFocus].click();
						break;
				}
			}
		}
	};
</script>

<style scoped>

	.search-input {
		font-weight: bold;
		font-size: 12pt;
		width: 440px;
		height: 38px;
		margin-right: 5px;
		padding-left: 40px;
		border: none;
		border-radius: initial;
		background: #f0f5f8 url("../assets/banqueRessource/loupe.png") no-repeat 10px;
	}
	.search-input::placeholder, .search-input:-ms-input-placeholder, .search-input::-ms-input-placeholder{
		color: #919293;
		opacity: 1;
	}

	.autocomplete-items {
		position: absolute;
		top: 465px;
		width: 300px;
		font-weight: 300;
		font-size: 12pt;
		color: white;
		background-color: #222277;
		cursor: pointer;
		z-index: 99;
	}

	.autocomplete-tag {
		padding: 12px;
		border-bottom: 1px solid white;
	}

	.autocomplete-tag b {
		font-weight: 800;
	}

	.autocomplete-tag:hover, .autocomplete-active {
		background-color: #323293;
	}

</style>