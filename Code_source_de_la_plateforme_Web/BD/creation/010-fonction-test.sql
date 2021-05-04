/*************************************************
* Test affichage des ressources
**************************************************/

--------------------------------------------------------------------------
-- Fonction AfficherRessource
--------------------------------------------------------------------------

-- Positif
SELECT * FROM daadi.AfficherRessource('ressource 1');
-- Negatif
SELECT * FROM daadi.AfficherRessource('ressource 1500');

--------------------------------------------------------------------------
-- Fonction AfficherEtiquetteRessource
--------------------------------------------------------------------------
-- Positif
SELECT * FROM daadi.AfficherEtiquetteRessource(1);
-- Negatif
SELECT * FROM daadi.AfficherEtiquetteRessource(1500);

--------------------------------------------------------------------------
-- Fonction AfficherThemeRessource
--------------------------------------------------------------------------
-- Positif
SELECT * FROM daadi.AfficherThemeRessource(1);
-- Negatif
SELECT * FROM daadi.AfficherThemeRessource(1500);

--------------------------------------------------------------------------
-- Fonction AfficherPublicCibleRessource
--------------------------------------------------------------------------
-- Positif
SELECT * FROM daadi.AfficherPublicCibleRessource(1);
-- Negatif
SELECT * FROM daadi.AfficherPublicCibleRessource(1500);

--------------------------------------------------------------------------
-- Fonction AfficherContexteFormationRessource
--------------------------------------------------------------------------
-- Positif
SELECT * FROM daadi.AfficherContexteFormationRessource(1);
-- Negatif
SELECT * FROM daadi.AfficherContexteFormationRessource(1500);

--------------------------------------------------------------------------
-- Fonction AfficherDossierRessource
--------------------------------------------------------------------------
-- Positif
SELECT * FROM daadi.AfficherDossierRessource(1);
-- Negatif
SELECT * FROM daadi.AfficherDossierRessource(20);

/*************************************************
* Test affichage des questionnaires
**************************************************/

--------------------------------------------------------------------------
-- Fonction AfficherQuestionnaire
--------------------------------------------------------------------------
-- Positif
SELECT * FROM daadi.AfficherQuestionnaire('Q1');
-- Negatif
SELECT * FROM daadi.AfficherQuestionnaire('Q1500');

--------------------------------------------------------------------------
-- Fonction AfficherSousQuestionnaire
--------------------------------------------------------------------------
-- Positif
SELECT * FROM daadi.AfficherSousQuestionnaire('SQ1');
-- Negatif
SELECT * FROM daadi.AfficherSousQuestionnaire('SQ1500');

--------------------------------------------------------------------------
-- Fonction AfficherQuestion
--------------------------------------------------------------------------
-- Positif
SELECT * FROM daadi.AfficherQuestion('q1');
-- Negatif
SELECT * FROM daadi.AfficherQuestion('q1500');

--------------------------------------------------------------------------
-- Fonction AfficherSousQuestion
--------------------------------------------------------------------------
-- Positif
SELECT * FROM daadi.AfficherSousQuestion('sq1');
-- Negatif
SELECT * FROM daadi.AfficherSousQuestion('sq1500');

--------------------------------------------------------------------------
-- Fonction AfficherSousQuestionnaireEnfants
--------------------------------------------------------------------------
-- Positif
SELECT * FROM daadi.AfficherSousQuestionnaireEnfants('Q1');
-- Negatif
SELECT * FROM daadi.AfficherSousQuestionnaireEnfants('Q1500');

--------------------------------------------------------------------------
-- Fonction AfficherQuestionEnfants
--------------------------------------------------------------------------
-- Positif
SELECT * FROM daadi.AfficherQuestionEnfants('SQ1');
-- Negatif
SELECT * FROM daadi.AfficherQuestionEnfants('SQ1500');

--------------------------------------------------------------------------
-- Fonction AfficherSousQuestionEnfants
--------------------------------------------------------------------------
-- Positif
SELECT * FROM daadi.AfficherSousQuestionEnfants('q1');
-- Negatif
SELECT * FROM daadi.AfficherSousQuestionEnfants('q1500');

--------------------------------------------------------------------------
-- Fonction AfficherContraintePondereeQuestion
--------------------------------------------------------------------------
-- Positif
SELECT * FROM daadi.AfficherContraintePondereeQuestion('q1');
-- Negatif
SELECT * FROM daadi.AfficherContraintePondereeQuestion('q1500');

--------------------------------------------------------------------------
-- Fonction AfficherContrainteLogiqueQuestion
--------------------------------------------------------------------------
-- Positif
SELECT * FROM daadi.AfficherContrainteLogiqueQuestion('q2');
-- Negatif
SELECT * FROM daadi.AfficherContrainteLogiqueQuestion('q1500');

--------------------------------------------------------------------------
-- Fonction AfficherRetroactionContrainte
--------------------------------------------------------------------------
-- Positif
SELECT * FROM daadi.AfficherRetroactionContrainte(1);
-- Negatif
SELECT * FROM daadi.AfficherRetroactionContrainte(1500);

--------------------------------------------------------------------------
-- Fonction AfficherObjectifRessource
--------------------------------------------------------------------------
-- Positif
SELECT * FROM daadi.AfficherObjectifRessource(1);
-- Negatif
SELECT * FROM daadi.AfficherObjectifRessource(1500);