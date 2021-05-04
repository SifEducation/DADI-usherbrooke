\set ON_ERROR_STOP 1
BEGIN;
    -- Client encoding may differ within IDE vs in command line, especially on Windows
    -- This line forces it to be UTF-8
    SET CLIENT_ENCODING TO 'UTF-8';

    \ir composante.sql
    \ir dossier.sql
    \ir theme.sql
    \ir ressource.sql
    \ir etiquette.sql
    \ir typequestion.sql
    \ir publiccible.sql
    \ir contexteformation.sql
    \ir dossierressource.sql
    \ir themeressource.sql
    \ir statressource.sql
    \ir cibleressource.sql
    \ir contexteressource.sql
    \ir etiquetteressource.sql
    \ir questionnaire.sql
    \ir sousquestionnaire.sql
    \ir composantecible.sql
    \ir question.sql
    \ir sousquestion.sql
    \ir contrainte.sql
    \ir contraintelogique.sql
    \ir contraintepondere.sql
    \ir ponderesousquestion.sql
    \ir retroaction.sql
    \ir objectif.sql
    \ir retroactionobjectif.sql
    \ir objectifressource.sql

    SELECT setval('daadi.contrainte_id_contrainte_seq', 125, true);
    SELECT setval('daadi.objectif_id_objectif_seq', 160, true);
    SELECT setval('daadi.question_id_question_seq', 20, true);
    SELECT setval('daadi.questionnaire_id_questionnaire_seq', 5, true);
    SELECT setval('daadi.ressource_id_ressource_seq', 150, true);
    SELECT setval('daadi.retroaction_id_retroaction_seq', 100, true);
    SELECT setval('daadi.sousquestion_id_sous_question_seq', 140, true);
    SELECT setval('daadi.sousquestionnaire_id_sous_questionnaire_seq', 15, true);
COMMIT;