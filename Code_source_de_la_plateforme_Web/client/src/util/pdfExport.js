import { jsPDF } from "jspdf";

// Position horizontale ou debuter l'ecriture
const i_horizontalPos = 25;
const i_initialVerticalPos = 70;

/**
 * Fonction privee qui ecrit du texte sur plusieurs lignes dans un objet pdf selon le format d'ecriture recu (text vs textWithLink).
 * @param { String } s_textSplit Texte a separer
 * @param { Function } f_textFormat Fonction concrete de jsPDF a utiliser pour ecrire le texte. Elle doit prendre le texte, x, y et les options dans cet ordre
 * @param { Object } o_options Liste des options a ajouter pour le texte a ecrire dans le pdf. Doit respecter les options possibles de f_textFormat
 * @private
 */
function _writeMultilineText(s_textSplit, f_textFormat, o_options = {}) {
	const lines = this.splitTextToSize(s_textSplit, 165);
	lines.forEach(line => {
		f_textFormat.call(this, line, i_horizontalPos, this.verticalPos, o_options);
		this.verticalPos += 6;
	})
}

/**
 * Fonction qui ecrit le titre principal dans l'instance du document pdf. Attachee a l'instance de jsPDF via la fonction _attachPropsToInstance.
 * 'this' represente l'instance de jsPDF
 * @param {String} s_title Titre a ecrire
 * @param {Object} o_options Liste des options a ajouter pour le texte a ecrire dans le pdf. Doit respecter les options possibles de jsPDF.text
 * @private
 */
function _writeTitle(s_title, o_options = {}) {
	_setFontParams(this, "#222277", 16, "bold");
	_writeMultilineText.call(this, s_title.toUpperCase(), this.text, o_options);
	this.verticalPos += 6;
}

/**
 * Fonction qui ecrit un sous-titre dans l'instance du document pdf. Attachee a l'instance de jsPDF via la fonction _attachPropsToInstance. Une fois
 * le sous-titre ecrit, on verifie s'il faut changer de page. "this" represente l'instance de jsPDF
 * @param {String} s_title Sous-titre a ecrire
 * @param {Object} o_options Liste des options a ajouter pour le texte a ecrire dans le pdf. Doit respecter les options possibles de jsPDF.text
 * @private
 */
function _writeSubtitle(s_title, o_options = {}) {
	_setFontParams(this, "#a83fa1", 14, "normal");
	_writeMultilineText.call(this, s_title, this.text, o_options);
	this.verticalPos += 6;
	checkNewPage(this);
}

/**
 * Fonction qui ecrit un texte regulier dans l'instance du document pdf. Attachee a l'instance de jsPDF via la fonction _attachPropsToInstance.
 * Une fois le texte ecrit, on verifie s'il faut changer de page. "this" represente l'instance de jsPDF
 * @param {String} s_text texte a ecrire
 * @param {Object} o_options Liste des options a ajouter pour le texte a ecrire dans le pdf. Doit respecter les options possibles de jsPDF.text
 * @private
 */
function _writeText(s_text, o_options = {}) {
	_setFontParams(this, "#000", 12, "normal");
	_writeMultilineText.call(this, s_text, this.text, o_options);
	this.verticalPos += 6;
	checkNewPage(this);
}

/**
 * Fonction qui ecrit une ressource avec un lien dans l'instance du document pdf. Attachee a l'instance de jsPDF via la fonction _attachPropsToInstance.
 * Une fois la ressource ecrite, on verifie s'il faut changer de page. "this" represente l'instance de jsPDF
 * @param {String} s_ressource nom de la ressource a ecrire
 * @param {Object} o_options Liste des options a ajouter pour le texte a ecrire dans le pdf. Contient minimalement la propriete "url" pour le lien.
 * 							 Doit respecter les options possibles de jsPDF.textWithLink.
 * @private
 */
function _writeRessource(s_ressource, o_options = {}) {
	_setFontParams(this, "#000", 12, "normal");
	_writeMultilineText.call(this, s_ressource, this.textWithLink, o_options);
	this.setDrawColor("#c2cdd2");
	this.line(i_horizontalPos, this.verticalPos - 2, i_horizontalPos + 165, this.verticalPos - 2);
	this.verticalPos += 5;
	checkNewPage(this);
}

/**
 * Fonction qui definit les parametres de la police de caractere a appliquer pour les ecritures subsequentes. On utilise la famille de police par
 * defaut du systeme pour simplifier le traitement
 * @param {Object} o_pdf Instance de jsPDF a laquelle appliquer les parametres
 * @param {String} s_color Couleur de la police a appliquer en hexadecimal
 * @param {Number} i_size Taille de la police de caractere
 * @param {String} s_weight Poids de la police de caractere (bold, normal, italic)
 * @private
 */
function _setFontParams(o_pdf, s_color, i_size, s_weight) {
	o_pdf.setTextColor(s_color);
	o_pdf.setFontSize(i_size);
	o_pdf.setFont(undefined, s_weight);
}

/**
 * Fonction qui verifie si on atteint la limite de la page actuelle et si oui, ajoute une nouvelle page et repositionne la prochaine ligne au haut
 * de la page
 * @param {Object} o_pdf Instance de jsPDF a verifier et a ajouter une nouvelle page si requis
 * @private
 */
function checkNewPage(o_pdf) {
	if (o_pdf.verticalPos >= o_pdf.internal.pageSize.height - 50) {
		o_pdf.addPage();
		o_pdf.addImage(require("@/assets/fond_dadi.jpg"), 0, 0);
		o_pdf.verticalPos = i_initialVerticalPos;
	}
}

/**
 * Fonction qui attache toutes les fonctions utilitaires personnalisees a l'instance de jsPDF
 * @param {Object} o_pdf Instance de l'objet jsPDF a laquelle on veut attacher les fonctions utilitaires
 * @private
 */
function _attachPropsToInstance(o_pdf) {
	o_pdf.writeTitle = _writeTitle.bind(o_pdf);
	o_pdf.writeText = _writeText.bind(o_pdf);
	o_pdf.writeSubtitle = _writeSubtitle.bind(o_pdf);
	o_pdf.writeRessource = _writeRessource.bind(o_pdf);
	o_pdf.verticalPos = i_initialVerticalPos; // Position a utiliser pour le prochain texte
}

/**
 * Fonction qui construit une instance de jsPDF modifiee et qui la retourne pour construire un objet pdf
 * @param o_options Les options d'initialisation a passer au constructeur de jsPDF. Doit respecter les options possibles de jsPDF
 * @returns {module:jspdf.jsPDF} Retourne une instance de jsPDF initialisee avec une entete par defaut et les differentes fonctions d'ecriture
 */
function getNewPDFInstance(o_options = {}) {
	const o_pdf = new jsPDF(o_options);
	_attachPropsToInstance(o_pdf);
	o_pdf.addImage(require("@/assets/fond_dadi.jpg"), 0, 0);
	o_pdf.setFontSize(12);
	o_pdf.setCharSpace(0);
	return o_pdf;
}

export default {
	getNewPDFInstance
};