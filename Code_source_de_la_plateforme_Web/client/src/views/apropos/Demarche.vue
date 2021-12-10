<template>
	<div class="main-component">
		<Title :mainTitle="titleApropos.mainTitle" :subtitle="titleApropos.subtitle"/>
		<div class="contenu">
			<h1>Démarche</h1>
			<div class="card" id="accordionCadre">
				<hr>
				<div class="card-header" id="headingOne">
					<button class="btn-collapse collapsed btn btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
						Les fondements et les principes du projet
					</button>
				</div>
				<div id="collapseOne" class="collapse pre-formatted" aria-labelledby="headingOne" data-parent="#accordionCadre">
					<div class="card-body" >
						<h2>Bien avant la pandémie, de nombreuses personnes formatrices en enseignement supérieur s’interrogeaient sur les meilleures pratiques et stratégies pour enseigner à distance à l’aide du numérique. L'objectif de la plateforme web DADI est de mieux les outiller à la fois sur les plans pédagogiques, technologiques, épistémologiques et disciplinaires en leur proposant de se faire une idée plus juste de leurs propres pratiques, et en leur offrant des ressources de formation personnalisées, adaptées à leurs besoins individuels de formation continue à l’intégration du numérique en soutien à l’apprentissage.</h2>
						<div class="row text-block">
							<div class="col" >
								<img class="img-div" alt="lumiere" src="@/assets/demarche/lumiere.png" />
								<h3>Posture métacognitive innovante</h3>
								<p class="text-block-fondements">Démarche introspective visant l’innovation contextualisée dans la pratique</p>
							</div>
							<div class="col" >
								<img class="img-div" alt="ordi" src="@/assets/demarche/ordi.png" />
								<h3>Fondé sur la recherche</h3>
								<p class="text-block-fondements">Pour fonder le soutien apporté sur la recherche et les connaissances actuelles</p>
							</div>
							<div class="col" >
								<img class="img-div" alt="roue" src="@/assets/demarche/roue.png" />
								<h3>Tourné sur la pratique
								</h3>
								<p class="text-block-fondements">Pour que les visiteurs se sentent outillés et aidés concrètement</p>
							</div>
							<div class="col" >
								<img class="img-div" alt="tarte" src="@/assets/demarche/tarte.png" />
								<h3>Modélisation non hiérarchique</h3>
								<p class="text-block-fondements">Pour que les visiteurs soient guidés sans avoir l’impression qu’il y a une bonne et une mauvaise réponse</p>
							</div>
						</div>
						<div class="row">
							<div class="col-6">
								<p>Il permet de favoriser l’innovation technopédagogique des personnes formatrices en FAD et de susciter l’émergence d’initiatives technopédagogiques innovantes chez les personnes formatrices.
									Logo DADI
									<br/><br/>
									Le DADI est rendu accessible via une plateforme Web qui comprend (REL 1) une application Web d’autoévaluation des connaissances en formation à distance au moyen de questionnaires dynamiques ; (REL 2) un guide pédagogique numérique qui présente des dossiers thématiques de ressources construites et ordonnées dans une logique de parcours de formation à la carte ; (REL 3) une Banque de ressources d’autoformation de formats variés (p.ex. capsules stratégiques, aide-mémoires, exemples de pratiques, canevas à remplir, infographies ou autres) accessibles au moyen de filtres.
								</p>
							</div>
							<div class="col-6">
								<img class="img-schema" alt="shema1" src="@/assets/demarche/schema1.png" />
							</div>
						</div>
						<div class="fondement-bas">
							<h2>Le dispositif de formation articule un ensemble des ressources humaines, matérielles, organisationnelles, techniques et pédagogiques inhérentes à son développement, à son utilisation et à sa pérennisation.</h2>
							<ul>
								<li>Le dispositif de formation et ses composantes reposent sur des fondements théoriques propres aux contextes de formation à distance et hybride.</li>
								<li>Il offre du soutien pédagogique aux personnes formatrices par le biais d’une plateforme Web qui rend accessibles ces fondements théoriques sur lesquels il repose, articulés autour des besoins des formatrices et des formateurs.</li>

							</ul>
						</div>
					</div>
				</div>
				<hr>
				<div class="card">
					<div class="card-header" id="headingTwo">
						<button class="btn-collapse collapsed btn btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
							La genèse du projet
						</button>
					</div>
					<div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionCadre">
						<div class="card-body">
							<img class="img-ligne-temps" alt="Ligne du temps" src="@/assets/demarche/genese_ligneTemps.png" />
							<table class="table table-sm">
								<thead class="header-genese">
								<tr>
									<th class="th th-no" scope="col">No</th>
									<th class="th" scope="col">Livrables</th>
									<th class="th" scope="col">Description</th>
								</tr>
								</thead>
								<tbody>
								<tr>
									<th class="ligne col-num" scope="row"><img class="img-no" alt="No" src="@/assets/demarche/forme.png" /><span class="num">1</span></th>
									<td class="ligne col-livrable">Calendrier détaillé de réalisation du mandat</td>
									<td class="ligne col-description">
										<strong class="strong-mauve">1)</strong> La planification générale a nécessité la réalisation d’une <strong>planification Gantt</strong> notre capacité d’investissement en temps et en ressources humaines pour la réalisation des différents livrables. <br/><br/>
										<strong class="strong-mauve">2)</strong> La <strong>schématisation de la planification</strong> Gantt réalisée grâce à l’outil Genial.ly, a par la suite été produite en vue d’illustrer les démarches parallèles d’élaboration de chacune des composantes du dispositif technologique. Ainsi, l’outil interactif d’évaluation des connaissances, le Guide pédagogique et la banque de ressources sont imbriqués dans un seul et même dispositif technologique au service du formateur qui enseigne en ligne. <br/><br/>
										<strong class="strong-mauve">3)</strong> Le <strong>choix de la licence</strong> de la REL (CC-BY-SA-NC) a également été réalisé à cette étape-ci, au terme d’une rencontre avec la responsable du projet Fabrique (Marianne Dubé).<br/><br/>
										<strong class="strong-mauve">3)</strong> Enfin, le temps nécessaire à la production et à la mise au propre du <strong>calendrier détaillé</strong> est également calculé ici. <br/>
									</td>
								</tr>
								<tr>
									<th class="ligne col-num" scope="row"><img class="img-no" alt="No" src="@/assets/demarche/forme.png" /><span class="num">2</span></th>
									<td class="ligne col-livrable">Description de la portée de la REL</td>
									<td class="ligne col-description">
										<strong class="strong-mauve">1)</strong> Décrire le public cible (niveau scolaire, niveau de compétences technopédagogiques, modalités d’enseignement, etc.) en cernant leurs besoins sur le plan de l’accessibilité du vocabulaire du dispositif, de sa nature pratique et opérationnelle à proposer des pistes d’améliorations contextualisées à la réalité du formateur.<br/><br/>
										<strong class="strong-mauve">2)</strong> Identifier les types d’usage que nous envisageons pour le dispositif DIT à partir de personnes utilisatrices.<br/><br/>
										<strong class="strong-mauve">3)</strong> Recenser les ressources éducatives libres de mêmes acabits de manière à analyser la valeur ajoutée de notre dispositif DIT en comparaison avec ce qu’ils proposent, et ce, à partir nos scénarios d’utilisateurs.<br/>
									</td>
								</tr>
								<tr>
									<th class="ligne col-num" scope="row"><img class="img-no" alt="No" src="@/assets/demarche/forme.png" /><span class="num">3</span></th>
									<td class="ligne col-livrable">RAPPORT PRÉSENTANT LES BESOINS POUR L'AUTOÉVALUATION DES CONNAISSANCES EN FAD</td>
									<td class="ligne col-description">
										<strong class="strong-mauve">1)</strong> Recension d’écrits scientifiques et pratiques qui portent sur les défis, besoins et pistes de solutions pour enseigner à distance à l’aide des technologies. <br/><br/>
										<strong class="strong-mauve">2)</strong> Sondage des besoins, défis et pistes de solutions qui touchent l’enseignement en FAD, mené auprès des acteurs pivots à travers les différents collèges et universités québécois (professeurs, chargés de cours, conseillers pédagogiques, coordonnateurs académiques, etc.)<br/>
										<ol class="list-lettre" type="a">
											<li>UQO, UQAM, ULAVAL, UQAT, etc.</li>
											<li>Cégep La Pocatière, Cégep de Sherbrooke, Séminaire St-Charles, Collège Montmorency, Cégep de Limoilou, Cégep de Sainte-Foy, etc.</li>
										</ol>
										<strong class="strong-mauve">3)</strong> Synthèse et classification des thématiques émergentes de la recension d’écrits pour dégager des connaissances pouvant faire l’objet d’une autoévaluation par la personne formatrice. <br/><br/>
										<strong class="strong-mauve">4)</strong> Rédaction et mise en forme du rapport. <br/>
									</td>
								</tr>
								<tr>
									<th class="ligne col-num" scope="row"><img class="img-no" alt="No" src="@/assets/demarche/forme.png" /><span class="num">3</span></th>
									<td class="ligne col-livrable">CAHIER DES CHARGES DU GUIDE NUMÉRIQUE (SITE WEB - BANQUE DE RESSOURCES) </td>
									<td class="ligne col-description">
										<strong class="strong-mauve">1)</strong> Recension des différentes banques de ressources libres existantes.  <br/><br/>
										<strong class="strong-mauve">2)</strong> Détermination du contenu et du format des ressources de la banque de ressources (canevas type).  <br/><br/>
										<strong class="strong-mauve">3)</strong> Détermination des balises d’intégration de la banque de ressources à l’outil d’autoévaluation interactif. <br/><br/>
										<strong class="strong-mauve">4)</strong> Recension des ressources externes à intégrer à la banque de ressources. <br/><br/>
										<strong class="strong-mauve">5)</strong> Rédaction, révision, correction et mise en forme du cahier des charges.  <br/>
									</td>
								</tr>
								<tr>
									<th class="ligne col-num" scope="row"><img class="img-no" alt="No" src="@/assets/demarche/forme.png" /><span class="num">4</span></th>
									<td class="ligne col-livrable">MODÈLE THÉORIQUE DE L’OUTIL D’AUTOÉVALUATION</td>
									<td class="ligne col-description">
										<strong class="strong-mauve">1)</strong> Identification et choix des modèles théoriques recensés qui pourraient être pertinents au regard de l’intention pédagogique derrière le dispositif DIT, qui est de représenter graphiquement les affinités entre certaines pratiques pédagogiques et certains contextes d’enseignement intégrant les technologies à des niveaux variables. <br/><br/>
										<strong class="strong-mauve">2)</strong> Caractérisation des liens entre les composantes et sous-composantes des modèles. <br/><br/>
										<strong class="strong-mauve">3)</strong> Regroupement des composantes et sous-composantes du modèle théorique retenu, basé sur un certain nombre de critères identifiés et jugés pertinents au regard de l’intention pédagogique derrière l’outil d’autoévaluation interactif.  <br/><br/>
										<strong class="strong-mauve">4)</strong> Production de l’ébauche du modèle théorique propre au dispositif DIT.  <br/><br/>
									</td>
								</tr>
								<tr>
									<th class="ligne col-num" scope="row"><img class="img-no" alt="No" src="@/assets/demarche/forme.png" /><span class="num">5</span></th>
									<td class="ligne col-livrable">ARBORESCENCE DU DISPOSITIF DE FORMATION </td>
									<td class="ligne col-description">
										<strong class="strong-mauve">1)</strong> Développement de l’architecture du dispositif <br/>
										<ol class="list-lettre" type="a">
											<li> Détermination des sections du dispositif ainsi que de l’information qu’elles contiennent. </li>
											<li> Hiérarchisation des contenus présents au sein des différentes sections du dispositif. </li>
											<li> Caractérisation des liens entre les sections du dispositif. </li>
										</ol>
									</td>
								</tr>
								<tr>
									<th class="ligne col-num" scope="row"><img class="img-no" alt="No" src="@/assets/demarche/forme.png" /><span class="num">6</span></th>
									<td class="ligne col-livrable">DÉVELOPPEMENT DU CONTENU DU DISPOSITIF </td>
									<td class="ligne col-description">
										<strong class="strong-mauve">1)</strong> Élaboration des balises de conception permettant de rendre le dispositif (ou certaines parties) libres. <br/><br/>
										<strong class="strong-mauve">2)</strong> Production des questionnaires interactifs proposés au sein du dispositif (court questionnaire lancé automatiquement sur la page d’accueil du dispositif&nbsp;; questionnaire long à embranchements multiples associé au modèle théorique).<br/><br/>
										<strong class="strong-mauve">3)</strong> Description du mécanisme algorithmique de recueil, d’analyse et de mise en forme graphique des réponses données aux questionnaires.  <br/><br/>
										<strong class="strong-mauve">4)</strong> Production des ressources exclusives et production de ressources permettant de transiter vers des ressources existantes recensées au regard de filtres correspondant aux besoins identifiés par les formateurs. <br/>
										<ol class="list-lettre" type="a">
											<li> Adaptation du canevas type présenté dans le cahier des charges. </li>
											<li> Rédaction, révision, correction et mise au propre des ressources développées. </li>
										</ol>
									</td>
								</tr>
								<tr>
									<th class="ligne col-num" scope="row"><img class="img-no" alt="No" src="@/assets/demarche/forme.png" /><span class="num">7</span></th>
									<td class="ligne col-livrable">SQUELETTE DES PAGES PRINCIPALES DE LA PLATEFORME </td>
									<td class="ligne col-description">
										<strong class="strong-mauve">1)</strong> Réalisation d’une maquette des zonages et des wireframes.  <br/><br/>
										<strong class="strong-mauve">2)</strong> Élaboration des squelettes des différentes sections du dispositif. <br/><br/>
										<strong class="strong-mauve">3)</strong> Production d’une planche d’inspiration pour l’identité visuelle du site. <br/>
									</td>
								</tr>
								<tr>
									<th class="ligne col-num" scope="row"><img class="img-no" alt="No" src="@/assets/demarche/forme.png" /><span class="num">8</span></th>
									<td class="ligne col-livrable">CONSTRUCTION DE LA PLATEFORME WEB </td>
									<td class="ligne col-description">
										<strong class="strong-mauve">1)</strong> Détermination des balises pour lier les ressources de la banque de ressources aux réponses du questionnaire d’autoévaluation des connaissances en FAD.<br/><br/>
										<strong class="strong-mauve">2)</strong> Détermination des modalités et implications sur le plan de la conception de la plateforme Web pour permettre la mise en disponibilité des deux ressources éducatives produites en format libre. <br/><br/>
										<strong class="strong-mauve">3)</strong> Programmation de la plateforme Web à partir des maquettes produites par l’équipe d’idéation et de design&nbsp;:   <br/>
										<ol class="list-lettre" type="a">
											<li> Le Site Web consacré au Guide pédagogique.</li>
											<ol class="list-lettre" type="i">
												<li>    Cela inclut notamment le questionnaire d’accueil et les filtres accompagnant les différentes réponses données afin d’orienter l’utilisateur à travers sa navigation dans la banque de ressources. </li>
											</ol>
											<li> L’application Web d’autoévaluation des connaissances en FAD intégrée au site Web. </li>
										</ol>
										<strong class="strong-mauve">4)</strong> Testage du site Web et de l’application Web auprès d’un échantillon d’utilisateurs potentiels. <br/><br/>
										<strong class="strong-mauve">5)</strong> Évaluation de l’expérience utilisateur des utilisateurs-tests en vue de bonifier la version prototype de l’ensemble de la plateforme Web. <br/>
									</td>
								</tr>
								<tr>
									<th class="ligne col-num" scope="row"><img class="img-no" alt="No" src="@/assets/demarche/forme.png" /><span class="num">9</span></th>
									<td class="ligne col-livrable">DIFFUSION DU DISPOSIITF </td>
									<td class="ligne col-description">
										<strong class="strong-mauve">1)</strong> Mise en ligne du dispositif par un programmeur. <br/><br/>
										<strong class="strong-mauve">2)</strong> Testage du dispositif par un échantillon d’utilisateurs. <br/><br/>
										<strong class="strong-mauve">3)</strong> Corrections de problèmes techniques rapportés par les utilisateurs-tests. <br/>
									</td>
								</tr>
								<tr>
									<th class="ligne col-num" scope="row"><img class="img-no" alt="No" src="@/assets/demarche/forme.png" /><span class="num-dizaine">10</span></th>
									<td class="ligne col-livrable">PRODUCTION DU GUIDE D’UTILISATION PÉDAGOGIQUE </td>
									<td class="ligne col-description">
										<strong class="strong-mauve">1)</strong> Détermination du contenu du guide pédagogique.<br/><br/>
										<strong class="strong-mauve">2)</strong> Détermination du format du guide en adéquation avec l’intention de communication.<br/>
										<ol class="list-lettre" type="a">
											<li> Guide intégré au dispositif.</li>
											&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;OU
											<li> Guide en format PDF ou autre disponible pour téléchargement. </li>
										</ol>
										<strong class="strong-mauve">3)</strong> Rédaction, révision, correction et mise en page du guide pédagogique.<br/>
									</td>
								</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
				<hr>
				<div class="card">
					<div class="card-header" id="headingThree">
						<button class="btn-collapse collapsed btn btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
							À qui s’adresse le DADI?
						</button>
					</div>
					<div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionCadre">
						<div class="card-body">
							<h2>Le DADI s’adresse aux formateur·trice·s francophones de niveau universitaire et collégial de niveau intermédiaire ou débutant qui enseignent à distance à l’aide de technologies numériques ou dans le contexte d’un dispositif de formation hybride.</h2>
							<p class="text-a-qui">Il saura aussi être utile aux personnes qui forment, encadrent ou accompagnent les personnes formatrices enseignant à distance, par exemple des conseillers pédagogiques ou des responsables de programmes. Dans le but d’éviter de renvoyer à des ressources trop spécifiques et peu accessibles pour le public cible, nous souhaitons dans un premier temps nous adresser à des personnes formatrices débutantes ou de niveau intermédiaire. À terme, il pourrait néanmoins être envisagé de bonifier la REL dans le but d’offrir des ressources de formation continue pour un public plus expérimenté. Afin de répondre au mieux aux besoins de ce public cible, l’outil d’autoévaluation (la présente REL) du DADI, devra intégrer les caractéristiques suivantes :</p>
							<h4>Une orientation pratique :</h4>
							<p class="text-a-qui">La REL aura la vocation de transmettre aux personnes formatrices des conseils, des suggestions et toutes autres informations pratiques basées sur des assises scientifiques qui pourront être immédiatement utilisés par celles-ci. Non seulement nous offrirons par le biais de la REL une plateforme d’initiation, voire d’autoformation, mais nous permettrons aux personnes formatrices en exercice de s’outiller afin de réguler, et éventuellement, d’autoréguler, leur pratique enseignante.</p>
							<h4>Adapté au contexte de formation :</h4>
							<p class="text-a-qui">Dans l’optique d’être mobilisables immédiatement, les ressources suggérées par la REL seront adaptées au contexte de formation de la personne formatrice qui vient y chercher de l’information. C’est pourquoi les questions de l’outil d’autoévaluation seront pensées de manière à identifier les éléments essentiels du contexte de formation (ex. type de dispositif de formation, taille des groupes, temps à consacrer, niveau d’aisance avec les TIC, thématique ciblée, etc.) pour proposer des ressources qui pourront répondre aux besoins actuels des personnes formatrices.</p>
							<h4>Un langage accessible :</h4>
							<p class="text-a-qui">Nous souhaitons avant tout que notre REL soit offerte aux personnes formatrices de divers champs disciplinaires, dont certaines peuvent ne pas avoir été formées à la technopédagogie ni même à la pédagogie. Cette méconnaissance terminologique potentielle liée au domaine de l’Éducation pose un défi sur le plan de la présentation de l’information. Il sera donc essentiel de vulgariser le contenu, en particulier du point de vue du langage et du vocabulaire utilisé afin que l’information soit compréhensible pour toute personne utilisatrice.</p>
							<h4>Afin de permettre une meilleure représentation des usages du DADI par son public cible, voici quelques scénarios d’utilisation fictifs :</h4>
							<ol>
								<li class="li-text-long">Un professeur qui a toujours enseigné en présentiel doit pour la première fois donner un cours en ligne et ne sait pas par où commencer. Il va utiliser l’outil d’autoévaluation de son savoir technopédagogique disciplinaire pour identifier les éléments à prioriser pour se former et les stratégies adéquates pour faciliter son travail. En précisant notamment le temps dont il dispose pour se former, il se verra proposer un contenu qu’il pourra appréhender de manière réaliste afin de pouvoir préparer son cours à temps.</li>
								<li class="li-text-long">Une chargée de cours enseigne en ligne depuis plusieurs sessions et se demande si elle pourrait mieux exploiter son dispositif et comment, car elle a l’impression que son cours en ligne lui prend plus de temps et d’énergie à gérer que les cours qu’elle donnait en présentiel par le passé. Elle utilise l’outil d’autoévaluation pour comprendre de quelle manière elle utilise ses compétences et gère son cours. Elle réalise à travers son évaluation qu’elle économiserait du temps et de l’énergie dans sa gestion des évaluations si elle ciblait de manière plus sélective les exercices sur lesquels elle donne une rétroaction commentée.</li>
							</ol>
						</div>
					</div>
				</div>
				<hr>
				<div class="card">
					<div class="card-header" id="headingFour">
						<button class="btn-collapse collapsed btn btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
							À quels besoins le DADI répond-il?
						</button>
					</div>
					<div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordionCadre">
						<div class="card-body">
							<h2>À l’issue de la recension des écrits, du sondage mené auprès des personnes conseillères pédagogiques et expertes en formation à l’aide du numérique, et au regard de l’expérience professionnelle des conseillers pédagogiques en collaboration sur l’analyse des données, nous avons identifié des besoins de formation potentiels pour les personnes formatrices qui enseignent à distance ou en mode hybride à l’aide des technologies en fonction de 8 thématiques. Nous chercherons donc, dans le développement de l’ensemble de la plateforme DADI, et en particulier dans le développement de l’outil d’autopositionnement, à répondre aux besoins identifiés selon ces thématiques.  </h2>
							<ol>
								<li class="li-text-long"><strong>Mode d’enseignement </strong>: Les personnes formatrices disent ne pas être en mesure de faire l’évaluation des couts et des bénéfices associés aux deux modalités d’enseignement et d’évaluation selon leur contexte d’enseignement. Ils ne connaissent pas tous les types d’activités ni l’éventail des outils technologiques synchrones et asynchrones. Ils souhaiteraient donc être en mesure d’identifier quand il est pertinent de proposer des activités pédagogiques synchrones plutôt qu’asynchrones ou inversement. </li>
								<li class="li-text-long"><strong>Jauge des activités individuelles et collaboratives</strong> : Les personnes formatrices ne semblent pas remettre en question la pertinence d’intégrer des activités coopératives ou collaboratives à leurs cours en ligne, mais il leur est parfois difficile de proposer ces types d’activités parce qu’ils ne connaissent pas l’éventail des outils technologiques adaptés à ces situations, ils ne sont pas forcément à l’aise de piloter ces activités et ne semblent pas en mesure d’identifier les moments où il est plus pertinent de proposer des activités individuelles ou collaboratives dans le cadre de cours en ligne. </li>
								<li class="li-text-long"><strong>Alignement technopédagogique </strong>: Les personnes formatrices ne semblent pas systématiquement valider l’alignement technopédagogique de leur cours en ligne. Il semblerait que les composantes de l’alignement technopédagogique ne soient pas connues par l’ensemble des personnes formatrices. Il leur serait pertinent d’être en mesure d’identifier l’utilité et les composantes, mais aussi de savoir comment elles s’articulent. Le moment et la manière de valider l’alignement technopédagogique de leur cours représentent également des besoins identifiés.</li>
								<li class="li-text-long"><strong>Présence à distance</strong> : L’établissement d’un climat sociorelationnel d’ouverture demeure un défi pour plusieurs personnes formatrices qui se sentent isolées derrière leur écran. Les personnes formatrices ont le désir de réduire à la fois le sentiment d’isolement qu’elles éprouvent et celui de leurs personnes étudiantes, pour leur offrir des activités d’apprentissage engageantes à la fois sur le plan relationnel et cognitif. Elles souhaiteraient ainsi être en mesure de savoir quelles stratégies d’enseignement utiliser pour créer un sentiment de présence à distance, établir une relation de confiance avec les personnes étudiantes et instaurer une cohésion de groupe donnant libre cours à une communication ouverte et transparente. </li>
								<li class="li-text-long"><strong>Engagement et motivation</strong> : L’engagement et la motivation en FAD sont relevés comme des défis dans certains cas, autant pour les personnes formatrices que pour les personnes étudiantes. Les recherches offrent plusieurs pistes pour favoriser la motivation, mais celles-ci ne sont pas nécessairement bien connues, considérées ou appliquées par les personnes formatrices. Celles-ci ont donc besoin de savoir comment concrètement favoriser la motivation des personnes étudiantes dans un cours en ligne, et comment sonder celle-ci. Du point de vue de la personne formatrice, le mauvais calcul des couts et des bénéfices associés au développement d’activités d’apprentissage peut miner la motivation, considérant le temps investi. L’appropriation de stratégies d’économie de temps et d’énergie pour enseigner en FAD ou en contexte de formation hybride demeure un besoin partagé par plusieurs personnes formatrices.</li>
								<li class="li-text-long"><strong>Manipulation des outils technologiques</strong> : La capacité des personnes formatrices à maintenir le rythme d’appropriation et d’exploration des nouveaux outils innovants, pertinents, fiables et à leur portée ne correspond pas au temps dont elles disposent pour se prêter à la tâche. Les personnes formatrices réclament des outils fiables, conviviaux, mais également innovants. Elles souhaiteraient être en mesure de savoir comment s’approprier rapidement un nouvel outil TIC, et comment choisir judicieusement les outils technologiques à investir sans y perdre du temps.  </li>
								<li class="li-text-long"><strong>Évaluation des apprentissages (et des compétences)</strong> : La formation à distance soulève en effet, pour les évaluations, des enjeux éthiques spécifiques (ex. évaluation dans les mêmes conditions pour tous, authentification de l’identité de la personne étudiante, risque de plagiat, sécurité et fiabilité des outils TIC, etc.). Les personnes formatrices ne semblent pas connaitre l’étendue des possibilités et les points de vigilance liés à l’évaluation des apprentissages à l’aide des technologies. Elles souhaiteraient donc savoir quelles sont les méthodes permettant d’évaluer la progression des apprentissages à distance, et plus encore comment évaluer les compétences à l’aide des technologies.  </li>
								<li class="li-text-long"><strong>Stratégies pédagogiques actives</strong> : Les personnes formatrices ne semblent pas avoir une grande facilité à mettre en action les personnes étudiantes à distance à l’aide des technologies. Certaines se campent dans des postures pédagogiques frontales misant sur le dépôt et la consultation de documents en espérant que les personnes étudiantes pourront circonscrire l’information importante à retenir et faire les transferts d’apprentissage nécessaires à l’atteinte des cibles d’apprentissage de manière autonome. D’autres perçoivent la valeur de la pédagogie active et souhaiteraient la mettre en œuvre, mais ne savent pas comment l’appliquer à leur contexte d’enseignement en ligne. Le pilotage de ce type de situations d’apprentissage à distance demeure parfois flou pour certaines personnes formatrices qui considèrent ne pas toujours savoir comment bien jouer leur rôle de guide-accompagnateur. Ils souhaiteraient être en mesure de connaitre la valeur ajoutée des activités les unes par rapport aux autres, mais aussi de savoir comment agir à distance dans leur rôle de personne facilitatrice des apprentissages de leurs personnes étudiantes. Elles souhaiteraient donc savoir comment planifier, concevoir et piloter des scénarios pédagogiques qui les mettent en action en formation à distance, qui requièrent l’interaction et la collaboration entre les membres d’une même communauté d’apprentissage.</li>
							</ol>
						</div>
					</div>
				</div>
				<hr>
			</div>
		</div>
	</div>
