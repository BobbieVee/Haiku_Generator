
var filePath = process.argv[1];
var structure = process.argv[2];

//Create fileName from filePath.  Create error message.
var fileName = filePath.split("/").slice(-1).toString();
var noArgError = 'Error: Please submit a haiku structure as the first argument: \n       Ex: ' + fileName + ' 575 \n'

// First argument 'structure' is mandatory
function testArg(){
	if (structure === undefined){
		return noArgError; 
	} else {
		return ("  Structure specified for Haiku is " + structure);
	}
}	


console.log(testArg());

///Change input string Arg to Array.
structure = structure.split('.')




var createHaiku = require('./haiku');
console.log(createHaiku(structure));

