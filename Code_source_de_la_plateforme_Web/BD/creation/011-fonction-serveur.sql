--------------------------------------------------------------------------
-- Fonction serveur pour recuperer les sous-questionnaires d'un questionnaire parent
--------------------------------------------------------------------------
CREATE OR REPLACE FUNCTION daadi.S_AfficherSousQuestionnaires(_id_questionnaire INTEGER,
                                                              _niveau INTEGER)
    RETURNS TABLE
            (
                id_sous_questionnaire INTEGER,
                id_questionnaire      INTEGER,
                description           TEXT,
                niveau                INTEGER,
                composantes           VARCHAR(50)[]
            )
AS
$$
BEGIN
    return query
        SELECT sq.id_sous_questionnaire,
               sq.id_questionnaire,
               sq.description,
               sq.niveau,
               ARRAY_AGG(cc.nom) AS composantes
        FROM daadi.SousQuestionnaire sq
                 JOIN daadi.ComposanteCible cc USING (id_sous_questionnaire)
        WHERE sq.id_questionnaire = _id_questionnaire
          AND sq.niveau = _niveau
        GROUP BY (sq.id_sous_questionnaire, sq.id_questionnaire, sq.description, sq.niveau);
END;
$$ LANGUAGE plpgsql;


--------------------------------------------------------------------------
-- Fonction serveur pour recuperer les questions d'un sous-questionnaire parent
--------------------------------------------------------------------------
CREATE OR REPLACE FUNCTION daadi.S_AfficherQuestions(_id_sous_questionnaire INTEGER)
    RETURNS TABLE
            (
                id_question           INTEGER,
                id_sous_questionnaire INTEGER,
                description           TEXT,
                type                  daadi.type_question,
                reponses              VARCHAR(50)[]
            )
AS
$$
BEGIN
    return query
        SELECT q.id_question, q.id_sous_questionnaire, q.description, q.type, ARRAY_AGG(tq.choix_reponse ORDER BY tq.ordre ASC) as reponses
        FROM daadi.Question q
                 JOIN daadi.TypeQuestion tq USING (type)
        WHERE q.id_sous_questionnaire = _id_sous_questionnaire
        GROUP BY (q.id_question, q.id_sous_questionnaire, q.description, q.type);
END ;
$$ LANGUAGE plpgsql;


--------------------------------------------------------------------------
-- Fonction serveur pour valider si une question a des contraintes de types ponderees
--------------------------------------------------------------------------
CREATE OR REPLACE FUNCTION daadi.S_VerifierSiContraintePonderee(_id_question INTEGER)
    RETURNS BOOLEAN
AS
$$
BEGIN
    return EXISTS(SELECT *
                  FROM daadi.PondereSousQuestion
                           JOIN daadi.SousQuestion USING (id_sous_question)
                  WHERE daadi.SousQuestion.id_question = _id_question);
END ;
$$ LANGUAGE plpgsql;


--------------------------------------------------------------------------
-- Fonction serveur pour recuperer les contraintes ponderees d'une question
--------------------------------------------------------------------------
CREATE OR REPLACE FUNCTION daadi.S_AfficherContraintePonderees(_id_question INTEGER)
    RETURNS TABLE
            (
                id_contrainte  INTEGER,
                id_question    INTEGER,
                min_contrainte INTEGER,
                max_contrainte INTEGER,
                id_sous_questions INTEGER[],
                ponderations_inversees BOOLEAN[]
            )
AS
$$
BEGIN
    return query
        SELECT cp.id_contrainte, sq.id_question, cp.min_contrainte, cp.max_contrainte,
               ARRAY_AGG(psq.id_sous_question) AS sous_questions, ARRAY_AGG(psq.ponderation_inversee) AS ponderations_inversees
        FROM daadi.PondereSousQuestion psq
                 JOIN daadi.SousQuestion sq USING (id_sous_question)
                 JOIN daadi.ContraintePondere cp USING (id_contrainte)
        WHERE sq.id_question = _id_question
        GROUP BY (cp.id_contrainte, sq.id_question, cp.min_contrainte, cp.max_contrainte);
