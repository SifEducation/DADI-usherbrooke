<template>
	<div class=" main-component">
		<Title :mainTitle="titleRessource.mainTitle" :subtitle="titleRessource.subtitle"/>
		<div class="contenu" v-if="o_ressource">
			<h1>{{ o_ressource.s_name }}</h1>
			<h2>{{o_ressource.s_subTitle}}</h2>
			<div class="row section">
				<div class="col-3">{{headerFilters.lien}}</div>
				<div v-if="o_ressource.s_path !== 'À déterminer'" class="col-8">
					<span class="text-mauve" @click="toRessourceLink(o_ressource.s_path)">{{o_ressource.s_path}}</span>
				</div>
				<div v-else class="col-8 mauvais-lien">
					{{o_ressource.s_path}}
				</div>
			</div>
			<div class="row section">
				<div class="col-3">{{headerFilters.format}}</div>
				<div class="col-9">
					<div class="div-picto" >
						<img alt="cont" :src="getIconPath(ressourceFilters.format, o_ressource.s_format)"/>
					</div>
					<span>{{o_ressource.s_format}}</span>
				</div>
			</div>
			<div class="row section">
				<div class="col-3">{{headerFilters.licence}}</div>
				<div class="col-9">
					<div class="div-picto" >
						<img alt="cont" :src="getIconPath(ressourceFilters.licence, o_ressource.s_license)"/>
					</div>
					<span>{{o_ressource.s_license}}</span>
				</div>
			</div>
			<div class="row section">
				<div class="col-3">{{headerFilters.cible}}</div>
				<div class="col-9">
					<div class="picto" v-for="audiences in o_ressource.a_audiences" :key="audiences">
						<div class="div-picto" >
							<img alt="cont" :src="getIconPath(ressourceFilters.cible, audiences)"/>
						</div>
						<span>{{audiences}}</span>
					</div>
				</div>
			</div>
			<div class="row section">
				<div class="col-3">{{headerFilters.temps}}</div>
				<div class="col-9">
					<div class="div-picto" >
						<img alt="cont" :src="getIconPath(ressourceFilters.temps, o_ressource.s_duration)"/>
					</div>
					<span>{{o_ressource.s_duration}}</span>
				</div>
			</div>
			<div class="row section">
				<div class="col-3">Description</div>
				<div class="col-8 description" >{{o_ressource.s_description}}</div>
			</div>
			<div class="row section">
				<div class="col-3">Mots-clés associés</div>
				<div class="col-8 mots-cles">{{o_ressource.a_tag.join(", ")}}</div>
			</div>
			<div class="row section">
				<div class="col-3">{{headerFilters.formation}}</div>
				<div class="col-9">
					<div class="picto" v-for="contexte in o_ressource.a_contexts" :key="contexte">
						<div class="div-picto" >
							<img alt="cont" :src="getIconPath(ressourceFilters.formation, contexte)"/>
						</div>
						<span>{{contexte}}</span>
					</div>
				</div>
			</div>
			<div class="row section-btn">
				<button class="custom-btn btn-retour" v-on:click="toBanque">Retourner à la banque de ressources</button>
				<button v-if="upload_isReady" class="custom-btn btn-retour" v-on:click="toPdf">Télécharger la fiche (PDF)</button>
			</div>
			<h3>Ressources qui pourraient vous intéresser...</h3>
			<div v-if="tableauSuggestionRessource" id="carouselControls" class="carousel slide" data-interval="false">
				<div class="carousel-inner">
					<div :class="'carousel-item ' + getActive(itemIndex)" v-for="itemIndex in Math.ceil(tableauSuggestionRessource.length / 3)" :key="itemIndex">
						<div class="carousel-tile carousel-tile-left" v-on:click="toRessource(tableauSuggestionRessource[(itemIndex - 1) * 3].i_id)">
							<span class="carousel-text">{{ tableauSuggestionRessource[(itemIndex - 1) * 3].s_name }}</span>
						</div>
						<div v-if="(itemIndex -1) * 3 + 1 < tableauSuggestionRessource.length" class="carousel-tile" v-on:click="toRessource(tableauSuggestionRessource[(itemIndex - 1) * 3 + 1].i_id)">
							<span class="carousel-text">{{ tableauSuggestionRessource[(itemIndex - 1) * 3 + 1].s_name }}</span>
						</div>
						<div v-if="(itemIndex -1) * 3 + 2  < tableauSuggestionRessource.length" class="carousel-tile" v-on:click="toRessource(tableauSuggestionRessource[(itemIndex - 1) * 3 + 2].i_id)">
							<span class="carousel-text">{{ tableauSuggestionRessource[(itemIndex - 1) * 3 + 2].s_name }}</span>
						</div>
					</div>
				</div>
				<a class="carousel-control-prev" href="#carouselControls" role="button" data-slide="prev">
					<span class="carousel-control-prev-icon" aria-hidden="true"></span>
					<span class="sr-only">Previous</span>
				</a>
				<a class="carousel-control-next" href="#carouselControls" role="button" data-slide="next">
					<span class="carousel-control-next-icon" aria-hidden="true"></span>
					<span class="sr-only">Next</span>
				</a>
			</div>
		</div>
	</div>
</template>

