const dbAPI = require('../../app/database/dbAPI');
const resourceExpectedResults = require('./expectedResults/resourceExpectedResults');

jest.mock('../../app/database/resourceQueries');

describe('Fetch filtered ressources', () => {
    const o_filters = {
        "format": "Capsule strategique",
        "audiences": ["Chercheurs"],
        "themes": ["Pedagogique", "Technologique"],
        "tags": ["tag 1","tag 2","tag 3"],
        "contexts": ["Distanciel synchrone"],
        "duration": "Plus de 2h",
        "license": ["CCO","CC-BY-NC-SA"],
        "folder": ["5"]
    };

    it('Normal call', () => {
        return dbAPI.getResources(o_filters).then(data => {
            expect(data).toEqual(resourceExpectedResults.o_expectedRessources);
        });
    });
});

describe('Fetch a specific ressource', () => {

    it('Normal call', () => {
        return dbAPI.getResource(1).then(data => {
            expect(data).toEqual(resourceExpectedResults.o_expectedRessource);
        });
    });
});

describe('Fetch all possible tags', () => {

    it('Normal call', () => {
        return dbAPI.getTags().then(data => {
            expect(data).toEqual(resourceExpectedResults.a_expectedTags);
        });
    });
});

