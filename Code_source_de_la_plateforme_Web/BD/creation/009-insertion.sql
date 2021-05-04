-- Jeu d'insertion de donnees rudimentaires pour des tests
-- Pour un ensemble de donnees plus representatif, utilisez test-insert

-- Ressources
INSERT INTO daadi.Ressource (code, titre, sous_titre, temps_investi, description, format, type_licence, chemin)
VALUES ('code 1', 'ressource 1', 'sous-titre 1', 'Plus de 2h', 'une description de ressource 1', 'Capsule stratégique', 'CC0',
        '/chemin/ilestou'),
       ('code 2', 'ressource 2', 'sous-titre 2', '50 minutes à 1h30', 'une description de ressource 2', 'Tutoriel',
        'Tous droits réservés',
        '/chemin/ilestla'),
       ('code 3', 'ressource 3', 'sous-titre 3', '20 à 45 minutes', 'une description de ressource 3', 'Canevas à remplir',
        'CC-BC-NC',
        '/chemin/lailouilest'),
       ('code 4', 'ressource 4', 'sous-titre 4', '15 minutes et moins', 'une description de ressource 4', 'Articles professionels',
        'CC-BY-NC-SA',
        '/chemin/ilsepeut'),
       ('code 5', 'ressource 5', 'sous-titre 5', '15 minutes et moins', 'une description de ressource 5', 'Répertoire', 'CC0',
        '/chemin/perduilest');


-- Statistique ressource
INSERT INTO daadi.StatRessource (id_ressource, nb_reference, nb_clique)
VALUES (1, 10, 24),
       (2, 1, 3),
       (3, 100, 800),
       (4, 5, 113),
       (5, 65, 80);

-- Etiquette
INSERT INTO daadi.Etiquette(nom)
VALUES ('tag 1'),
       ('tag 2'),
       ('tag 3'),
       ('tag 4'),
       ('tag 5'),
       ('tag 6'),
       ('tag 7'),
       ('tag 8'),
       ('tag 9'),
       ('tag 10');

-- Ressource liee aux etiquette
INSERT INTO daadi.EtiquetteRessource (nom, id_ressource)
VALUES ('tag 1', 1),
       ('tag 2', 1),
       ('tag 3', 1),
       ('tag 1', 2),
       ('tag 3', 2),
       ('tag 2', 3),
       ('tag 3', 3),
       ('tag 1', 3),
       ('tag 4', 3),
       ('tag 2', 4),
       ('tag 3', 5),
       ('tag 2', 5);


-- Utilisateur
INSERT INTO daadi.Utilisateur (email, mdp_token)
VALUES ('mail@mail.com', 'motdepasse123'),
       ('daadi@mail.com', 'mdp123'),
       ('user@mail.com', 'mdp123'),
       ('test@mail.com', 'mdp123'),
       ('phil@mail.com', 'mdp123'),
       ('vero@mail.com', 'mdp123'),
       ('pat@mail.com', 'mdp123'),
       ('jc@mail.com', 'mdp123'),
       ('dev@mail.com', 'mdp123'),
       ('bachy@mail.com', 'mdp123');
-- 10  utilisateurs


-- Ressource enregistree
INSERT INTO daadi.RessourceEnregistre (id_utilisateur, id_ressource)
VALUES (1, 1),
       (1, 2),
       (2, 1);


-- Etablissement
INSERT INTO daadi.Etablissement (etablissement)
VALUES ('Universite de Sherbrooke'),
       ('Universite Laval'),
       ('Universite de Montreal'),
       ('Universite McGill'),
       ('Universite Bishop'),
       ('Universite du Quebec en Outaouais'),
       ('Universite Trois-Rivieres'),
       ('Ecole de technologie Superieur'),
       ('Cegep de Sherbrooke'),
       ('Ecole du triolet');


-- Etablissement ou frequente l'utilisateur
INSERT INTO daadi.EtablissementUtilisateur (etablissement, id_utilisateur)
VALUES ('Universite de Sherbrooke', 1),
       ('Universite Laval', 2),
       ('Universite de Montreal', 3),
       ('Universite McGill', 4),
       ('Universite Bishop', 5);

-- Questionnaire
INSERT INTO daadi.Questionnaire (description, code, temps_estime)
VALUES ('une description', 'Q1', 0.5),
       ('autre description', 'Q2', 1),
       ('Ceci est une phrase.', 'Q3', 1.25),
       ('Ceci est une autre phrase.', 'Q4', 0.25),
       ('Questionnaire 1.', 'Q5', 0.75);


-- Sous questionnaire
INSERT INTO daadi.SousQuestionnaire (id_questionnaire, code, description, niveau)
VALUES (1, 'SQ1', 'description sous questionnaire 1', 1),
       (1, 'SQ2', 'description sous questionnaire 2', 2),
       (2, 'SQ3', 'description sous questionnaire 3', 3),
       (3, 'SQ4', 'description sous questionnaire 4', 4),
       (4, 'SQ5', 'description sous questionnaire 5', 2);