<script>
	import Title from "../../components/Title";
	import Request from "../../util/request";
	import {headerFilters, ressourceFilters, titleRessource} from "../../util/sharedData";
	export default {
		name: "DetailRessource",
		components: {
			Title
		},
		/**
		 * Fonction qui recupere les entetes des attributs d'une ressource et qui initialise le contenu d'une ressource
		 */
		data() {
			return {
				upload_isReady: false,
				o_ressource: null,
				headerFilters,
				titleRessource,
				ressourceFilters,
				tableauSuggestionRessource: null
			}
		},
		watch: {
			"$route.params.idRessource": function (s_id) {
				if (s_id)
					this.refreshRessource(s_id);
			}
		},
		methods: {
			/**
			 * Lien retourner à la banque de ressource
			 */
			toBanque: function() {
				this.$router.push({path: `/banqueressource`});
			},
			/**
			 * Valide pour l'activation de la classe active
			 */
			getActive(itemIndex) {
				return itemIndex === 1 ? 'active' : "";
			},
			/**
			 * Ouvre le lien de la ressource dans un nouvel onglet
			 * @param {String} path Chemin du lien a naviguer
			 */
			toRessourceLink(path) {
				window.open('https://docs.google.com/viewer?url=' + path + '?raw=true', '_blank');
			},
			/**
			 * Redirige vers la fiche de la ressource selectionnee
			 * @param {Number} i_idRessource Identifiant de la ressource selectionee
			 */
			toRessource(i_idRessource) {
				this.$router.push({path: `/banqueressource/${i_idRessource}`});
			},
			/**
			 * Fonction qui construit un fichier pdf avec la fiche detaillee de la ressource.
			 */
			toPdf() {
				alert("fonctionnalité à venir");
			},
			/**
			 * Fonction qui recupere le bon icone selon la categorie recue et qui retourne son chemin
			 * @param {Array} a_categories Liste des options possibles pour la categorie courante
			 * @param {String} s_categorieToFind Valeur de la categorie a verifier (texte de la categorie)
			 * @returns Module qui represente l'icone a afficher
			 */
			getIconPath(a_categories, s_categorieToFind) {
				const o_categorie = a_categories.find((o_currentCategorie) => {
					return o_currentCategorie.text.toLowerCase() === s_categorieToFind.toLowerCase();
				});

				if (o_categorie) {
					return require('@/assets/'+ o_categorie.pictoPath.black);
				}
				return require('@/assets/iconLegend/a_determiner.png');
			},
			/**
			 * Fonction qui recupere la ressource courante
			 * @param {String} s_id Identifiant de la ressource
			 */
			refreshRessource(s_id) {
				Request.getRessourceDetails(s_id)
				.then((o_data) => {
					this.o_ressource = o_data
					return Request.getRessources({themes: o_data.a_theme});
				})
				.then((a_ressources) => {
					this.tableauSuggestionRessource = a_ressources;
				})
				.catch(() => {
					alert("C'est embarrassant... Nous n'avons pas retrouvé la ressource demandée.\n Veuillez réessayer plus tard.");
					this.$router.push({path: `/banqueressource`});
				});
			}
		},
		/**
		 * Une fois la page generee, fonction qui va chercher les details de la ressource du serveur
		 */
		created() {
			this.refreshRessource(this.$route.params.idRessource);
		}
	};
</script>

<style scoped>
	h1{
		text-transform: uppercase;
		font-weight: 800;
		font-size: 25pt;
		color: #222277;

	}
	h2{
		font-size: 16pt;
		font-weight: 300;
		color: #222277;
		margin-bottom: 45px;
	}
	h3{
		font-weight: bold;
		font-size: 16pt;
		color: #222277;
		padding-top: 74px;
		padding-bottom: 22px;
	}
	.text-mauve{
		font-size: 16pt;
		font-weight: bold;
		color: #a83fa1;
		cursor: pointer;
	}
	.picto{
		display: flex;
		align-items: center;
		padding-bottom: 5px;
	}
	.div-picto{
		display: inline-block;
		width: 100px;
	}

	.row{
		margin-left: 0;
		margin-right: 0;
	}
	.section{
		border-top: solid 2px #e1e7ea;
		padding-top: 17px;
		padding-bottom: 17px;
	}
	.section-btn {
		border-top: solid 2px #e1e7ea;
	}
	.col-3{
		text-transform: uppercase;
		font-weight: 800;
		font-size: 15pt;
		color: #222277;
		padding-left: 0;
	}
	.custom-btn{
		font-size: 12pt;
		padding: 10px;
	}
	.btn-retour{
		margin-top: 55px;
		margin-bottom: 20px;
		margin-right: 30px;
	}
	span, .mots-cles{
		font-size: 16pt;
		font-weight: 300;
	}
	.description, .mauvais-lien{
		font-size: 15pt;
		font-weight: 300;
		line-height: 1em;
	}
	.carousel-tile{
		display: inline-block;
		position: relative;
		margin-right: 55px;
		border: none;
		width: 310px;
		height: 105px;
		background-color: #f0f5f8;
		text-align: center;
		overflow: hidden;
		cursor: pointer;
	}
	.carousel-tile:hover{
		background-color: #74fecc;
	}
	.carousel-tile-left{
		margin-left: 83px;
	}
	.carousel-text{
		text-transform: uppercase;
		font-weight: bold;
		font-size: 15pt;
		color: #222277;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		width: 100%;
		max-height: 97%;
		padding: 10px;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	.carousel-control-prev, .carousel-control-next {
		opacity: 1;
		width: 80px;
	}

	.carousel-control-prev-icon{
		background-image: url("../../assets/ressources/fleche_gauche.png");
		position: absolute;
		left: 12px;
		transform: translateX(-50%);
	}
	.carousel-control-next-icon{
		background-image: url("../../assets/ressources/fleche_droite.png");
		position: absolute;
		right: 12px;
		transform: translateX(50%);
	}
</style>