---------------------------------------
-- Procedure d'ajout d'une ressource
---------------------------------------
CREATE OR REPLACE PROCEDURE daadi.AjouterRessource("_code_ressource" VARCHAR(50),
                                                   "_titre" VARCHAR(255),
                                                   "_sous_titre" VARCHAR(255),
                                                   "_description" TEXT,
                                                   "_format" daadi.type_format,
                                                   "_temps_investi" daadi.type_temps,
                                                   "_type_licence" daadi.dtype_licence,
                                                   "_chemin" VARCHAR(255))
    language plpgsql
as
$$
BEGIN
    INSERT INTO daadi.Ressource (code, titre, sous_titre, description, format, temps_investi, type_licence, chemin)
    VALUES (_code_ressource, _titre, _sous_titre, _description, _format, _temps_investi, _type_licence, _chemin);
END;
$$;


--------------------------------------------------
-- Procedure d'ajout d'un theme a une ressource --
--------------------------------------------------
CREATE OR REPLACE PROCEDURE daadi.AjouterThemeRessource("_id_ressource" INTEGER,
                                                       "_nom" VARCHAR(255))
    language plpgsql
as
$$

BEGIN
    INSERT INTO daadi.ThemeRessource(id_ressource, nom)
    VALUES (_id_ressource, _nom);
END;
$$;

-------------------------------------------------------
--          Procedure d'ajout d'une etiquette        --
-------------------------------------------------------

CREATE OR REPLACE PROCEDURE daadi.AjouterEtiquette("_nom" VARCHAR(255))
    language plpgsql
as
$$
BEGIN
    INSERT INTO daadi.Etiquette(nom)
    VALUES (_nom);
END;
$$;


-------------------------------------------------------
-- Procedure d'ajout d'une étiquette a une ressource --
-------------------------------------------------------
CREATE OR REPLACE PROCEDURE daadi.AjouterEtiquetteRessource("_id_ressource" INTEGER,
                                                       "_nom" VARCHAR(255))
    language plpgsql
as
$$

BEGIN
    INSERT INTO daadi.EtiquetteRessource (id_ressource, nom)
    VALUES (_id_ressource, _nom);
END;
$$;


-----------------------------------------------------
-- Procedure d'ajout d'un contexte a une ressource --
-----------------------------------------------------
CREATE OR REPLACE PROCEDURE daadi.AjouterContexteRessource("_id_ressource" INTEGER,
                                                       "_nom" VARCHAR(255))
    language plpgsql
as
$$

BEGIN
    INSERT INTO daadi.ContexteRessource(id_ressource, nom)
    VALUES (_id_ressource, _nom);
END;
$$;


-----------------------------------------------------
-- Procedure d'ajout d'un public cible a une ressource --
-----------------------------------------------------
CREATE OR REPLACE PROCEDURE daadi.AjouterCibleRessource("_id_ressource" INTEGER,
                                                       "_nom" VARCHAR(255))
    language plpgsql
as
$$

BEGIN
    INSERT INTO daadi.CibleRessource(id_ressource, nom)
    VALUES (_id_ressource, _nom);
END;
$$;

-----------------------------------------------------
-- Procedure d'ajout d'une ressource a un dossier  --
-----------------------------------------------------
CREATE OR REPLACE PROCEDURE daadi.AjouterDossierRessource("_id_ressource" INTEGER,
                                                       "_id_dossier" INTEGER,
													   "_ordre" INTEGER)
    language plpgsql
as
$$

BEGIN
    INSERT INTO daadi.DossierRessource(id_ressource, id_dossier, ordre)
    VALUES (_id_ressource, _id_dossier, _ordre);
END;
$$;


-----------------------------------------------------
-- Procedure d'ajout d'un objectif a une ressource --
-----------------------------------------------------
CREATE OR REPLACE PROCEDURE daadi.AjouterObjectifRessource("_id_ressource" INTEGER,
                                                       "_id_objectif" INTEGER)
    language plpgsql
as
$$

BEGIN
    INSERT INTO daadi.ObjectifRessource(id_ressource, id_objectif)
    VALUES (_id_ressource, _id_objectif);
END;
$$;


------------------------------------------
-- Procedure d'ajout d'un questionnaire --
------------------------------------------
CREATE OR REPLACE PROCEDURE daadi.AjouterQuestionnaire("_code" VARCHAR(50),
                                                       "_description" TEXT,
                                                       "_temps_estime" NUMERIC(3, 1))
    language plpgsql
