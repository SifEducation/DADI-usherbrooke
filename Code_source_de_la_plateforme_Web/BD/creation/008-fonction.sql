/*************************************************
* Fonction d'affichage de ressources
**************************************************/

--------------------------------------------------------------------------
-- Fonction pour recuperer les informations sur une ressource
--------------------------------------------------------------------------
CREATE OR REPLACE FUNCTION daadi.AfficherRessource(
    nom_ressource VARCHAR(50)
)
    RETURNS TABLE
            (
                id_ressource   INTEGER,
                code           VARCHAR(50),
                titre          VARCHAR(50),
                sous_titre     VARCHAR(150),
                format         VARCHAR,
                chemin         VARCHAR(150),
                description    TEXT,
                type_licence   VARCHAR,
                temps_investi  VARCHAR,
                themes         VARCHAR[],
                contextes      VARCHAR[],
                etiquettes     VARCHAR[],
                publics_cibles VARCHAR[],
                nb_clique      INTEGER,
                nb_reference   INTEGER
            )
AS
$$
BEGIN
    return query
        SELECT *
        FROM daadi.vw_Ressource
        WHERE daadi.vw_Ressource.code = nom_ressource;
END;
$$ LANGUAGE plpgsql;

--------------------------------------------------------------------------
-- Fonction pour recuperer les etiquettes d'une ressource
--------------------------------------------------------------------------
CREATE OR REPLACE FUNCTION daadi.AfficherEtiquetteRessource(
    _id_ressource INTEGER
)
    RETURNS TABLE
            (
                id_ressource  INTEGER,
                nom_etiquette VARCHAR(50)
            )
AS
$$
BEGIN
    return query
        SELECT daadi.etiquetteressource.id_ressource, daadi.etiquetteressource.nom
        FROM daadi.etiquetteressource
        WHERE daadi.etiquetteressource.id_ressource = _id_ressource;
END;
$$ LANGUAGE plpgsql;

--------------------------------------------------------------------------
-- Fonction pour recuperer les themes d'une ressource
--------------------------------------------------------------------------
CREATE OR REPLACE FUNCTION daadi.AfficherThemeRessource(
    id_res INTEGER
)
    RETURNS TABLE
            (
                id_ressource  INTEGER,
                nom_etiquette VARCHAR(50)
            )
AS
$$
BEGIN
    return query
        SELECT daadi.themeressource.id_ressource, daadi.themeressource.nom
        FROM daadi.themeressource
        WHERE daadi.themeressource.id_ressource = id_res;
END;
$$ LANGUAGE plpgsql;

--------------------------------------------------------------------------
-- Fonction pour recuperer les publics cibles d'une ressource
--------------------------------------------------------------------------
CREATE OR REPLACE FUNCTION daadi.AfficherPublicCibleRessource(
    _id_ressource INTEGER
)
    RETURNS TABLE
            (
                id_ressource  INTEGER,
                nom_etiquette VARCHAR(50)
            )
AS
$$
BEGIN
    return query
        SELECT daadi.cibleressource.id_ressource, daadi.cibleressource.nom
        FROM daadi.cibleressource
        WHERE daadi.cibleressource.id_ressource = _id_ressource;
END;
$$ LANGUAGE plpgsql;

--------------------------------------------------------------------------
-- Fonction pour recuperer les contextes de formation d'une ressource
--------------------------------------------------------------------------
CREATE OR REPLACE FUNCTION daadi.AfficherContexteFormationRessource(
    _id_ressource INTEGER
)
    RETURNS TABLE
            (
                id_ressource  INTEGER,
                nom_etiquette VARCHAR(50)
            )
AS
$$
BEGIN
    return query
        SELECT daadi.contexteressource.id_ressource, daadi.contexteressource.nom
        FROM daadi.contexteressource
        WHERE daadi.contexteressource.id_ressource = _id_ressource;
END;
$$ LANGUAGE plpgsql;

--------------------------------------------------------------------------
-- Fonction pour recuperer les ressources d'un dossier
--------------------------------------------------------------------------
CREATE OR REPLACE FUNCTION daadi.AfficherDossierRessource(
    _id_dossier INTEGER
)
    RETURNS TABLE
            (
                id_ressource   INTEGER,
                nom            VARCHAR(50),
                sous_titre     VARCHAR(150),
                format         VARCHAR,
                chemin         VARCHAR(150),
                description    TEXT,
                type_licence   VARCHAR,
                temps_investi  VARCHAR,
                themes         VARCHAR[],
                contextes      VARCHAR[],
                etiquettes     VARCHAR[],
                publics_cibles VARCHAR[],
                nb_clique      INTEGER,
                nb_reference   INTEGER,
                dossier        INTEGER
            )
