<template>
	<div class="main-component">
		<Title main-title="Conditions d'utilisation"/>
		<div class="contenu">
			<h3>Conditions générales</h3>

			<p>Les présentes conditions générales régissent l’utilisation du site DADI.

				Ce site appartient et est géré par le Pôle d’innovation technopédagogique de la Faculté d’éducation de l’Université de Sherbrooke. En utilisant ce site, vous indiquez que vous avez lu et compris les conditions d’utilisation et que vous acceptez de les respecter en tout temps. Type de site : Plateforme libre d’autoformation dédiée à l’enseignement à distance à l’aide des technologies</p>

			<h4>Propriété intellectuelle</h4>
			<p>Tout contenu original de la plateforme sera publié sous la licence Creative Commons BY-NC-SA. Cela comprend, mais n’est pas limité aux images, textes, logos, documents, fichiers téléchargeables et tout ce qui contribue à la construction de ce site.

				Pour ce contenu original, les utilisateurs sont libres de :
				Partager – copier et redistribuer le matériel dans n’importe quel médium ou format.
				Adapter – remixer, transformer ou construire à partir du matériel.

				Tant que les termes de la licence seront respectés, il sera impossible pour le Pôle d’innovation technopédagogique de la Faculté d’éducation de l’UdeS de révoquer ces droits.

				Les termes de la licence sont stipulés comme suit :
				Attribution — Vous devez donnez le credit à l’auteur.e, fournir un lien vers la licence et indiquer si des changements ont été faits. Ces indications doivent être présentées de manière raisonnable, tout en évitant de suggérer que le Pôle d’innovation technopédagogique de la Faculté d’éducation de l’UdeS ne vous endose ni votre utilisation des ressources.
				Non-commercial — Vous ne pouvez pas utiliser le matériel à des fins commerciales.
				Partage identique «ShareAlike»— Si vous remixez, transformez ou construisez sur le matériel existant, vous devez le distribuer votre contribution sous la même licence (BY-NC-SA) que l’original. Aucune restriction additionnelle — Vous ne pouvez pas appliquer des termes légaux ou mesures technologiques qui empêchent légalement toute personne utilisatrice de poser une action que la licence permet.</p>

			<h4>Utilisation acceptable</h4>

			<p>En tant qu’utilisateur.e, vous acceptez d’utiliser notre site légalement et de ne pas utiliser le site pour des fins illicites , à savoir :

				Violer les droits de propriété intellectuelle des propriétaires du site ou de tout tiers au site.
				Pirater le compte d’un.e utilisateur.e du site.
				Agir de toute façon qui pourrait être considérée comme frauduleuse.
				Violer les termes de la licence Creative commons BY-NC-SA. Si nous estimons que vous utilisez le site illégalement ou d’une manière qui viole les conditions d’utilisation acceptables ci-dessus, nous nous réservons le limiter, suspendre ou résilier votre accès à ce site. Nous nous réservons également de prendre toutes les mesures juridiques nécessaires pour vous empêcher d’accéder à notre site.</p>

			<h4>Compte</h4>
			<p>Lorsque vous créez un compte sur notre site, vous acceptez ce qui suit :
				Que vous êtes seul.e responsable de votre compte et de la sécurité et la confidentialité de votre compte, y compris les mots de passe et renseignements personnels (pseudo, adresse courriel) ou autre (p.ex., ressources enregistrées dans votre dossier de formation). Nous nous réservons le droit de résilier ou suspendre votre compte si vous utilisez notre site illégalement ou si vous violez les conditions d’utilisation acceptable.</p>

			<h4>Limitation de responsabilité</h4>
			<p>Pôle d’innovation technopédagogique de la Faculté d’éducation de l’UdeS ou l’un de ses employé.es sera tenu responsable de tout problème découlant de ce site. Néanmoins, ceux-ci ne seront pas tenus responsable de tout problème découlant d’une utilisation irrégulière de ce site.</p>

			<h4>Indemnité</h4>
			<p>En tant qu’utilisateur, vous indemnisez le Pôle d’innovation technopédagogique de la Faculté d’éducation de l’UdeS de toute responsabilité, de tout coût, de toute cause d’action, de tout dommage ou de toute dépense découlant de votre utilisation de ce site ou de votre violation de l’une des dispositions énoncées dans le présent document.</p>

			<h4>Lois applicables</h4>
			<p>Ce document est soumis aux lois applicables au Canada et vise à se conformer à ses règles et règlements nécessaires. Pour les résidents de l’UE, le RGPD est la loi applicable qui régit ce document. En cas d’incompatibilité entre une disposition du présent document et le RGPD, les règles du RGPD auront préséance.</p>

			<h4>Divisibilité</h4>
			<p>Si, à tout moment, l’une des dispositions énoncées dans le présent document est jugée incompatible ou invalide en vertu des lois applicables, ces dispositions seront considérées comme nulles et seront retirées du présent document. Toutes les autres dispositions ne seront pas touchées par les lois et le reste du document sera toujours considéré comme valide.</p>

			<h4>Modifications</h4>
			<p>Ces conditions générales peuvent être modifiées de temps à autre afin de maintenir le respect de la loi et de refléter tout changement à la façon dont nous gérons notre site et la façon dont nous nous attendons à ce que les utilisateurs se comportent sur notre site. Nous recommandons à nos utilisateurs de vérifier ces conditions générales de temps à autre pour s’assurer qu’ils sont informés de toute mise à jour. Au besoin, nous informerons les utilisateurs par courriel des changements apportés aux conditions ou nous afficherons un avis sur notre site.</p>

			<h4>Contact</h4>
			<p>Veuillez communiquer avec nous si vous avez des questions ou des préoccupations. Nos coordonnées sont les suivantes :
				<br/><br/>
				Téléphone : (819) 821-8000 poste : 65984<br/>
				Courriel : pole.education@usherbrooke.ca<br/>

				Adresse : 2500, Boulevard de l’Université, Sherbrooke, QC, J1K 2R1 (Pavillon A2) <br/><br/>Date d’entrée en vigueur : à préciser…</p>
		</div>
	</div>
</template>

<script>
	import Title from "../../components/Title";
	export default {
		name: "ConditionsUtilisation",
		components: {
			Title
		}
	};
</script>

<style scoped>
	h3{
		text-transform: uppercase;
		font-weight: 800;
		color: #222277;
		padding-bottom: 22px;
	}
	h4{
		font-size: 25pt;
		padding-top: 30px;
		padding-bottom: 5px;
	}
	p{
		font-size: 16pt;
	}
</style>