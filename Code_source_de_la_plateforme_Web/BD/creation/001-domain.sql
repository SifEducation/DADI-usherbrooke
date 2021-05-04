CREATE DOMAIN daadi.type_format
VARCHAR(50) NOT NULL
CONSTRAINT cd_type_format  
    CHECK (
        VALUE SIMILAR TO '(Capsule stratégique|Démarche d''analyse|Aide-mémoire'
        '|Cas de figure / exemple|Canevas à remplir|Tutoriel|Articles scientifiques'
        '|Articles professionels|Référence institutionnelle|Répertoire|Capsules vidéos'
        '|Infographie|À déterminer)'
    );


CREATE DOMAIN daadi.dtype_licence
VARCHAR(50) NOT NULL
CONSTRAINT cd_dtype_licence 
    CHECK (
        VALUE SIMILAR TO '(CC0|CC-BY|CC-BY-SA|CC-BC-NC|CC-BY-NC-SA|'
        'CC-BY-ND|CC-BY-NC-ND|Tous droits réservés|Autre|À déterminer)'
    );


CREATE DOMAIN daadi.type_temps
VARCHAR(50) NOT NULL
CONSTRAINT cd_type_temps 
    CHECK (
        VALUE SIMILAR TO '(15 minutes et moins|20 à 45 minutes|50 minutes à 1h30|Plus de 2h|À déterminer)'
    );


CREATE DOMAIN daadi.type_question
VARCHAR(50) NOT NULL
CONSTRAINT cd_type_question 
    CHECK (
        VALUE SIMILAR TO '(Fréquence|Accord|Chiffrée|QCM)'
    );