AS
$$
BEGIN
    return query
        SELECT res.id_ressource,
               res.titre,
               res.sous_titre,
               res.format,
               res.chemin,
               res.description,
               res.type_licence,
               res.temps_investi,
               res.themes,
               res.contextes,
               res.etiquettes,
               res.publics_cibles,
               res.nb_clique,
               res.nb_reference,
               daadi.DossierRessource.id_dossier AS nom_dossier
        FROM daadi.DossierRessource
                 JOIN daadi.vw_Ressource res USING (id_ressource)
        WHERE daadi.DossierRessource.id_dossier = _id_dossier;
END;
$$ LANGUAGE plpgsql;

/*************************************************
* Fonction d'affichage de questionnaires
**************************************************/

--------------------------------------------------------------------------
-- Fonction pour recuperer un questionnaire a partir de son nom
--------------------------------------------------------------------------
CREATE OR REPLACE FUNCTION daadi.AfficherQuestionnaire(
    nom_questionnaire VARCHAR(50)
)
    RETURNS TABLE
            (
                id           INTEGER,
                nom          VARCHAR(50),
                description  TEXT,
                temps_estime NUMERIC(3, 1)
            )
AS
$$
BEGIN
    return query
        SELECT *
        FROM daadi.questionnaire
        WHERE daadi.questionnaire.code = nom_questionnaire;
END;
$$ LANGUAGE plpgsql;

--------------------------------------------------------------------------
-- Fonction pour recuperer un sous-questionnaire a partir de son nom
--------------------------------------------------------------------------
CREATE OR REPLACE FUNCTION daadi.AfficherSousQuestionnaire(
    nom_sous_questionnaire VARCHAR(50)
)
    RETURNS TABLE
            (
                id                      INTEGER,
                id_questionnaire_parent INTEGER,
                nom                     VARCHAR(50),
                description             TEXT,
                niveau                  INTEGER,
                composante              VARCHAR(50)[]
            )
AS
$$
BEGIN
    return query
        SELECT daadi.sousquestionnaire.id_sous_questionnaire,
               daadi.sousquestionnaire.id_questionnaire,
               daadi.sousquestionnaire.code,
               daadi.sousquestionnaire.description,
               daadi.sousquestionnaire.niveau,
               ARRAY_AGG(daadi.composantecible.nom)
        FROM daadi.sousquestionnaire
                 JOIN daadi.composantecible USING (id_sous_questionnaire)
        WHERE daadi.sousquestionnaire.code = nom_sous_questionnaire
        GROUP BY (daadi.sousquestionnaire.id_sous_questionnaire, daadi.sousquestionnaire.id_questionnaire,
                  daadi.sousquestionnaire.code, daadi.sousquestionnaire.description,
                  daadi.sousquestionnaire.niveau);
END;
$$ LANGUAGE plpgsql;

--------------------------------------------------------------------------
-- Fonction pour recuperer une question a partir de son nom
--------------------------------------------------------------------------
CREATE OR REPLACE FUNCTION daadi.AfficherQuestion(
    nom_question VARCHAR(50)
)
    RETURNS TABLE
            (
                id                           INTEGER,
                id_sous_questionnaire_parent INTEGER,
                nom                          VARCHAR(50),
                description                  TEXT,
                type                         daadi.type_question,
                choix_reponse                VARCHAR(50)[]
            )
AS
$$
BEGIN
    return query
        SELECT daadi.question.id_question,
               daadi.question.id_sous_questionnaire,
               daadi.question.code,
               daadi.question.description,
               daadi.question.type,
               ARRAY_AGG(daadi.typequestion.choix_reponse) AS choix_reponses
        FROM daadi.question
                 JOIN daadi.typequestion USING (type)
        WHERE daadi.question.code = nom_question
        GROUP BY (daadi.question.id_question,
                  daadi.question.id_sous_questionnaire,
                  daadi.question.code,
                  daadi.question.description,
                  daadi.question.type);
END;
$$ LANGUAGE plpgsql;

