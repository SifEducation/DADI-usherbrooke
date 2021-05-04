-- 1  Ressource
CREATE TABLE IF NOT EXISTS daadi.Ressource
(
    id_ressource  SERIAL,
    code          VARCHAR(50)      NOT NULL,
    titre         VARCHAR(255)     NOT NULL,
    sous_titre    VARCHAR(255)     NOT NULL,
    format        daadi.type_format,
    chemin        VARCHAR(255)     NOT NULL,
    description   TEXT             NOT NULL,
    type_licence  daadi.dtype_licence,
    temps_investi daadi.type_temps NOT NULL,

    CONSTRAINT cp0_Ressource PRIMARY KEY (id_ressource),
    CONSTRAINT cu0_Ressource UNIQUE (code),
    CONSTRAINT cu1_Ressource UNIQUE (titre)
);


-- 2 Statistique sur la ressource
CREATE TABLE IF NOT EXISTS daadi.StatRessource
(
    id_ressource INTEGER NOT NULL,
    nb_reference INTEGER NOT NULL,
    nb_clique    INTEGER NOT NULL,

    CONSTRAINT cp0_StatRessource PRIMARY KEY (id_ressource),
    CONSTRAINT cr0_StatRessource FOREIGN KEY (id_ressource) REFERENCES daadi.Ressource (id_ressource),
    CONSTRAINT cc0_StatRessource_nb_ref_positif CHECK (nb_reference >= 0),
    CONSTRAINT cc0_StatRessource_nb_cl_positif CHECK (nb_clique >= 0)
);

-- 3 Etiquette
CREATE TABLE IF NOT EXISTS daadi.Etiquette
(
    nom VARCHAR(255) NOT NULL,

    CONSTRAINT cp0_Etiquette PRIMARY KEY (nom)
);


-- 4 Relation entre l'etiquette et les ressources
CREATE TABLE IF NOT EXISTS daadi.EtiquetteRessource
(
    nom          VARCHAR(255) NOT NULL,
    id_ressource INTEGER      NOT NULL,

    CONSTRAINT cp0_Rel_Etiquette_Ressource PRIMARY KEY (nom, id_ressource),
    CONSTRAINT cr0_Rel_Etiquette_Ressource FOREIGN KEY (nom) REFERENCES daadi.Etiquette (nom),
    CONSTRAINT cr1_Rel_Etiquette_Ressource FOREIGN KEY (id_ressource) REFERENCES daadi.Ressource (id_ressource)
);


-- 5 Utilisateur
CREATE TABLE IF NOT EXISTS daadi.Utilisateur
(
    id_utilisateur SERIAL,
    email          VARCHAR(255) NOT NULL,
    mdp_token      VARCHAR(255) NOT NULL,

    CONSTRAINT cp0_Utilisateur PRIMARY KEY (id_utilisateur),
    CONSTRAINT cc1_Utilisateur UNIQUE (email)
);


-- 6 Ressource enregistree
CREATE TABLE IF NOT EXISTS daadi.RessourceEnregistre
(
    id_utilisateur INTEGER NOT NULL,
    id_ressource   INTEGER NOT NULL,

    CONSTRAINT cp0_Rel_Ressource_Enregistre PRIMARY KEY (id_utilisateur, id_ressource),
    CONSTRAINT cr0_Rel_Ressource_Enregistre FOREIGN KEY (id_utilisateur) REFERENCES daadi.Utilisateur (id_utilisateur),
    CONSTRAINT cr1_Rel_Ressource_Enregistre FOREIGN KEY (id_ressource) REFERENCES daadi.Ressource (id_ressource)
);


-- 7 Etablissement
CREATE TABLE IF NOT EXISTS daadi.Etablissement
(
    etablissement VARCHAR(255) NOT NULL,

    CONSTRAINT cp0_Etablissement PRIMARY KEY (etablissement)
);


-- 8 Etablissement ou frequente l'utilisateur
CREATE TABLE IF NOT EXISTS daadi.EtablissementUtilisateur
(
    etablissement  VARCHAR(255) NOT NULL,
    id_utilisateur INTEGER      NOT NULL,

    CONSTRAINT cp0_Rel_Etablissement_User PRIMARY KEY (id_utilisateur, etablissement),
    CONSTRAINT cr0_Rel_Etablissement_User FOREIGN KEY (id_utilisateur) REFERENCES daadi.Utilisateur (id_utilisateur),
    CONSTRAINT cr1_Rel_Etablissement_User FOREIGN KEY (etablissement) REFERENCES daadi.Etablissement (etablissement)
);

