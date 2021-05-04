const resourceDataMocks = require('./dataMocks/resourceDataMocks');

function getResources(o_filters){
    return new Promise(function(resolve, reject) {
        resolve(resourceDataMocks.o_mockRessources);
    });
}

function getResource(i_idRessource){
    return new Promise(function(resolve, reject) {
        resolve(resourceDataMocks.o_mockRessource);
    });
}

function getTags(){
    return new Promise(function(resolve, reject) {
        resolve(resourceDataMocks.a_mockTags);
    });
}

module.exports = {
    getResources: getResources,
    getResource: getResource,
    getTags: getTags
};