--------------------------------------------------------------------------
-- Fonction pour recuperer une sous-question a partir de son nom
--------------------------------------------------------------------------
CREATE OR REPLACE FUNCTION daadi.AfficherSousQuestion(
    nom_sous_question VARCHAR(50)
)
    RETURNS TABLE
            (
                id                 INTEGER,
                id_question_parent INTEGER,
                nom                VARCHAR(50),
                description        TEXT
            )
AS
$$
BEGIN
    return query
        SELECT *
        FROM daadi.sousquestion
        WHERE daadi.sousquestion.code = nom_sous_question;
END;
$$ LANGUAGE plpgsql;

--------------------------------------------------------------------------
-- Fonction pour recuperer un sous-questionnaire enfants a partir de son nom du questionnaire parent
--------------------------------------------------------------------------
CREATE OR REPLACE FUNCTION daadi.AfficherSousQuestionnaireEnfants(
    nom_questionnaire VARCHAR(50)
)
    RETURNS TABLE
            (
                id                      INTEGER,
                id_questionnaire_parent INTEGER,
                nom                     VARCHAR(50),
                description             TEXT,
                niveau                  INTEGER,
                composante              VARCHAR(50)[]
            )
AS
$$
BEGIN
    return query
        SELECT daadi.sousquestionnaire.id_sous_questionnaire,
               daadi.sousquestionnaire.id_questionnaire,
               daadi.sousquestionnaire.code,
               daadi.sousquestionnaire.description,
               daadi.sousquestionnaire.niveau,
               ARRAY_AGG(daadi.composantecible.nom)
        FROM daadi.sousquestionnaire
                 JOIN daadi.composantecible USING (id_sous_questionnaire)
                 JOIN daadi.questionnaire USING (id_questionnaire)
        WHERE daadi.questionnaire.code = nom_questionnaire
        GROUP BY (daadi.sousquestionnaire.id_sous_questionnaire, daadi.sousquestionnaire.id_questionnaire,
                  daadi.sousquestionnaire.code, daadi.sousquestionnaire.description,
                  daadi.sousquestionnaire.niveau);
END;
$$ LANGUAGE plpgsql;

--------------------------------------------------------------------------
-- Fonction pour recuperer les questions enfants a partir du nom du sous-questionnaire parent
--------------------------------------------------------------------------
CREATE OR REPLACE FUNCTION daadi.AfficherQuestionEnfants(
    nom_sous_questionnaire VARCHAR(50)
)
    RETURNS TABLE
            (
                id                           INTEGER,
                id_sous_questionnaire_parent INTEGER,
                nom                          VARCHAR(50),
                description                  TEXT,
                type                         daadi.type_question,
                choix_reponse                VARCHAR(50)[]
            )
AS
$$
BEGIN
    return query
        SELECT daadi.question.id_question,
               daadi.question.id_sous_questionnaire,
               daadi.question.code,
               daadi.question.description,
               daadi.question.type,
               ARRAY_AGG(daadi.typequestion.choix_reponse) AS choix_reponses
        FROM daadi.question
                 JOIN daadi.sousquestionnaire USING (id_sous_questionnaire)
                 JOIN daadi.typequestion USING (type)
        WHERE daadi.sousquestionnaire.code = nom_sous_questionnaire
        GROUP BY (daadi.question.id_question,
                  daadi.question.id_sous_questionnaire,
                  daadi.question.code,
                  daadi.question.description,
                  daadi.question.type);
END;
$$ LANGUAGE plpgsql;

--------------------------------------------------------------------------
-- Fonction pour recuperer les sous-question a partir du nom de la question parente
--------------------------------------------------------------------------
CREATE OR REPLACE FUNCTION daadi.AfficherSousQuestionEnfants(
    nom_question VARCHAR(50)
)
    RETURNS TABLE
            (
                id                 INTEGER,
                id_question_parent INTEGER,
                nom                VARCHAR(50),
                description        TEXT
            )
AS
$$
BEGIN
    return query
        SELECT daadi.sousquestion.id_sous_question,
               daadi.sousquestion.id_question,
               daadi.sousquestion.code,
               daadi.sousquestion.description
        FROM daadi.sousquestion
                 JOIN daadi.question USING (id_question)
        WHERE daadi.question.code = nom_question;
END;
$$ LANGUAGE plpgsql;

