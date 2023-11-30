const express = require('express');
const router = express.Router();
const dbAPI = require('../database/dbAPI');

/**
 * Verifie l'existence d'une valeur et la recupere pour une etiquette donnee
 *
 * @param  { string|null } tag Etiquette de categorie de filtre
 * @returns { Array<string>|null } Liste des valeurs reliees a l'etiquette
 * @private
 */
function _reformatRequestValues(tag){
    return (tag === undefined || tag === "") ? null : tag.split(",");
}

/**
 * Requete de recuperation d'une liste de ressources filtrees.
 *
 * TODO LOGIN
 * @param { boolean } savedRessources Restriction de recherche aux ressources sauvegardees
 *
 * @param { string } format Restriction du format de ressource
 * @param { string } audiences Restriction des audiences d'une ressource
 * @param { string } themes Restriction des themes d'une ressource
 * @param { string } tags Restriction des etiquettes d'une ressource
 * @param { string } contexts Restriction des contextes d'une ressource
 * @param { string } categorie Restriction des categorie d'une ressource
 * @param { string } duration Restriction des durees pour une ressource
 * @param { string } license Restriction des licences pour une ressource
 * @param { string } folder Restriction des dossiers pour une ressource
 */

router.get('/', function(req, res, next){
    const o_filters = {
        format: _reformatRequestValues(req.query.format),
        audiences: _reformatRequestValues(req.query.audiences),
        themes: _reformatRequestValues(req.query.themes),
        tags: _reformatRequestValues(req.query.tags),
        contexts: _reformatRequestValues(req.query.contexts),
        categorie: _reformatRequestValues(req.query.categorie),
        duration: _reformatRequestValues(req.query.duration),
        license: _reformatRequestValues(req.query.license),
        folder: _reformatRequestValues(req.query.folder)
    };

    dbAPI.getResources(o_filters)
        .then(a_resources => res.send(a_resources))
        .catch(next);
});

/**
 * Requete de recuperation des details d'une ressource particuliere.
 *
 * @param { number } idRes Identifiant de la ressource
 */
router.get('/:idRes(\\d+)', function(req, res, next){
    dbAPI.getResource(req.params.idRes)
        .then(o_restFormatResource => res.send(o_restFormatResource))
        .catch(next);
});

/**
 * Requete de recuperation des etiquettes de ressources possibles
 *
 * @param { number } idRes Identifiant de la ressource
 */
router.get('/tags', function(req, res, next){
    dbAPI.getTags()
        .then(a_tags => res.send(a_tags))
        .catch(next);
});

/**
 * Requete de recuperation des etiquettes associé à des ressources
 *
 * 
 */
router.get('/activTags', function(req, res, next){
    dbAPI.getActivTags()
        .then(a_tags => res.send(a_tags))
        .catch(next);
});

// TODO LOGIN
/**
 * Requete de sauvegarde des ressources au profil d'un utilisateur.
 *
 * @param { Array } ressources Liste des ressources a sauvegarder dans le profil utilisateur
 * @param { Object } token Token de validite identifiant l'utilisateur
 */
// router.post('/user', function(req, res, next){
//     res.send('Hello');
// });

// TODO LOGIN
/**
 * Requete de suppression des ressources enregistrees a un profil utilisateur.
 *
 * @param { Array } ressources Liste des ressources a sauvegarder dans le profil utilisateur
 * @param { Object } token Token de validite identifiant l'utilisateur
 */
// router.delete('/user', function(req, res, next){
//     res.send('Hello');
// });

module.exports = router;