</template>

<script>
	import Title from "../../components/Title"
	import { titleApropos} from "../../util/sharedData"

	export default {
		name: "Demarche",
		components: {
			Title
		},
		data() {
			return {
				titleApropos
			};
		},
		methods: {}
	};
</script>

<style scoped>
	h1{
		text-transform: uppercase;
		font-weight: 800;
		font-size: 25pt;
		color: #222277;
		margin-bottom: 45px;
	}
	h2{
		font-weight: bold;
		font-size: 16pt;
		color: #222277;
		padding-bottom: 33px;
		padding-top: 33px;
		width: 100%;
	}
	h3{
		text-transform: uppercase;
		font-weight: 900;
		font-size: 14pt;
		color: #94e4c7;
		text-align: center;
		padding-top: 93px;
		padding-bottom: 15px;
	}
	h4{
		font-weight: 800;
		font-size: 16pt;
		color: #222277;
	}
	.text-block-fondements{
		font-weight: bold;
		font-size: 14pt;
		color: white;
		text-align: center;
	}
	.text-a-qui{
		padding-bottom: 34px;
	}
	p, .col-description{
		font-size: 16pt;
	}
	.num, .num-dizaine{
		font-weight: 900;
		font-size: 35pt;
		color: white;
		display: flex;
		align-items: center;
		position: relative;
		left: -63%;
		top: -1px;
	}
	.num-dizaine{
		left: -78%;
		top: -1px;
	}
	li{
		font-size: 16pt;
		padding-left: 0;
		margin-left: 20px;
	}
	ol{
		padding-left: 0;
		margin-left: 0;
	}
	.li-text-long{
		padding-bottom: 20px;
	}
	.list-lettre{
		margin-left: 50px;
	}
	.th{
		padding-top: 7px;
		padding-bottom: 7px;
	}
	.th-no{
		padding-left: 20px;
	}
	.header-genese{
		font-weight: bold;
		font-size: 16pt;
		color: white;
		background-color: #222277;
	}
	.ligne{
		padding-top: 39px;
		padding-bottom: 34px;
	}
	.col-num{
		display: inline-flex;
		width: 91px;
	}
	.col-livrable{
		text-transform: uppercase;
		font-weight: 900;
		font-size: 16pt;
		color: #a83fa1;
		width: 200px;
		padding-right: 50px;
	}

	.strong-mauve{
		font-weight: 800;
		font-size: 16pt;
		color: #a83fa1;
	}
	.img-div{
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		padding-top: 20px;
		padding-bottom: 10px;
	}
	.img-schema{
		padding-left: 50px;
	}
	.img-ligne-temps{
		width: 100%;
		padding-top: 33px;
		padding-bottom: 75px;
	}
	.img-no{
		position: relative;
		align-content: center;
		padding-right: 3px;
		padding-top: 6px;
	}
	.row{
		margin-right: 0;
		margin-left: 0;
	}
	.text-block{
		margin-bottom: 50px;
	}
	.fondement-bas{
		padding-bottom: 40px;
	}
	hr{
		border-top: solid 3px #e1e7ea;
		margin-top: 0;
		margin-bottom: 0;
	}
	.card{
		box-shadow: none;
		border: none;
	}
	.card-header{
		background-color: white;
		border: none;
		padding-left: 0;
		padding-right: 0;
	}
	.card-body{
		padding-left: 0;
		padding-right: 0;
		padding-top: 0;
	}
	.btn-collapse{
		box-shadow: none;
		padding-left: 0;
		padding-right: 0;
		font-size: 16pt;
		font-weight: bold;
		color: #222277;
		background:  url("../../assets/cadre/-.png") right no-repeat;
	}
	.btn-collapse.collapsed{
		background:  url("../../assets/cadre/+.png") right no-repeat;
	}
	.col-6{
		padding-left: 0;
		padding-right: 0;
	}
	.col{
		background-color: #a83fa1;
		height: 284px;
		width: 273px;
		margin-right: 5px;
	}

	.collapse {
		text-align: left;
	}
</style>