as
$$

BEGIN
    INSERT INTO daadi.Questionnaire (code, description, temps_estime)
    VALUES (_code, _description, _temps_estime);
END;
$$;


-----------------------------------------------
-- Procedure d'ajout d'un sous questionnaire --
-----------------------------------------------

CREATE OR REPLACE PROCEDURE daadi.AjouterSousQuestionnaire("_id_questionnaire" INTEGER,
                                                           "_code_sous_questionnaire" VARCHAR(50),
                                                           "_description" TEXT,
                                                           "_niveau" INTEGER,
                                                           "_composantes" VARCHAR(255)[])
    language plpgsql
as
$$
DECLARE
    _id_sous_questionnaire INTEGER;
BEGIN
    INSERT INTO daadi.SousQuestionnaire (id_questionnaire, code, description, niveau)
    VALUES (_id_questionnaire, _code_sous_questionnaire, _description, _niveau)
    RETURNING id_sous_questionnaire INTO _id_sous_questionnaire;

    INSERT INTO daadi.ComposanteCible (id_sous_questionnaire, nom)
    SELECT _id_sous_questionnaire, cp.nom_compo
    FROM unnest(_composantes) WITH ORDINALITY cp(nom_compo);

END;
$$;


-------------------------------------
-- Procedure d'ajout d'un question --
-------------------------------------
CREATE OR REPLACE PROCEDURE daadi.AjouterQuestion("_id_sous_questionnaire" INTEGER,
                                                  "_code_question" VARCHAR(255),
                                                  "_description" TEXT,
                                                  "_type" daadi.type_question)
    language plpgsql
as
$$

BEGIN
    INSERT INTO daadi.Question (id_sous_questionnaire, code, description, type)
    VALUES (_id_sous_questionnaire, _code_question, _description, _type);
END;
$$;


-------------------------------------------
-- Procedure d'ajout d'une sous question --
-------------------------------------------
CREATE OR REPLACE PROCEDURE daadi.AjouterSousQuestion("_id_question" INTEGER,
                                                      "_code_sous_question" VARCHAR(50),
                                                      "_description" TEXT)
    language plpgsql
as
$$

BEGIN
    INSERT INTO daadi.SousQuestion (id_question, code, description)
    VALUES (_id_question, _code_sous_question, _description);
END;
$$;


------------------------------------------------------------------
-------                    CONTRAINTE                   ----------
------------------------------------------------------------------

-- Ajouter une nouvelle contrainte logique
CREATE OR REPLACE PROCEDURE daadi.AjouterNouvelleContrainteLogique("_code_sous_question" VARCHAR(50),
                                                                   "_reponses" VARCHAR(255)[])
    language plpgsql
as
$$
DECLARE
    _id_sous_question INTEGER;
    _id_contrainte    INTEGER;
BEGIN
    -- Recherche de l'id de la sous question dont le nom est donne
    SELECT id_sous_question
    INTO _id_sous_question
    FROM daadi.SousQuestion sq
    WHERE sq.code = _code_sous_question;

    -- Ajout de l'id de la contrainte dans Contrainte
    INSERT INTO daadi.contrainte DEFAULT
    VALUES
    RETURNING id_contrainte INTO _id_contrainte;

    -- Insertion de la contrainte logique dans la table Contrainte Logique
    INSERT INTO daadi.ContrainteLogique (id_contrainte, id_sous_question, reponse)
    SELECT _id_contrainte, _id_sous_question, rep.nom_reponse
    FROM unnest(_reponses) WITH ORDINALITY rep(nom_reponse);

END;
$$;


-- Ajouter une nouvelle contrainte ponderee
CREATE OR REPLACE PROCEDURE daadi.AjouterNouvelleContraintePondere("_tab_sous_question" VARCHAR(255)[],
                                                                   "_min_contrainte" INTEGER,
                                                                   "_max_contrainte" INTEGER,
                                                                   "_ponderation_inversee" BOOLEAN [])
    language plpgsql
as
$$
DECLARE
    _id_sous_question INTEGER;
    _id_contrainte    INTEGER;
    _counter          INTEGER;