-- 9 Questionnaire
CREATE TABLE IF NOT EXISTS daadi.Questionnaire
(
    id_questionnaire SERIAL,
    code             VARCHAR(50)   NOT NULL,
    description      TEXT          NOT NULL,
    temps_estime     NUMERIC(3, 1) NOT NULL,

    CONSTRAINT cp0_Questionnaire PRIMARY KEY (id_questionnaire),
    CONSTRAINT cu0_QuestionnaireUnique UNIQUE (code),
    CONSTRAINT cc0_Questionnaire_temps_positif CHECK (temps_estime >= 0)
);

-- 10 Sous questionnaire
CREATE TABLE IF NOT EXISTS daadi.SousQuestionnaire
(
    id_sous_questionnaire SERIAL,
    id_questionnaire      INTEGER     NOT NULL,
    code                  VARCHAR(50) NOT NULL,
    description           TEXT        NOT NULL,
    niveau                INTEGER     NOT NULL,

    CONSTRAINT cp0_SousQuestionnaire PRIMARY KEY (id_sous_questionnaire),
    CONSTRAINT cu0_SousQuestionnaireUnique UNIQUE (code),
    CONSTRAINT cr0_SousQuestionnaire FOREIGN KEY (id_questionnaire) REFERENCES daadi.Questionnaire (id_questionnaire)
);

-- 11 Question
CREATE TABLE IF NOT EXISTS daadi.Question
(
    id_question           SERIAL,
    id_sous_questionnaire INTEGER     NOT NULL,
    code                  VARCHAR(50) NOT NULL,
    description           TEXT        NOT NULL,
    type                  daadi.type_question,

    CONSTRAINT cp0_Question PRIMARY KEY (id_question),
    CONSTRAINT cu0_QuestionUnique UNIQUE (code),
    CONSTRAINT cr0_Question FOREIGN KEY (id_sous_questionnaire) REFERENCES daadi.SousQuestionnaire (id_sous_questionnaire)
);

-- 12 Sous Question
CREATE TABLE IF NOT EXISTS daadi.SousQuestion
(
    id_sous_question SERIAL,
    id_question      INTEGER     NOT NULL,
    code             VARCHAR(50) NOT NULL,
    description      TEXT        NOT NULL,

    CONSTRAINT cp0_SousQuestion PRIMARY KEY (id_sous_question),
    CONSTRAINT cu0_SousQuestionUnique UNIQUE (code),
    CONSTRAINT cr0_SousQuestion FOREIGN KEY (id_question) REFERENCES daadi.Question (id_question)
);


-- 13 Composante
CREATE TABLE IF NOT EXISTS daadi.Composante
(
    nom VARCHAR(255) NOT NULL,

    CONSTRAINT cp0_Composante PRIMARY KEY (nom)
);


-- 14 Composante cible par le sous questionnaire
CREATE TABLE IF NOT EXISTS daadi.ComposanteCible
(
    nom                   VARCHAR(255) NOT NULL,
    id_sous_questionnaire INTEGER      NOT NULL,

    CONSTRAINT cp0_Rel_Composante_Cible PRIMARY KEY (nom, id_sous_questionnaire),
    CONSTRAINT cr0_Rel_Composante_Cible FOREIGN KEY (id_sous_questionnaire) REFERENCES daadi.SousQuestionnaire (id_sous_questionnaire),
    CONSTRAINT cr1_Rel_Composante_Cible FOREIGN KEY (nom) REFERENCES daadi.Composante (nom)
);


-- 15 Reponse donnee par l'utilisateur
CREATE TABLE IF NOT EXISTS daadi.ReponseUtilisateur
(
    id_sous_question INTEGER NOT NULL,
    id_utilisateur   INTEGER NOT NULL,
    reponse          INTEGER NOT NULL, --  VARCHAR VS INTEGER, pas prioritaire

    CONSTRAINT cp0_Rel_Reponse_Utilisateur PRIMARY KEY (id_sous_question, id_utilisateur),
    CONSTRAINT cr0_Rel_Reponse_Utilisateur FOREIGN KEY (id_sous_question) REFERENCES daadi.SousQuestion (id_sous_question),
    CONSTRAINT cr1_Rel_Reponse_Utilisateur FOREIGN KEY (id_utilisateur) REFERENCES daadi.Utilisateur (id_utilisateur)
);


