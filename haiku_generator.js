
var createHaiku = require('./haiku');

var filePath = process.argv[1];
var structure = process.argv[2];

//Create fileName from filePath.  Create error message.
var fileName = filePath.split("/").slice(-1).toString();
var noArgError = 'Error: Please submit a haiku structure as the first argument: \n       Ex: ' + fileName + ' 575 \n'

// First argument 'structure' is mandatory
if (structure === undefined){
	return "bad"; 
}



console.log(createHaiku(structure))