-- Question
INSERT INTO daadi.Question (id_sous_questionnaire, code, description, type)
VALUES (1, 'q1', 'description question 1', 'Fréquence'),
       (1, 'q2', 'description question 2', 'Fréquence'),
       (1, 'q3', 'description question 3', 'Fréquence'),
       (2, 'q4', 'description question 4', 'Fréquence'),
       (2, 'q5', 'description question 5', 'Fréquence'),
       (3, 'q6', 'description question 6', 'Fréquence'),
       (3, 'q7', 'description question 7', 'Fréquence'),
       (3, 'q8', 'description question 8', 'Fréquence'),
       (3, 'q9', 'description question 9', 'Fréquence'),
       (4, 'q10', 'description question 10', 'Fréquence');
-- 10 Questions


-- Sous Question
INSERT INTO daadi.SousQuestion (id_question, code, description)
VALUES (1, 'sq1', 'description sous question 1 de 1'),
       (1, 'sq2', 'description sous question 2 de 1'),
       (1, 'sq3', 'description sous question 3 de 1'),
       (2, 'sq4', 'description sous question 1 de 2'),
       (2, 'sq5', 'description sous question 2 de 2'),
       (2, 'sq6', 'description sous question 3 de 2'),
       (3, 'sq7', 'description sous question 1 de 3'),
       (3, 'sq8', 'description sous question 2 de 3'),
       (4, 'sq9', 'description sous question 1 de 4'),
       (4, 'sq10', 'description sous question 2 de 4'),
       (4, 'sq11', 'description sous question 3 de 4'),
       (4, 'sq12', 'description sous question 4 de 4'),
       (5, 'sq13', 'description sous question 1 de 5'),
       (5, 'sq14', 'description sous question 2 de 5'),
       (5, 'sq15', 'description sous question 3 de 5'),
       (5, 'sq16', 'description sous question 4 de 5');
-- 16 sous questions


-- Composante
INSERT INTO daadi.Composante (nom)
VALUES ('Composante 1'),
       ('Composante 2'),
       ('Composante 3'),
       ('Composante 4'),
       ('Composante 5'),
       ('Composante 6'),
       ('Composante 7'),
       ('Composante 8'),
       ('Composante 9'),
       ('Composante 10');
-- 10 composantes... Bon oui il me semble qu'il y'a moins de composantes que ca


-- Composante cible par le sous questionnaire
INSERT INTO daadi.ComposanteCible (nom, id_sous_questionnaire)
VALUES ('Composante 1', 1),
       ('Composante 2', 1),
       ('Composante 8', 2),
       ('Composante 4', 3),
       ('Composante 5', 4);


-- Reponse donne par l'utilisateur
INSERT INTO daadi.ReponseUtilisateur (id_sous_question, id_utilisateur, reponse)
VALUES (1, 1, 1),
       (2, 1, 1),
       (3, 1, 2),
       (1, 2, 1),
       (2, 2, 4),
       (3, 2, 3),
       (1, 3, 2),
       (2, 3, 4),
       (3, 3, 5);

-- Contrainte
INSERT INTO daadi.contrainte(id_contrainte)
VALUES (1),
       (2),
       (3),
       (4),
       (5),
       (6),
       (7),
       (8),
       (9),
       (10);

-- Contrainte ponderee
INSERT INTO daadi.ContraintePondere (id_contrainte, min_contrainte, max_contrainte)
VALUES (1, 0, 2),
       (3, 2, 5),
       (5, 4, 7),
       (7, 0, 3),
       (9, 0, 3);
-- Le id des contraintes ponderee est impair pour les soucis de tests

INSERT INTO daadi.PondereSousQuestion (id_contrainte, id_sous_question, ponderation_inversee)
VALUES (1, 1, FALSE),
       (1, 2, FALSE),
       (1, 3, FALSE),
       (3, 1, FALSE),
       (3, 2, FALSE),
       (3, 3, FALSE),
       (5, 9, FALSE),
       (5, 10, FALSE),
       (5, 11, FALSE),
       (5, 12, FALSE),
       (7, 7, FALSE),
       (7, 8, TRUE),
       (9, 9, FALSE),
       (9, 10, FALSE),
       (9, 11, FALSE),
       (9, 12, FALSE);


-- Contrainte logique
INSERT INTO daadi.ContrainteLogique (id_contrainte, id_sous_question, reponse)
VALUES (2, 5, 'souvent'),
       (2, 5, 'toujours'),
       (2, 6, 'souvent'),
       (2, 6, 'toujours'),
       (4, 6, 'toujours'),
       (6, 7, 'jamais'),
       (8, 8, 'souvent'),
       (10, 9, 'jamais');
