const o_mockRessources = [
    {
        "id_ressource": 1,
        "code": "code 1",
        "titre": "ressource 1",
        "sous_titre": "sous-titre 1",
        "format": "capsule strategique",
        "chemin": "/chemin/ilestou",
        "description": "une description de ressource 1",
        "type_licence": "cc0",
        "temps_investi": "plus de 2h",
        "themes": [
            "pedagogique"
        ],
        "contextes": [
            "distanciel synchrone"
        ],
        "etiquettes": [
            "tag 1",
            "tag 2",
            "tag 3"
        ],
        "publics_cibles": [
            "chercheurs"
        ],
        "nb_clique": 24,
        "nb_reference": 10,
        "id_dossier": 5
    },
    {
        "id_ressource": 2,
        "code": "code 2",
        "titre": "ressource 2",
        "sous_titre": "sous-titre 2",
        "format": "capsule strategique",
        "chemin": "/chemin/ilestou",
        "description": "une description de ressource 2",
        "type_licence": "CC-BY-NC-SA",
        "temps_investi": "plus de 2h",
        "themes": [
            "technologique"
        ],
        "contextes": [
            "distanciel synchrone"
        ],
        "etiquettes": [
            "tag 1",
            "tag 2",
            "tag 3"
        ],
        "publics_cibles": [
            "chercheurs"
        ],
        "nb_clique": 24,
        "nb_reference": 10,
        "id_dossier": 5
    }
];

const o_mockRessource = {
    "id_ressource": 1,
    "temps_investi": "plus de 2h",
    "type_licence": "cc0",
    "themes": [
        "pedagogique"
    ],
    "description": "une description de ressource 1",
    "etiquettes": [
        "tag 1",
        "tag 2",
        "tag 3"
    ],
    "contextes": [
        "distanciel synchrone"
    ],
    "format": "capsule strategique",
    "publics_cibles": [
        "chercheurs"
    ],
    "chemin": "/chemin/ilestou"
};

const a_mockTags = ["Tag 1", "Tag 2", "Tag 3"];

module.exports = {
    o_mockRessources: o_mockRessources,
    o_mockRessource: o_mockRessource,
    a_mockTags: a_mockTags
};