BEGIN
    SELECT array_length(_tab_sous_question, 1) INTO _counter;
    for counter in 1.._counter
        loop

            -- Ajout de l'id de la contrainte dans Contrainte
            INSERT INTO daadi.Contrainte DEFAULT
            VALUES
            RETURNING id_contrainte INTO _id_contrainte;

            -- Recherche de l'id de la question dont le code est donne
            SELECT id_sous_question
            INTO _id_sous_question
            FROM daadi.SousQuestion sq
            WHERE sq.code = _tab_sous_question[counter];

            -- Insertion de la contrainte ponderee dans la table Contrainte Ponderee
            INSERT INTO daadi.ContraintePondere (id_contrainte, min_contrainte, max_contrainte)
            VALUES (_id_contrainte, _min_contrainte, _max_contrainte);

            INSERT INTO daadi.PondereSousQuestion (id_contrainte, id_sous_question, ponderation_inversee)
            VALUES (_id_contrainte, _id_sous_question, _ponderation_inversee[counter]);

        end loop;

END;
$$;


-- Ajouter nouvelle contrainte voir ligne 41 de proc_interfaces.sql
CREATE OR REPLACE PROCEDURE daadi.AjouterContrainteLogique("_id_contrainte" INTEGER,
                                                           "_code_sous_question" VARCHAR(50),
                                                           "_reponses" VARCHAR(255)[])
    language plpgsql
AS
$$
DECLARE
    _id_sous_question INTEGER;
BEGIN
    SELECT id_sous_question
    INTO _id_sous_question
    FROM daadi.SousQuestion sq
    WHERE sq.code = _code_sous_question;


    INSERT INTO daadi.ContrainteLogique (id_contrainte, id_sous_question, reponse)
    SELECT _id_contrainte, _id_sous_question, rep.nom_reponse
    FROM unnest(_reponses) WITH ORDINALITY rep(nom_reponse);
END;
$$;


--  Ajouter une nouvelle retroaction
CREATE OR REPLACE PROCEDURE daadi.AjouterRetroaction ("_id_contrainte" INTEGER,
													 "_description" TEXT)
language plpgsql
AS
$$
BEGIN
    INSERT INTO daadi.Retroaction (id_contrainte, description)
    VALUES (_id_contrainte, _description);
END;
$$;


-- Ajouter un nouvelle objectif
CREATE OR REPLACE PROCEDURE daadi.AjouterObjectif ("_message" TEXT)
language plpgsql
AS
$$
BEGIN
    INSERT INTO daadi.Objectif (message)
    VALUES (_message);
END;
$$;


-- Ajouter un objectif a une retroaction

CREATE OR REPLACE PROCEDURE daadi.AjouterRetroactionObjectif ("_id_retroaction" INTEGER,
													 "_id_objectif" INTEGER)
language plpgsql
AS
$$
BEGIN
    INSERT INTO daadi.RetroactionObjectif (id_objectif, id_retroaction)
    VALUES (_id_objectif, _id_retroaction);
END;
$$;


----------------------------------------------------------------
---                      UPDATE ZONE                         ---
----------------------------------------------------------------

-- Modifier une ressource
CREATE OR REPLACE PROCEDURE daadi.ModifierRessource("_id_ressource" INTEGER,
                                                    "_code" VARCHAR(50),
                                                    "_titre" VARCHAR(255),
                                                    "_sous_titre" VARCHAR,
                                                    "_format" daadi.type_format,
                                                    "_chemin" VARCHAR(255),
                                                    "_description" TEXT,
                                                    "_type_licence" daadi.dtype_licence,
                                                    "_temps_investi" daadi.type_temps)
    language plpgsql
AS
$$
BEGIN

    UPDATE daadi.Ressource
    SET code          = _code,
        titre         = _titre,
        sous_titre    = _sous_titre,
        format        = _format,
        chemin        = _chemin,
        description   = _description,
        type_licence  = _type_licence,
        temps_investi = _temps_investi

    WHERE id_ressource = _id_ressource;
END;
$$;


-- Modifier un questionnaire
CREATE OR REPLACE PROCEDURE daadi.ModifierQuestionnaire("_id_questionnaire" INTEGER,
                                                        "_code" VARCHAR(50),
                                                        "_description" TEXT,
                                                        "_temps_estime" NUMERIC(3, 1))
    language plpgsql
AS
$$
BEGIN
    UPDATE daadi.Questionnaire
    SET code         = _code,
        description  = _description,
        temps_estime = _temps_estime

    WHERE id_questionnaire = _id_questionnaire;