-- Le id des contraintes logiques est pair pour les differencier des contraintes ponderees


-- Retroaction
INSERT INTO daadi.Retroaction (id_contrainte, description)
VALUES (1, 'description de la retroaction 1'),
       (2, 'description de la retroaction 2'),
       (3, 'description de la retroaction 3'),
       (4, 'description de la retroaction 4'),
       (5, 'description de la retroaction 5'),
       (6, 'description de la retroaction 6'),
       (7, 'description de la retroaction 7'),
       (8, 'description de la retroaction 8'),
       (9, 'description de la retroaction 9'),
       (10, 'description de la retroaction 10');


-- Objectif
INSERT INTO daadi.Objectif (message)
VALUES ('message 1'),
       ('message 2'),
       ('message 3'),
       ('message 4'),
       ('message 5'),
       ('message 6'),
       ('message 7'),
       ('message 8');

-- Objectif de la retroaction
INSERT INTO daadi.RetroactionObjectif (id_retroaction, id_objectif)
VALUES (1, 1),
       (1, 2),
       (2, 3),
       (3, 3),
       (4, 5),
       (5, 7),
       (6, 6),
       (6, 8),
       (7, 7),
       (8, 4),
       (9, 2),
       (10, 4),
       (10, 5);


-- Ressource reliee a chaque objectif
INSERT INTO daadi.ObjectifRessource (id_objectif, id_ressource)
VALUES (1, 1),
       (2, 1),
       (2, 3),
       (2, 4),
       (3, 2),
       (3, 3),
       (4, 5),
       (5, 2),
       (5, 5),
       (6, 4),
       (7, 1),
       (7, 4),
       (8, 4);


-- Theme aborde possible
INSERT INTO daadi.Theme (nom)
VALUES ('Pédagogique'),
       ('Technologique'),
       ('Épistémologie');


-- Theme traite dans une ressource
INSERT INTO daadi.ThemeRessource (nom, id_ressource)
VALUES ('Pédagogique', 1),
       ('Pédagogique', 2),
       ('Pédagogique', 4),
       ('Pédagogique', 5),
       ('Technologique', 2),
       ('Technologique', 3),
       ('Épistémologie', 2),
       ('Épistémologie', 4),
       ('Épistémologie', 5);


-- Public cible
INSERT INTO daadi.PublicCible (nom)
VALUES ('Chercheurs'),
       ('Enseignants'),
       ('Conseiller(es) pédagogiques/technopédagogiques'),
       ('Étudiant(es)');


-- Public cible traite dans une ressource
INSERT INTO daadi.CibleRessource (nom, id_ressource)
VALUES ('Chercheurs', 1),
       ('Enseignants', 2),
       ('Conseiller(es) pédagogiques/technopédagogiques', 3),
       ('Étudiant(es)', 4),
       ('Chercheurs', 5);


-- Contexte de formation
INSERT INTO daadi.ContexteFormation (nom)
VALUES ('Distanciel 100% asynchrone'),
       ('Distanciel synchrone / asynchrone'),
       ('Alternance présentiel et distanciel')
       ('À déterminer'),
       ('Comodal-Bimodal'),
       ('Présentiel enrichi');


-- Public cible traite dans une ressource
INSERT INTO daadi.ContexteRessource (nom, id_ressource)
VALUES ('Distanciel 100% asynchrone', 1),
       ('Distanciel synchrone / asynchrone', 2),
       ('À déterminer', 3),
       ('Comodal-Bimodal', 4),
       ('Présentiel enrichi', 5);

-- Type de question et les choix de reponses
INSERT INTO daadi.TypeQuestion (type, choix_reponse, ordre)
VALUES ('Fréquence', 'toujours', 1),
       ('Fréquence', 'souvent', 2),
       ('Fréquence', 'occasionnellement', 3),
       ('Fréquence', 'jamais', 4),
       ('Accord', 'totalement en accord', 1),
       ('Accord', 'partiellement en accord', 2),
       ('Accord', 'ni en accord ni en desaccord', 3),
       ('Accord', 'partiellement en desaccord', 4),
       ('Accord', 'totalement en desaccord', 5);

-- Dossier
INSERT INTO daadi.Dossier (id_dossier)
VALUES (1),
       (2),
       (3),
       (4),
       (5),
       (6);

-- Resource appartenant a un certain dossier
INSERT INTO daadi.DossierRessource(id_ressource, id_dossier, ordre)
VALUES (1, 1, 1),
       (1, 2, 1),
       (1, 5, 1),
       (2, 1, 2),
       (2, 4, 1),
       (3, 2, 2),
       (3, 3, 1),
       (3, 5, 2),
       (3, 6, 1),
       (4, 1, 3),
       (4, 4, 2),
       (4, 6, 2),
       (5, 1, 4),
       (5, 3, 2),
       (5, 6, 3);