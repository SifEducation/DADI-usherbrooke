const o_expectedRessources = [
    {
        "i_id": 1,
        "s_name": "ressource 1",
        "s_subTitle": "sous-titre 1",
        "s_duration": "plus de 2h",
        "s_license": "cc0",
        "a_theme": [
            "pedagogique"
        ],
        "s_description": "une description de ressource 1",
        "a_tag": [
            "tag 1",
            "tag 2",
            "tag 3"
        ],
        "a_contexts": [
            "distanciel synchrone"
        ],
        "s_format": "capsule strategique",
        "a_audiences": [
            "chercheurs"
        ],
        "s_path": "/chemin/ilestou"
    },
    {
        "i_id": 2,
        "s_name": "ressource 2",
        "s_subTitle": "sous-titre 2",
        "s_duration": "plus de 2h",
        "s_license": "CC-BY-NC-SA",
        "a_theme": [
            "technologique"
        ],
        "s_description": "une description de ressource 2",
        "a_tag": [
            "tag 1",
            "tag 2",
            "tag 3"
        ],
        "a_contexts": [
            "distanciel synchrone"
        ],
        "s_format": "capsule strategique",
        "a_audiences": [
            "chercheurs"
        ],
        "s_path": "/chemin/ilestou"
    }
];

const o_expectedRessource = {
    "i_id": 1,
    "s_duration": "plus de 2h",
    "s_license": "cc0",
    "a_theme": [
        "pedagogique"
    ],
    "s_description": "une description de ressource 1",
    "a_tag": [
        "tag 1",
        "tag 2",
        "tag 3"
    ],
    "a_contexts": [
        "distanciel synchrone"
    ],
    "s_format": "capsule strategique",
    "a_audiences": [
        "chercheurs"
    ],
    "s_path": "/chemin/ilestou"
};

const a_expectedTags = ["Tag 1", "Tag 2", "Tag 3"];

module.exports = {
    o_expectedRessources: o_expectedRessources,
    o_expectedRessource: o_expectedRessource,
    a_expectedTags: a_expectedTags
};