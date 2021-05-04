-- ================================================================================================
-- Ce script contient l'ensemble des assertions associe au schema Entite-Association
-- ================================================================================================


-- Cette fonction permet de s'assurer que toutes les sous questions d'une question ont des contraintes de meme type
-- Une question avec des sous questions aux contraintes logiques, ne doit pas avoir de sous questions aux contraintes 
-- ponderees par exemple
CREATE OR REPLACE FUNCTION daadi.fct_meme_contrainte_logique()
  RETURNS TRIGGER AS
  $$
  DECLARE
  	_id_question integer;
  BEGIN
  		-- Recuperation de l'id de la question
  		SELECT id_question INTO _id_question FROM daadi.SousQuestion WHERE id_sous_question= NEW.id_sous_question;
		
		-- Recuperation des id sous questions 
		IF( NOT EXISTS (SELECT id_sous_question FROM daadi.SousQuestion JOIN daadi.PondereSousQuestion USING (id_sous_question) 
			 WHERE id_question = _id_question))
		THEN
			RETURN NEW;
		ELSE
			RAISE 'La question est deja reliee a des sous-questions de contraintes ponderees, donc ne peut pas avoir de sous questions avec des contraintes logiques.';
		END IF;
  END
  
  $$
  LANGUAGE 'plpgsql';

CREATE TRIGGER question_contrainte_logique
  BEFORE INSERT ON daadi.ContrainteLogique
  FOR EACH ROW
  EXECUTE FUNCTION daadi.fct_meme_contrainte_logique();

-- Cas Pondere
-- drop function daadi.fct_meme_contrainte_pondere() cascade;
CREATE OR REPLACE FUNCTION daadi.fct_meme_contrainte_pondere()
  RETURNS TRIGGER AS
  $$
  DECLARE
  	_id_question integer;
  BEGIN
  		-- Recuperation de l'id de la question
  		SELECT id_question INTO _id_question FROM daadi.SousQuestion WHERE id_sous_question= NEW.id_sous_question;
		
		-- Recuperation des id sous questions 
		IF( NOT EXISTS (SELECT id_sous_question FROM daadi.SousQuestion JOIN daadi.ContrainteLogique USING (id_sous_question) 
			 WHERE id_question = _id_question))
		THEN
			RETURN NEW;
		ELSE
			RAISE 'La question est deja reliee a des sous-questions de contraintes logiques, donc ne peut pas avoir de sous questions avec des contraintes ponderees.';
		END IF;
  END
  $$
  LANGUAGE 'plpgsql';
  
  CREATE TRIGGER question_contrainte_pondere
  BEFORE INSERT ON daadi.PondereSousQuestion
  FOR EACH ROW
  EXECUTE FUNCTION daadi.fct_meme_contrainte_pondere()