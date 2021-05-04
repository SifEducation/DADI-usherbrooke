const dbAPI = require('../../app/database/dbAPI');
const quizExpectedResults = require('./expectedResults/quizExpectedResults');

jest.mock('../../app/database/quizQueries');

describe('Fetch subQuestionnaires', () => {

    it('Normal call', () => {
        return dbAPI.getSubQuestionnaires(1, 1).then(data => {
            expect(data).toEqual(quizExpectedResults.o_expectedSubQuestionnaires);
        });
    });
});