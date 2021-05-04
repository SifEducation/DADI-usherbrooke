\set ON_ERROR_STOP 1
BEGIN;
    -- Client encoding may differ within IDE vs in command line, especially on Windows
    -- This line forces it to be UTF-8
    SET CLIENT_ENCODING TO 'UTF-8';

    \ir 000-schema.sql
    \ir 001-domain.sql
    \ir 002-table.sql
    \ir 005-view.sql
    \ir 007-procedure.sql
    \ir 008-fonction.sql
    \ir 011-fonction-serveur.sql
    -- Les assertions ne sont pas inclus puisqu'elle peuvent interferer avec l'insertion des donnees initiales
    -- Elles sont en place pour proteger les donnees, une fois en production
COMMIT;