-- 16 Contraintes
CREATE TABLE IF NOT EXISTS daadi.Contrainte
(
    id_contrainte SERIAL,

    CONSTRAINT cp0_Contrainte PRIMARY KEY (id_contrainte)
);


-- 17 Contrainte ponderee
CREATE TABLE IF NOT EXISTS daadi.ContraintePondere
(
    id_contrainte  INTEGER NOT NULL,
    min_contrainte INTEGER NOT NULL,
    max_contrainte INTEGER NOT NULL,

    CONSTRAINT cp0_H_Contrainte_Pondere PRIMARY KEY (id_contrainte),
    CONSTRAINT cr0_H_Contrainte_Pondere FOREIGN KEY (id_contrainte) REFERENCES daadi.Contrainte (id_contrainte),
    CONSTRAINT cc1_H_Contrainte_Pondere_max_positif CHECK (max_contrainte >= 0),
    CONSTRAINT cc2_H_Contrainte_Pondere_max_sup_min CHECK (max_contrainte >= min_contrainte)
);


-- 18 Contrainte logique
CREATE TABLE IF NOT EXISTS daadi.ContrainteLogique
(
    id_contrainte    INTEGER      NOT NULL,
    id_sous_question INTEGER      NOT NULL,
    reponse          VARCHAR(255) NOT NULL,

    CONSTRAINT cp0_H_Contrainte_Logique PRIMARY KEY (id_contrainte, id_sous_question, reponse),
    CONSTRAINT cr0_H_Contrainte_Logique FOREIGN KEY (id_contrainte) REFERENCES daadi.Contrainte (id_contrainte),
    CONSTRAINT cr1_H_Contrainte_Logique FOREIGN KEY (id_sous_question) REFERENCES daadi.SousQuestion (id_sous_question)
);

-- 19 Retroaction
CREATE TABLE IF NOT EXISTS daadi.Retroaction
(
    id_retroaction SERIAL,
    id_contrainte  INTEGER NOT NULL,
    description    TEXT    NOT NULL,

    CONSTRAINT cp0_Retroaction PRIMARY KEY (id_retroaction),
    CONSTRAINT cr0_Retroaction FOREIGN KEY (id_contrainte) REFERENCES daadi.Contrainte (id_contrainte)
);


-- 20 Objectif des rétroactions
CREATE TABLE IF NOT EXISTS daadi.Objectif
(
    id_objectif SERIAL NOT NULL,
    message     TEXT   NOT NULL,

    CONSTRAINT cp0_Objectif PRIMARY KEY (id_objectif)
);

-- 21 Theme aborde
CREATE TABLE IF NOT EXISTS daadi.Theme
(
    nom VARCHAR(255) NOT NULL,

    CONSTRAINT cp0_Theme PRIMARY KEY (nom)
);

-- 22 Theme liee aux ressources
CREATE TABLE IF NOT EXISTS daadi.ThemeRessource
(
    nom          VARCHAR(255) NOT NULL,
    id_ressource INTEGER      NOT NULL,

    CONSTRAINT cp0_ThemeRessource PRIMARY KEY (nom, id_ressource),
    CONSTRAINT cr0_ThemeRessource FOREIGN KEY (nom) REFERENCES daadi.Theme (nom),
    CONSTRAINT cr1_ThemeRessource FOREIGN KEY (id_ressource) REFERENCES daadi.Ressource (id_ressource)
);


-- 23 Conttexte de formation
CREATE TABLE IF NOT EXISTS daadi.ContexteFormation
(
    nom VARCHAR(255) NOT NULL,

    CONSTRAINT cp0_ContexteFormation PRIMARY KEY (nom)
);

-- 24 Contexte de formation lie aux ressources
CREATE TABLE IF NOT EXISTS daadi.ContexteRessource
(
    nom          VARCHAR(255) NOT NULL,
    id_ressource INTEGER      NOT NULL,

    CONSTRAINT cp0_ContexteRessource PRIMARY KEY (nom, id_ressource),
    CONSTRAINT cr0_ContexteRessource FOREIGN KEY (nom) REFERENCES daadi.ContexteFormation (nom),
    CONSTRAINT cr1_ContexteRessource FOREIGN KEY (id_ressource) REFERENCES daadi.Ressource (id_ressource)
);


