
var filePath = process.argv[1];
var structure = process.argv[2];

//Create fileName from filePath.  Create error message.
var fileName = filePath.split("/").slice(-1).toString();
var noArgError = '\n\
Error: Please submit a haiku structure as the first argument. \n\
       No. of syllables per word seperated by comma.\n\
       Lines surrounded by brackets and seperated by periods.\n\
       Ex: ' + fileName + ' [2,1,2].[3,2,3].[2,1,2] \n'

// First argument 'structure' is mandatory
if (structure === undefined){
	console.log(noArgError); 
} else {
	//Change input string Arg to Array.
	structure = structure.split('.')

	//Run the module
	var createHaiku = require('./haiku');
	console.log(createHaiku(structure));
}
	











