-- La fonction LOWER() de postgres est irreguliere en resultat avec les textes contenant des accents
-- Nous forcons donc un encodage commun ici qu'on sait etre capable de d'appliquer la fonction
-- LOWER() correctement.
SET search_path TO daadi;
CREATE COLLATION IF NOT EXISTS daadi.fr_ca (locale = 'fr_CA.utf8');

-- Ensemble d'elements en liant avec les ressources
CREATE OR REPLACE VIEW daadi.vw_Ressource AS
WITH themes AS (
    SELECT DISTINCT theme.id_ressource,
                    ARRAY_AGG(LOWER(theme.nom collate "fr_ca"))::VARCHAR[] AS noms
    FROM daadi.themeressource theme
    GROUP BY (theme.id_ressource)
),
     contextes AS (
         SELECT DISTINCT contexte.id_ressource,
                         ARRAY_AGG(LOWER(contexte.nom collate "fr_ca"))::VARCHAR[] AS noms
         FROM daadi.contexteressource contexte
         GROUP BY (contexte.id_ressource)
     ),
     etiquettes AS (
         SELECT DISTINCT etiquette.id_ressource,
                         ARRAY_AGG(etiquette.nom)::VARCHAR[] AS noms
         FROM daadi.etiquetteressource etiquette
         GROUP BY (etiquette.id_ressource)
     ),
     cibles AS (
         SELECT DISTINCT cible.id_ressource,
                         ARRAY_AGG(LOWER(cible.nom collate "fr_ca"))::VARCHAR[] AS noms
         FROM daadi.cibleressource cible
         GROUP BY (cible.id_ressource)
     )
SELECT res.id_ressource,
       res.code,
       res.titre,
       res.sous_titre,
       LOWER(res.format collate "fr_ca")::VARCHAR AS format,
       res.chemin,
       res.description,
       LOWER(res.type_licence collate "fr_ca")::VARCHAR AS type_licence,
       LOWER(res.temps_investi collate "fr_ca")::VARCHAR AS temps_investi,
       themes.noms AS themes,
       contextes.noms AS contextes,
       etiquettes.noms AS etiquettes,
       cibles.noms AS publics_cibles
FROM daadi.ressource res
         JOIN themes USING (id_ressource)
         JOIN contextes USING (id_ressource)
         JOIN etiquettes USING (id_ressource)
         JOIN cibles USING (id_ressource);
--          JOIN daadi.statressource stat USING (id_ressource)
--          Inutilisé au sein du code donc exclue de la vue pour le moment


