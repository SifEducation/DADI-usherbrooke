<template>
	<div class="main-component">
		<Title :mainTitle="titleApropos.mainTitle" :subtitle="titleApropos.subtitle"/>
		<div class="contenu">
			<h1>Présentation du projet</h1>
			<p>Le DADI est un dispositif qui a pour but faire évoluer les pratiques vers des approches pédagogiques actives intégrant les outils numériques.
				Nous souhaitons partager avec vous notre vision de l’enseignement à distance grâce à cette plateforme web, que ce soit à travers nos ressources,
				notre guide pédagogique ou notre outil d’autoformation dynamique basée sur :</p>
			<div class="row">
				<div class="col-5 section-presentation-projet">
					<ul>
						<li>L’authenticité</li>
						<li>La collaboration</li>
						<li>La pédagogie centrée sur l’apprenant.e</li>
						<li>L’évaluation en soutien à l’apprentissage</li>
					</ul>
				</div>
				<div class="col-6 section-Marie-Eve">
					<ul>
						<li>La présence à distance</li>
						<li>L’accompagnement pédagogique de proximité</li>
						<li>L’alignement pédagogique et curriculaire</li>
						<li>La CUI</li>
					</ul>
				</div>
			</div>
			<div class="card" id="accordionCadre">
				<hr>
				<div class="card-header" id="headingOne">
					<button class="btn-collapse collapsed btn btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
						Recension d’écrits
					</button>
				</div>
				<div id="collapseOne" class="collapse pre-formatted" aria-labelledby="headingOne" data-parent="#accordionCadre">
					<div class="card-body">
						<h2>Nous avons effectué une recension d’écrits qui portent sur les enjeux, défis et besoins des personnes formatrices et des personnes étudiantes
							qui vivent l’expérience de la formation à distance et la formation hybride. Quelque 75 références ont été lues, annotées et synthétisées, ce qui nous a permis
							de dresser un portrait de la situation, de comparer des forces et faiblesses de différents modèles théoriques en fonction de notre objectif ultime qui est de
							concevoir un outil d’autoformation dynamique.</h2>
						<h3>L’analyse de la littérature nous a donc permis d’atteindre plusieurs objectifs :</h3>
						<ol class="ol-number">
							<li>Identifier plusieurs modèles théoriques d’analyse de la FAD, et en faire émerger un ou plusieurs sur lequel ou lesquels baser le développement de l’outil.</li>
							<li>Faire émerger les principales dimensions susceptibles d’avoir un impact important sur les pratiques en FAD.</li>
							<li>Faire émerger les principaux enjeux et difficultés liés à la FAD et l’enseignement à distance.</li>
						</ol>
						<h2>À l’issue de la recension des écrits, et au regard de l’expérience professionnelle des conseillers pédagogiques
							en collaboration sur l’analyse des données, nous avons identifié des besoins de formation potentiels pour les personnes
							formatrices qui enseignent à distance ou en mode hybride à l’aide des technologies en fonction de 8 thématiques.
							Nous avons donc cherché à travers le sondage à répondre aux besoins identifiés selon ces thématiques.</h2>
						<ol class="ol-number">
							<li class="li-text-long">Mode d’enseignement : Les personnes formatrices disent ne pas être en mesure de faire l’évaluation des
								couts et des bénéfices associés aux deux modalités d’enseignement et d’évaluation selon leur contexte d’enseignement.
								Ils ne connaissent pas tous les types d’activité ni l’éventail des outils technologiques synchrones et asynchrones.
								Ils souhaiteraient donc être en mesure d’identifier quand il est pertinent de proposer des activités pédagogiques"
								synchrones plutôt qu’asynchrones ou inversement.</li>
							<li class="li-text-long">Jauge des activités individuelles et collaboratives : Les personnes formatrices ne semblent pas remettre en question
								la pertinence d’intégrer des activités coopératives ou collaboratives à leurs cours en ligne, mais il leur est parfois
								difficile de proposer ces types d’activités parce qu’ils ne connaissent pas l’éventail des outils technologiques adaptés
								à ces situations, ils ne sont pas forcément à l’aise de piloter ces activités et ne semblent pas en mesure d’identifier
								les moments où il est plus pertinent de proposer des activités individuelles ou collaboratives dans le cadre de cours en ligne.</li>
							<li class="li-text-long">Alignement technopédagogique : Les personnes formatrices ne semblent pas systématiquement valider l’alignement technopédagogique
								de leur cours en ligne. Il semblerait que les composantes de l’alignement technopédagogique ne soient pas connues par l’ensemble des
								personnes formatrices. Il leur serait pertinent d’être en mesure d’identifier l’utilité et les composantes, mais aussi de savoir comment
								elles s’articulent. Le moment et la manière de valider l’alignement technopédagogique de son cours représentent également des besoins identifiés.</li>
							<li class="li-text-long">Présence à distance : L’établissement d’un climat sociorelationnel d’ouverture demeure un défi pour plusieurs personnes formatrices qui
								se sentent isolées derrière leur écran. Les personnes formatrices ont le désir de réduire à la fois le sentiment d’isolement qu’ils éprouvent
								et celui de leurs étudiantes et étudiants, pour leur offrir des activités d’apprentissage engageantes à la fois sur le plan relationnel et cognitif.
								Ils souhaiteraient ainsi être en mesure de savoir quelles stratégies d’enseignement utiliser pour créer un sentiment de présence à distance, établir
								une relation de confiance avec les personnes étudiantes et instaurer une cohésion de groupe donnant libre cours à une communication ouverte et transparente.</li>
							<li class="li-text-long">Engagement et motivation : L’engagement et la motivation en FAD sont relevés comme des défis dans certains cas, autant pour les personnes formatrices
								que pour les personnes étudiantes. Les recherches offrent plusieurs pistes pour favoriser la motivation, mais celles-ci ne sont pas nécessairement bien
								connues, considérées ou appliquées par les personnes formatrices. Ceux-ci ont donc besoin de savoir comment concrètement favoriser la motivation des
								personnes étudiantes dans un cours en ligne, et comment sonder celle-ci. Du point de vue du formateur, le mauvais calcul des couts et des bénéfices associés
								au développement d’activités d’apprentissage peut miner la motivation des personnes formatrices qui y investissent considérablement de temps. L’appropriation
								de stratégies d’économie de temps et d’énergie pour enseigner en FAD ou en contexte de formation hybride demeure un besoin partagé par plusieurs personnes formatrices.</li>
							<li class="li-text-long">Manipulation des outils technologiques : La capacité des personnes formatrices à maintenir le rythme d’appropriation et d’exploration des nouveaux
								outils innovants, pertinents, fiables et à leur portée ne correspond pas au temps dont ils disposent pour se prêter à la tâche. Les personnes formatrices
								réclament des outils fiables, conviviaux, mais également innovants. Ils souhaiteraient être en mesure de savoir comment s’approprier rapidement un nouvel
								outil TIC, et comment choisir judicieusement les outils technologiques à investir sans y perdre du temps.</li>
							<li class="li-text-long">Évaluation des apprentissages (et des compétences) : La formation à distance soulève en effet, pour les évaluations, des enjeux éthiques spécifiques
								(ex. évaluation dans les mêmes conditions pour tous, authentification de l’identité de l’étudiant, risque de plagiat, sécurité et fiabilité des outils TIC, etc.).
								Les personnes formatrices ne semblent pas connaitre l’étendue des possibilités et les points de vigilance liés à l’évaluation des apprentissages à l’aide
								des technologies. Ils souhaiteraient donc savoir quelles sont les méthodes permettant d’évaluer la progression des apprentissages à distance, et plus encore
								comment évaluer les compétences à l’aide des technologies.</li>
							<li class="li-text-long">Stratégies pédagogiques actives : Les personnes formatrices ne semblent pas avoir une grande facilité à mettre en action les personnes étudiantes à distance
								à l’aide des technologies. Certains se campent dans des postures pédagogiques frontales misant sur le dépôt et la consultation de documents en espérant que les
								personnes étudiantes pourront circonscrire l’information importante à retenir et faire les transferts d’apprentissage nécessaires à l’atteinte des cibles
								d’apprentissage de manière autonome. D’autres perçoivent la valeur de la pédagogie active et souhaiteraient la mettre en œuvre, mais ne savent pas comment
								l’appliquer à leur contexte d’enseignement en ligne. Le pilotage de ce type de situations d’apprentissage à distance demeure parfois flou pour certaines personnes
								formatrices qui considèrent ne pas toujours savoir comment bien jouer leur rôle de guide-accompagnateur. Ils souhaiteraient être en mesure de connaitre la valeur
								ajoutée des activités les unes par rapport aux autres, mais aussi de savoir comment agir à distance dans leur rôle de facilitateur des apprentissages de leurs
								étudiantes et étudiants. Ils souhaiteraient donc savoir comment planifier, concevoir et piloter des scénarios pédagogiques qui les mettent en action en formation
								à distance, qui requièrent l’interaction et la collaboration entre les membres d’une même communauté d’apprentissage.</li>
						</ol>
					</div>
				</div>
				<hr>
				<div class="card">
					<div class="card-header" id="headingTwo">
						<button class="btn-collapse collapsed btn btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
							Consultation du milieu
						</button>
					</div>
					<div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionCadre">
						<div class="card-body">
							<h2>À la suite de notre recension d’écrits, nous avons étudié le degré d’adéquation entre les intentions de notre projet et les approches proposées
								par différents modèles théoriques permettant d’aborder la FAD. Nous avons fait le choix d’inscrire notre approche de la FAD dans le modèle de
								Bachy (2014), développé à partir du modèle TPaCK de Koehler et Mishra (2009). Nous avons fait ce choix pour plusieurs raisons :</h2>
							<ul>
								<li>Il prend en compte l’ensemble des dimensions du savoir technopédagogique disciplinaire que nous souhaitons développer chez les personnes utilisatrices du DADI.</li>
								<li>Il nous permet de considérer les 8 besoins émergents de notre revue de la littérature exposés plus haut dans le présent document.</li>
								<li>Il tient compte de la posture épistémologique de la personne formatrice et il est particulièrement adapté au contexte postsecondaire, où cette dimension prend beaucoup d’importance dans la pratique enseignante.</li>
								<li>C’est un modèle validé scientifiquement, bien que moins connu que le modèle original qui ne prend pas en compte la dimension épistémologique du savoir technopédagogique disciplinaire.</li>
								<li>Ce modèle se caractérise par la mise en relation de 4 dimensions qui constituent le savoir technopédagogique disciplinaire&nbsp;:&nbsp;les connaissances pédagogiques, les connaissances disciplinaires,
									la posture épistémologique et les connaissances techniques. Un questionnaire validé permet d’évaluer ces 4 dimensions, ainsi que les 6 relations entre chaque paire de dimensions.</li>
							</ul>
							<div>
								<button class="custom-btn btn-consulter-article" v-on:click="toSondage">Consulter notre sondage</button>
								<button class="custom-btn btn-consulter-article" v-on:click="toArticle">Consulter notre article</button>
							</div>
						</div>
					</div>
				</div>
				<hr>
				<div class="card">
					<div class="card-header" id="headingThree">
						<button class="btn-collapse collapsed btn btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
							Cadre théorique de départ
						</button>
					</div>
					<div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionCadre">
						<div class="card-body">
							<h2>À la suite de notre recension d’écrits, nous avons étudié le degré d’adéquation entre les intentions de notre
								projet et les approches proposées par différents modèles théoriques permettant d’aborder la FAD. Nous avons fait
								le choix d’inscrire notre approche de la FAD dans le modèle de Bachy (2014), développé à partir du modèle TPaCK
								de Koehler et Mishra (2009). Nous avons fait ce choix pour plusieurs raisons :</h2>
							<ul>
								<li>Il prend en compte l’ensemble des dimensions du savoir technopédagogique disciplinaire que nous souhaitons
									développer chez les personnes utilisatrices du DADI.</li>
								<li>Il nous permet de considérer les 8 besoins émergents de notre revue de la littérature exposés plus haut dans
									le présent document.</li>
								<li>Il tient compte de la posture épistémologique de la personne formatrice et il est particulièrement adapté au
									contexte postsecondaire, où cette dimension prend beaucoup d’importance dans la pratique enseignante.</li>
								<li>C’est un modèle validé scientifiquement, bien que moins connu que le modèle original qui ne prend pas en compte
									la dimension épistémologique du savoir technopédagogique disciplinaire.</li>
								<li>Ce modèle se caractérise par la mise en relation de 4 dimensions qui constituent le savoir technopédagogique
									disciplinaire&nbsp;:&nbsp;les connaissances pédagogiques, les connaissances disciplinaires, la posture
									épistémologique et les connaissances techniques. Un questionnaire validé permet d’évaluer ces 4 dimensions, ainsi
									que les 6 relations entre chaque paire de dimensions.</li>
							</ul>

							<h2>Ce questionnaire constituera la base sur laquelle nous appuierons la création du questionnaire de l’outil
								d’autopositionnement du DADI. Toutefois, nous souhaitons l’adapter de deux manières :</h2>
							<p><strong>1)</strong> En ajoutant un niveau de questionnement permettant de mettre en lumière les 4 sousrelations
								derrière chaque	trinôme de dimensions (indiqué sur le schéma ci-dessous par une étoile jaune)<br/><br/>
								<strong>2)</strong> préciser certaines des questions afin de nous assurer de la plus grande compatibilité
								possible entre nos questions et les milieux auxquels nous nous adressons.</p>
							<img class="img-modele" alt="Modele" src="@/assets/cadre/modele.png"/>
							<p>Bref, le modèle de Bachy (2014) nous permettra de proposer un autopositionnement précis aux utilisateurs de la
								plateforme, qui mettra en lumière à l’aide d’indicateurs opérationnels de ces différentes dimensions, ce sur quoi
								ils peuvent travailler pour devenir plus à l’aise et compétents dans leur rôle de formateur à distance ou en
								formation hybride. À partir du résultat de l’autopositionnement, des pistes de développement professionnel adaptées
								seront proposées aux utilisateurs qui seront invités à les mettre en oeuvre dans leurs cours. Nous souhaitons leur
								donner accès à des ressources qui les soutiendront dans le développement de leur savoir technopédagogique disciplinaire,
								plus largement de leurs compétences technopédagogiques.</p>
							<button class="custom-btn btn-article" v-on:click="toModeleBachy">Consulter le modèle de Bachy (2014)</button>
						</div>
					</div>
				</div>
				<hr>
			</div>
		</div>
	</div>
