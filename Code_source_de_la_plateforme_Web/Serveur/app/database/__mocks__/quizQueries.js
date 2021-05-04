const quizDataMocks = require('./dataMocks/quizDataMocks');

function getSubQuestionnaires(i_idQuestionnaire, i_level){
    return new Promise(function(resolve, reject) {
        resolve(quizDataMocks.o_subQuestionnaireMocks);
    });
}


module.exports = {
    getSubQuestionnaires: getSubQuestionnaires
};