END;
$$;


-- Modifier SousQuestionnaire
CREATE OR REPLACE PROCEDURE daadi.ModifierSousQuestionnaire("_id_sous_questionnaire" INTEGER,
                                                            "_id_questionnaire" INTEGER,
                                                            "_code" VARCHAR,
                                                            "_description" TEXT,
                                                            "_niveau" NUMERIC(3, 1))
    language plpgsql
AS
$$
BEGIN
    UPDATE daadi.SousQuestionnaire
    SET code        = _code,
        description = _description,
        niveau      = _niveau

    WHERE id_questionnaire = _id_questionnaire
      AND id_sous_questionnaire = _id_sous_questionnaire;
END;
$$;


-- Modifier une question
CREATE OR REPLACE PROCEDURE daadi.ModifierQuestion("_id_question" INTEGER,
                                                   "_id_sous_questionnaire" INTEGER,
                                                   "_code" VARCHAR(50),
                                                   "_description" TEXT,
                                                   "_type" daadi.type_question)
    language plpgsql
AS
$$
BEGIN
    UPDATE daadi.Question
    SET code        = _code,
        description = _description,
        type        = _type

    WHERE id_question = _id_question
      AND id_sous_questionnaire = _id_sous_questionnaire;
END;
$$;


-- Modifier une sous question
CREATE OR REPLACE PROCEDURE daadi.ModifierSousQuestion("_id_sous_question" INTEGER,
                                                       "_id_question" INTEGER,
                                                       "_code" VARCHAR(50),
                                                       "_description" TEXT)
    language plpgsql
AS
$$
BEGIN
    UPDATE daadi.SousQuestion
    SET code        = _code,
        description = _description

    WHERE id_question = _id_question
      AND id_sous_question = _id_sous_question;
END;
$$;


-- Modifier les composantes d'un sous questionnaire
CREATE OR REPLACE PROCEDURE daadi.ModifierComposante("_id_sous_questionnaire" INTEGER,
                                                     "_ex_valeur" VARCHAR(255),
                                                     "_n_valeur" VARCHAR(255))
    language plpgsql
AS
$$
BEGIN
    UPDATE daadi.ComposanteCible
    SET nom = _n_valeur

    WHERE id_sous_questionnaire = _id_sous_questionnaire
      AND nom = _ex_valeur;
END;
$$;


-- Modifier les ponderations d'une contrainte
CREATE OR REPLACE PROCEDURE daadi.ModifierPonderationContrainte("_id_contrainte" INTEGER,
                                                                "_n_valeur_min" INTEGER,
                                                                "_n_valeur_max" INTEGER)
    language plpgsql
AS
$$
BEGIN
    UPDATE daadi.ContraintePondere
    SET min_contrainte = _n_valeur_min,
        max_contrainte = _n_valeur_max

    WHERE id_contrainte = _id_contrainte;
END;
$$;


-- Modifier la description d'une retroaction
CREATE OR REPLACE PROCEDURE daadi.ModifierDescriptionRetroaction ("_id_retroaction" INTEGER,
																  "_id_contrainte" INTEGER,
													 			  "_nouvelle_description" TEXT)
language plpgsql
AS
$$
BEGIN
    UPDATE daadi.Retroaction
    SET description = _nouvelle_description
    WHERE id_retroaction = _id_retroaction
	AND id_contrainte = _id_contrainte;
END;
$$;


-- Modifier le message d'un objectif
CREATE OR REPLACE PROCEDURE daadi.ModifierMessageObjectif("_id_objectif" INTEGER,
                                                                "_n_message" TEXT)
    language plpgsql
AS
$$
BEGIN
    UPDATE daadi.Objectif
    SET message = _n_message
    WHERE id_objectif = _id_objectif;
END;
$$;


------------------------------
-- PROCEDURE DE SUPPRESSION --
------------------------------

-- !!!! À NOTER: Il faudrait empêcher de retirer toutes les etiquettes, themes, public_cibles, etc
-- !!!! Il faudrait toujours en garder au moins une dès que la première est ajouté dans chaque catégorie
-- !!!! Sinon, les ressources disparaîtront de la vue et donc de l'affichage client sans clairement l'annoncer


-- Retirer une etiquette d'une ressource
CREATE OR REPLACE PROCEDURE daadi.EnleverEtiquetteRessource("_id_ressource" INTEGER,
                                                            "_tag" VARCHAR(255))
    language plpgsql
