-- ================================================================================================
-- Ce script contient l'ensemble des assertions associe au disjonction du schema Entite-Association
-- ================================================================================================

-- +++++++++++++++++++++++++++++++++++++++++++++++++++++++
-- |                                                     |
-- |                     CONTRAINTE                      |
-- |                                                     |
-- +++++++++++++++++++++++++++++++++++++++++++++++++++++++

-- ==============================================================
--  Assertion des disjonctions sur la table de Contrainte logique
-- ==============================================================
CREATE OR REPLACE FUNCTION daadi.disjonction_contrainte_logique()
  RETURNS TRIGGER AS
  $$
  BEGIN
    IF(NEW.id_contrainte NOT IN (
        SELECT id_contrainte FROM daadi.ContraintePondere
      ))
    THEN
      RETURN NEW;
    ELSE
      RAISE EXCEPTION 'Cette contrainte existe deja dans les contraintes ponderees';
    END IF;
  END
  $$
  LANGUAGE 'plpgsql';


-- ===============================================================
--  Assertion des disjonctions sur la table de Contrainte ponderee
-- ===============================================================

  CREATE OR REPLACE FUNCTION daadi.disjonction_contrainte_pondere()
  RETURNS TRIGGER AS
  $$
  BEGIN
    IF(NEW.id_contrainte NOT IN (
        SELECT id_contrainte FROM daadi.ContrainteLogique
      ))
    THEN
      RETURN NEW;
    ELSE
      RAISE EXCEPTION 'Cette contrainte existe deja dans les contraintes logiques';
    END IF;
  END
  $$
  LANGUAGE 'plpgsql';

-- Contrainte logique
CREATE TRIGGER disjonction_contrainte_logique
  BEFORE INSERT ON daadi.ContrainteLogique
  FOR EACH ROW
  EXECUTE FUNCTION daadi.disjonction_contrainte_logique();

-- Contrainte pondere
CREATE TRIGGER disjonction_contrainte_pondere
  BEFORE INSERT ON daadi.ContraintePondere
  FOR EACH ROW
  EXECUTE FUNCTION daadi.disjonction_contrainte_pondere();