</template>

<script>
import Title from "../../components/Title";
import { titleApropos } from "../../util/sharedData";

export default {
	name: "Cadre",
	components: {
		Title
	},
	/**
	 * Extrait les données provenant du sharedData pour l'affichage dans la page
	 */
	data() {
		return {
			titleApropos
		};
	},
	/**
	 * Lien vers les liens des articles selon le cadre.
	 */
	methods: {
		/**
		 * Ouverture d'un nouvel onglet vers un article refere (non paru pour l'instant)
		 */
		toArticle() {
			alert("Article à paraitre");
		},
		/**
		 * Ouverture d'un lien MS forms a remplir pour participer au developpement du DADI
		 */
		toSondage(){
			window.open("https://forms.office.com/Pages/ResponsePage.aspx?id=RIdaOjVZ-UWUI7MsOl3ggr52GNIO8jdIrYgFL3MWqDhURTNVMkJWV1RQQldJQUJHV1JTWTc1WVI0Qi4u");
		},
		/**
		 * Ouverture d'un lien vers une explication du modele de Bachy
		 */
		toModeleBachy() {
			window.open("https://journals.openedition.org/ripes/821");
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

	h2 {
		font-weight: bold;
		color: #222277;
		padding-bottom: 33px;
		padding-top: 33px;
	}
	h3{
		font-weight: bold;
		padding-bottom: 10px;
	}
	p, h2, h3, li {
		font-size: 16pt;
	}

	.section-presentation-projet {
		padding-bottom: 30px;
	}

	ol, li {
		padding-left: 0;
		margin-left: 20px;
	}

	.ol-number {
		margin-left: 0;
	}

	.li-text-long{
		padding-bottom: 20px;
	}

	p {
		margin-bottom: 50px;
	}

	.img-modele {
		margin-bottom: 40px;
	}

	hr {
		border-top: solid 3px #e1e7ea;
		margin-top: 0;
		margin-bottom: 0;
	}

	.card {
		box-shadow: none;
		border: none;
	}
	.card-header{
		background-color: white;
		border: none;
	}
	.card-body{
		padding-top: 0;
	}

	.card-header, .card-body, .btn-collapse {
		padding-left: 0;
		padding-right: 0;
	}

	.btn-collapse {
		box-shadow: none;
		font-size: 16pt;
		font-weight: bold;
		color: #222277;
		background:  url("../../assets/cadre/-.png") right no-repeat;
	}

	.btn-collapse.collapsed {
		background:  url("../../assets/cadre/+.png") right no-repeat;
	}

	.btn-article {
		margin-bottom: 20px;
	}

	.custom-btn {
		font-size: 12pt;
		padding: 10px;
	}

	.btn-consulter-article{
		margin-top: 35px;
		margin-bottom: 20px;
		margin-right: 30px;
	}

	.collapse {
		text-align: left;
	}
</style>