--------------------------------------------------------------------------
-- Afficher toutes les contraintes ponderees en rapport avec une question
--------------------------------------------------------------------------
CREATE OR REPLACE FUNCTION daadi.AfficherContraintePondereeQuestion(
    nom_question VARCHAR(50)
)
    RETURNS TABLE
            (
                _id_contrainte          INTEGER,
                _id_question            INTEGER,
                _min_contrainte         INTEGER,
                _max_contrainte         INTEGER,
                _id_sous_questions      INTEGER[],
                _ponderations_inversees BOOLEAN[],
                _nom_question           VARCHAR
            )
AS
$$
BEGIN
    return query
        SELECT cp.id_contrainte,
               q.id_question,
               cp.min_contrainte,
               cp.max_contrainte,
               ARRAY_AGG(sq.id_sous_question)      AS id_sous_questions,
               ARRAY_AGG(psq.ponderation_inversee) AS ponderations_inversees,
               q.code
        FROM daadi.Contrainte
                 JOIN daadi.ContraintePondere cp USING (id_contrainte)
                 JOIN daadi.ponderesousquestion psq USING (id_contrainte)
                 JOIN daadi.SousQuestion sq USING (id_sous_question)
                 JOIN daadi.question q USING (id_question)
        WHERE q.code = nom_question
        GROUP BY (cp.id_contrainte, q.id_question, q.code, cp.min_contrainte, cp.max_contrainte);
END;
$$ LANGUAGE plpgsql;

--------------------------------------------------------------------------
-- Afficher toutes les contraintes logiques en rapport avec une question
--------------------------------------------------------------------------
CREATE OR REPLACE FUNCTION daadi.AfficherContrainteLogiqueQuestion(
    nom_question VARCHAR(50)
)
    RETURNS TABLE
            (
                _id_contrainte    INTEGER,
                _id_sous_question INTEGER,
                _nom              VARCHAR(20),
                _reponses         VARCHAR(20)[]
            )
AS
$$
BEGIN
    return query
        SELECT id_contrainte, id_sous_question, sq.code, ARRAY_AGG(reponse) AS reponses
        FROM daadi.Contrainte
                 JOIN daadi.ContrainteLogique USING (id_contrainte)
                 JOIN daadi.SousQuestion sq USING (id_sous_question)
                 JOIN daadi.Question USING (id_question)
        WHERE Question.code = nom_question
        GROUP BY (id_contrainte, id_sous_question, sq.code);
END;
$$ LANGUAGE plpgsql;

--------------------------------------------------------------------------
-- Fonction pour recuperer la retroaction liee a une contrainte
--------------------------------------------------------------------------
CREATE OR REPLACE FUNCTION daadi.AfficherRetroactionContrainte(
    _id_contrainte INTEGER
)
    RETURNS TABLE
            (
                id_retroaction INTEGER,
                id_contrainte  INTEGER,
                description    TEXT,
                id_objectifs   INTEGER[]
            )
AS
$$
BEGIN
    return query
        SELECT r.id_retroaction, r.id_contrainte, r.description, ARRAY_AGG(ro.id_objectif) AS id_objectifs
        FROM daadi.retroaction r
                 JOIN daadi.retroactionobjectif ro USING (id_retroaction)
        WHERE r.id_contrainte = _id_contrainte
        GROUP BY (r.id_retroaction, r.id_contrainte, r.description);
END;
$$ LANGUAGE plpgsql;


--------------------------------------------------------------------------
-- Fonction pour recuperer les ressources liees a un objectif
--------------------------------------------------------------------------
CREATE OR REPLACE FUNCTION daadi.AfficherObjectifRessource(
    _id_objectif INTEGER
)
    RETURNS TABLE
            (
                id_objectif  INTEGER,
                message      TEXT,
                id_ressource INTEGER[]
            )
AS
$$
BEGIN
    return query
        SELECT o.id_objectif, o.message, ARRAY_AGG(ores.id_ressource) AS id_ressources
        FROM daadi.objectif o
                 JOIN daadi.objectifressource ores USING (id_objectif)
        WHERE o.id_objectif = _id_objectif
        GROUP BY (o.id_objectif, o.message);
END;
$$ LANGUAGE plpgsql;

--------------------------------------------------------------------------
-- Fonction pour voir les étiquettes de la base de donnees
--------------------------------------------------------------------------
CREATE OR REPLACE FUNCTION daadi.AfficherEtiquettes()
    RETURNS TABLE
            (
                nom VARCHAR(255)
            )
AS
$$
BEGIN
    return query
        SELECT * FROM daadi.etiquette;
END;
$$ LANGUAGE plpgsql;

