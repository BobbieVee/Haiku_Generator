var fs = require('fs');
// console.log(fs.readFileSync('./cmudict.txt'))
var createHaiku = function createHaiku(structure){
    console.log("this should log a haiku with the structure " + structure);
    return structure;
}

// module.exports = {
//   createHaiku: createHaiku,
// };

module.exports = createHaiku;