AS
$$
BEGIN
    IF (SELECT COUNT(*) FROM daadi.EtiquetteRessource WHERE id_ressource = _id_ressource) = 1 THEN
        RAISE EXCEPTION 'Toute ressource doit avoir au minimum une étiquette. Veuillez en ajouter une autre avant de retirer celle-ci ou la modifier directement';
    END IF;

    DELETE
    FROM daadi.EtiquetteRessource
    WHERE id_ressource = _id_ressource
      AND nom = _tag;
END ;
$$;


-- Retirer un theme d'une ressource
CREATE OR REPLACE PROCEDURE daadi.EnleverThemeRessource("_id_ressource" INTEGER,
                                                        "_theme" VARCHAR(255))
    language plpgsql
AS
$$
BEGIN
    IF (SELECT COUNT(*) FROM daadi.ThemeRessource WHERE id_ressource = _id_ressource) = 1 THEN
        RAISE EXCEPTION 'Toute ressource doit avoir au minimum un theme. Veuillez en ajouter une autre avant de retirer celle-ci ou la modifier directement';
    END IF;

    DELETE
    FROM daadi.EtiquetteRessource
    WHERE id_ressource = _id_ressource
      AND nom = _theme;
END;
$$;


-- Retirer un public cible d'une ressource
CREATE OR REPLACE PROCEDURE daadi.EnleverCibleRessource("_id_ressource" INTEGER,
                                                        "_valeur" VARCHAR(255))
    language plpgsql
AS
$$
BEGIN
    IF (SELECT COUNT(*) FROM daadi.CibleRessource WHERE id_ressource = _id_ressource) = 1 THEN
        RAISE EXCEPTION 'Toute ressource doit avoir au minimum un public cible. Veuillez en ajouter une autre avant de retirer celle-ci ou la modifier directement';
    END IF;

    DELETE
    FROM daadi.CibleRessource
    WHERE id_ressource = _id_ressource
      AND nom = _valeur;
END;
$$;


-- Retirer un contexte d'une ressource
CREATE OR REPLACE PROCEDURE daadi.EnleverContexteRessource("_id_ressource" INTEGER,
                                                           "_valeur" VARCHAR(255))
    language plpgsql
AS
$$
BEGIN
    IF (SELECT COUNT(*) FROM daadi.ContexteRessource WHERE id_ressource = _id_ressource) = 1 THEN
        RAISE EXCEPTION 'Toute ressource doit avoir au minimum un contexte de formation. Veuillez en ajouter une autre avant de retirer celle-ci ou la modifier directement';
    END IF;

    DELETE
    FROM daadi.ContexteRessource
    WHERE id_ressource = _id_ressource
      AND nom = _valeur;
END;
$$;


-- Retirer une ressource d'un dossier
CREATE OR REPLACE PROCEDURE daadi.EnleverDossierRessource("_id_ressource" INTEGER,
                                                           "_id_dossier" INTEGER)
    language plpgsql
AS
$$
BEGIN

    DELETE FROM daadi.DossierRessource
    WHERE id_ressource = _id_ressource
      AND id_dossier = _id_dossier;

END;
$$;


-- Retirer une ressource d'un dossier
CREATE OR REPLACE PROCEDURE daadi.EnleverObjectifRessource("_id_ressource" INTEGER,
                                                           "_id_objectif" INTEGER)
    language plpgsql
AS
$$
BEGIN
    IF (SELECT COUNT(*) FROM daadi.ObjectifRessource WHERE id_ressource = _id_ressource) = 1 THEN
        RAISE EXCEPTION 'Toute ressource doit avoir au minimum un objectif. Veuillez en ajouter un autre avant de retirer celui ou modifier la directement';
    END IF;

    DELETE FROM daadi.ObjectifRessource
    WHERE id_ressource = _id_ressource
      AND id_objectif = _id_objectif;
END;
$$;


-- Retirer une retroaction d'un objectif
CREATE OR REPLACE PROCEDURE daadi.EnleverRetroactionObjectif ("_id_retroaction" INTEGER,
															  "_id_objectif" INTEGER)
language plpgsql
AS
$$
BEGIN
    DELETE FROM daadi.RetroactionObjectif 
    WHERE id_objectif = _id_objectif AND id_retroaction = _id_retroaction;
END;
$$;