var fs = require('fs');
var wordArr = [[],[],[],[],[],[],[],[]];

var cmudictFile = readCmudictFile('./cmudict.txt');

function readCmudictFile(file){
  return fs.readFileSync(file).toString();
}

function formatData(data){    
   
   var syllables = '';
   var lines = data.toString().split("\n"),
       lineSplit
   lines.forEach(function(line){    
	    lineSplit = line.split("  ");
	    // console.log(lineSplit)
	    if (lineSplit[1] !== undefined && lineSplit[1] !== null){
	    	var numberAccents = lineSplit[1].match(/\d/g);
	    }

	    // push word to element of wordArr with corresponding index
	    if  (numberAccents !== null && numberAccents !== undefined ){
	    	syllables = lineSplit[1].match(/\d/g).length;
	    } else {
	    	syllables = 0;
    	}

    	//Only use words with a max of 7 syllables 
    	if (syllables < 8){
    		wordArr[syllables].push(lineSplit[0]);
    	}

	}); 
}

var createHaiku = function createHaiku(structure){
    formatData(cmudictFile);

    function findWord(wordSyllables) {
		var randNum = Math.random();
		var newWord = wordArr[wordSyllables][Math.floor(randNum * wordArr[wordSyllables].length)];
		return newWord;
    }

    function createLine(lineStructure){
    	var finalLine = '';
    	for(var k=0; k<lineStructure.length; k++){

    		// Find a word that is a good candidate
    		var wordCandidate = false;
    		while (wordCandidate == false) {
    			var newWord = findWord(lineStructure[k])
    			if (newWord != undefined && newWord.match(/\d/g) == null) {
    				wordCandidate = true;
    			}
    		}
    		finalLine += newWord + ' ';
    	}
    	return finalLine.trim();
    }

    var finalHaiku = '';
    for(var j=0; j<3; j++){
    	var lineArr = structure[j].match(/\d/g);
    	finalHaiku += createLine(lineArr) + "\n";
    }
    return finalHaiku;
}

module.exports = createHaiku;

