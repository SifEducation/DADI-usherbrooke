begin;
-- Client encoding may differ within IDE vs in command line, especially on Windows
-- This line forces it to be UTF-8
SET CLIENT_ENCODING TO 'UTF-8';

\copy daadi.composante          FROM composante.csv          DELIMITER '|' CSV HEADER;
\copy daadi.dossier             FROM dossier.csv             DELIMITER '|' CSV HEADER;
\copy daadi.theme               FROM theme.csv               DELIMITER '|' CSV HEADER;
\copy daadi.ressource           FROM ressource.csv           DELIMITER '|' CSV HEADER;
\copy daadi.etiquette           FROM etiquette.csv           DELIMITER '|' CSV HEADER;
\copy daadi.typequestion        FROM typequestion.csv        DELIMITER '|' CSV HEADER;
\copy daadi.publiccible         FROM publiccible.csv         DELIMITER '|' CSV HEADER;
\copy daadi.contexteformation   FROM contexteformation.csv   DELIMITER '|' CSV HEADER;

\copy daadi.dossierressource    FROM dossierressource.csv    DELIMITER '|' CSV HEADER;
\copy daadi.themeressource      FROM themeressource.csv      DELIMITER '|' CSV HEADER;
\copy daadi.statressource       FROM statressource.csv       DELIMITER '|' CSV HEADER;
\copy daadi.cibleressource      FROM cibleressource.csv      DELIMITER '|' CSV HEADER;
\copy daadi.contexteressource   FROM contexteressource.csv   DELIMITER '|' CSV HEADER;
\copy daadi.etiquetteressource  FROM etiquetteressource.csv  DELIMITER '|' CSV HEADER;

\copy daadi.questionnaire       FROM questionnaire.csv       DELIMITER '|' CSV HEADER;
\copy daadi.sousquestionnaire   FROM sousquestionnaire.csv   DELIMITER '|' CSV HEADER;
\copy daadi.composantecible     FROM composantecible.csv     DELIMITER '|' CSV HEADER;
\copy daadi.question            FROM question.csv            DELIMITER '|' CSV HEADER;
\copy daadi.sousquestion        FROM sousquestion.csv        DELIMITER '|' CSV HEADER;

\copy daadi.contrainte          FROM contrainte.csv          DELIMITER '|' CSV HEADER;
\copy daadi.contraintelogique   FROM contraintelogique.csv   DELIMITER '|' CSV HEADER;
\copy daadi.contraintepondere   FROM contraintepondere.csv   DELIMITER '|' CSV HEADER;
\copy daadi.ponderesousquestion FROM ponderesousquestion.csv DELIMITER '|' CSV HEADER;

\copy daadi.retroaction         FROM retroaction.csv         DELIMITER '|' CSV HEADER;
\copy daadi.objectif            FROM objectif.csv            DELIMITER '|' CSV HEADER;
\copy daadi.retroactionobjectif FROM retroactionobjectif.csv DELIMITER '|' CSV HEADER;
\copy daadi.objectifressource   FROM objectifressource.csv   DELIMITER '|' CSV HEADER;

SELECT setval('daadi.contrainte_id_contrainte_seq', 125, true);
SELECT setval('daadi.objectif_id_objectif_seq', 160, true);
SELECT setval('daadi.question_id_question_seq', 20, true);
SELECT setval('daadi.questionnaire_id_questionnaire_seq', 5, true);
SELECT setval('daadi.ressource_id_ressource_seq', 150, true);
SELECT setval('daadi.retroaction_id_retroaction_seq', 100, true);
SELECT setval('daadi.sousquestion_id_sous_question_seq', 140, true);
SELECT setval('daadi.sousquestionnaire_id_sous_questionnaire_seq', 15, true);

commit;