END ;
$$ LANGUAGE plpgsql;


--------------------------------------------------------------------------
-- Fonction serveur pour recuperer les contraintes logiques d'une question
--------------------------------------------------------------------------
CREATE OR REPLACE FUNCTION daadi.S_AfficherContrainteLogiques(_id_question INTEGER)
    RETURNS TABLE
            (
                id_contrainte     INTEGER,
                id_sous_questions INTEGER[],
                reponses          VARCHAR(50)[]
            )
AS
$$
BEGIN
    return query
        WITH contraintes_sous_question AS (
            SELECT c.id_contrainte, sq.id_sous_question, ARRAY_AGG(cl.reponse) AS reponses
            FROM daadi.Contrainte c
                     JOIN daadi.ContrainteLogique cl USING (id_contrainte)
                     JOIN daadi.SousQuestion sq USING (id_sous_question)
            WHERE sq.id_question = _id_question
            GROUP BY (c.id_contrainte, sq.id_sous_question)
        )
        SELECT csq.id_contrainte,
               ARRAY_AGG(csq.id_sous_question) AS id_sous_questions,
               ARRAY_AGG(csq.reponses)         AS reponses
        FROM contraintes_sous_question csq
        GROUP BY (csq.id_contrainte);
END ;
$$ LANGUAGE plpgsql;


--------------------------------------------------------------------------
-- Fonction serveur pour recuperer les retroactions, objectifs et ressources d'une contrainte
--
-- A NOTER : si une retroaction mène à un seul objectif et que cet objectif n'est pas rattache
-- a au moins une ressource, rien n'est renvoye au serveur. Il arrive que les objectifs ne soient
-- relies a aucune ressource, mais ces objectifs ne devraient jamais etre les seuls objectifs resultants
-- d'une retroaction.
--------------------------------------------------------------------------
CREATE OR REPLACE FUNCTION daadi.S_AfficherRetroactionContrainte(_id_contrainte INTEGER)
    RETURNS TABLE
            (
                description   TEXT,
                messages      TEXT[],
                id_ressources INTEGER[],
                formats       VARCHAR(40)[],
                noms          VARCHAR(50)[]
            )
AS
$$
BEGIN
    return query
        WITH Ressource AS (
            SELECT DISTINCT r.id_contrainte, res.id_ressource, res.format, res.titre
            FROM daadi.retroaction r
                     JOIN daadi.retroactionobjectif ro USING (id_retroaction)
                     JOIN daadi.objectif o USING (id_objectif)
                     JOIN daadi.objectifressource ores USING (id_objectif)
                     JOIN daadi.vw_ressource res USING (id_ressource)
            WHERE r.id_contrainte = _id_contrainte
        ),
             Retroaction AS (
                 SELECT r.id_contrainte,
                        r.description,
                        ARRAY_AGG(o.message)::TEXT[] AS messages
                 FROM daadi.retroaction r
                          JOIN daadi.retroactionobjectif ro USING (id_retroaction)
                          JOIN daadi.objectif o USING (id_objectif)
                 WHERE r.id_contrainte = _id_contrainte
                 GROUP BY (r.id_contrainte, r.description)
             )
        SELECT ret.description,
               ret.messages,
               ARRAY_AGG(res.id_ressource)::INTEGER[] AS id_ressources,
               ARRAY_AGG(res.format)::VARCHAR[]       AS formats,
               ARRAY_AGG(res.titre)::VARCHAR[]          AS titres
        FROM Retroaction ret
                 JOIN Ressource res USING (id_contrainte)
        GROUP BY (ret.id_contrainte, ret.description, ret.messages);
END ;
$$ LANGUAGE plpgsql;

