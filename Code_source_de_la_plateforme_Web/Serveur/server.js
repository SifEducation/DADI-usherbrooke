/***************************************
 * Importation des modules necessaires *
 ***************************************/

const createError = require('http-errors');
const express = require('express');
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
const cors = require('cors');

// Import des fichiers de declaration des chemins d'acces
const quizRouter = require('./app/routes/quizRoutes');
const resourceRouter = require('./app/routes/resourceRoutes');
const userRouter = require('./app/routes/userRoutes');

// Import et initialisation du pool de connexions a la base de donnees
const db = require('./app/database/dbAPI');

/*****************************
 * Initialisation du serveur *
 *****************************/

// Initialisation de l'application express
const server = express();

// Declaration des politiques CORS
server.use(cors({ origin: [/* dadi_spec: url de base du site web */]}));

// Initialisation de la connection a la base de donnees
db.connect();

// Analyse le texte de donnees encodees d'URL et rend l'attribut req.body accessible
server.use(bodyParser.urlencoded({
  extended: true
}));
server.use(bodyParser.json());

server.use(cookieParser());

// Initialisation des chemins d'acces
server.use('/questionnaire', quizRouter);
server.use('/ressource', resourceRouter);
server.use('/user', userRouter);

// Gestion des erreurs de type 404 par le gestionnaire d'erreur
server.use(function(req, res, next) {
  next(createError(404));
});

// Gestionnaire d'erreur
server.use(function(err, req, res, next) {
  res.statusMessage = err.toString();
  res.sendStatus(500);
});

module.exports = server;