-- 25 Public cible
CREATE TABLE IF NOT EXISTS daadi.PublicCible
(
    nom VARCHAR(255) NOT NULL,

    CONSTRAINT cp0_PublicCible PRIMARY KEY (nom)
);

-- 26 Publique cible liee aux ressources
CREATE TABLE IF NOT EXISTS daadi.CibleRessource
(
    nom          VARCHAR(255) NOT NULL,
    id_ressource INTEGER      NOT NULL,

    CONSTRAINT cp0_CibleRessource PRIMARY KEY (nom, id_ressource),
    CONSTRAINT cr0_CibleRessource FOREIGN KEY (nom) REFERENCES daadi.PublicCible (nom),
    CONSTRAINT cr1_CibleRessource FOREIGN KEY (id_ressource) REFERENCES daadi.Ressource (id_ressource)
);

-- 27 Objectif de la ressource
CREATE TABLE IF NOT EXISTS daadi.ObjectifRessource
(
    id_objectif  INTEGER NOT NULL,
    id_ressource INTEGER NOT NULL,

    CONSTRAINT cp0_ObjectifRessource PRIMARY KEY (id_objectif, id_ressource),
    CONSTRAINT cr0_ObjectifRessource FOREIGN KEY (id_objectif) REFERENCES daadi.Objectif (id_objectif),
    CONSTRAINT cr1_ObjectifRessource FOREIGN KEY (id_ressource) REFERENCES daadi.Ressource (id_ressource)
);


-- 28 Lien entre la sous question et la contrainte
CREATE TABLE IF NOT EXISTS daadi.PondereSousQuestion
(
    id_contrainte        INTEGER NOT NULL,
    id_sous_question     INTEGER NOT NULL,
    ponderation_inversee BOOLEAN NOT NULL,

    CONSTRAINT cp0_PondereSousQuestion PRIMARY KEY (id_contrainte, id_sous_question),
    CONSTRAINT cr0_PondereSousQuestion FOREIGN KEY (id_contrainte) REFERENCES daadi.ContraintePondere (id_contrainte),
    CONSTRAINT cr1_PondereSousQuestion FOREIGN KEY (id_sous_question) REFERENCES daadi.SousQuestion (id_sous_question)
);

-- 29 Lien entre la sous question et la contrainte
CREATE TABLE IF NOT EXISTS daadi.Dossier
(
    id_dossier INTEGER NOT NULL,

    CONSTRAINT cp0_Dossier PRIMARY KEY (id_dossier)
);

-- 30 Lien entre la sous question et la contrainte
CREATE TABLE IF NOT EXISTS daadi.DossierRessource
(
    id_ressource INTEGER NOT NULL,
    id_dossier   INTEGER NOT NULL,
    ordre        INTEGER NOT NULL,

    CONSTRAINT cp0_DossierRessource PRIMARY KEY (id_ressource, id_dossier),
    CONSTRAINT cu0_DossierRessource UNIQUE (id_dossier, ordre),
    CONSTRAINT cr0_DossierRessource FOREIGN KEY (id_dossier) REFERENCES daadi.Dossier (id_dossier),
    CONSTRAINT cr1_DossierRessource FOREIGN KEY (id_ressource) REFERENCES daadi.Ressource (id_ressource)
);

-- 31 Lien entre les retractions et les objectifs
CREATE TABLE IF NOT EXISTS daadi.RetroactionObjectif
(
    id_retroaction INTEGER NOT NULL,
    id_objectif    INTEGER NOT NULL,

    CONSTRAINT cp0_RetroactionObjectif PRIMARY KEY (id_retroaction, id_objectif),
    CONSTRAINT cr0_RetroactionObjectif FOREIGN KEY (id_retroaction) REFERENCES daadi.Retroaction (id_retroaction),
    CONSTRAINT cr1_RetroactionObjectif FOREIGN KEY (id_objectif) REFERENCES daadi.Objectif (id_objectif)
);

-- 32 Type de la question
CREATE TABLE IF NOT EXISTS daadi.TypeQuestion
(
    type          daadi.type_question,
    choix_reponse VARCHAR(255) NOT NULL,
    ordre         INTEGER      NOT NULL,

    CONSTRAINT cp0_TypeRessource PRIMARY KEY (type, choix_reponse)
);