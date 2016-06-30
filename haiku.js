var fs = require('fs');
var wordArr = [[],[],[],[],[],[],[],[]];

// console.log(fs.readFileSync('./cmudict.txt'))





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
    	// return WordArr;
	}); 

   function countSyllableWords(){
   	for (var i=0; i < 8; i++){
   		// console.log(i);
   		var randNum = Math.random();
   		console.log("Number of " + i + ' syllable words = ' + wordArr[i].length + " , first word is \'" + wordArr[i][0] + "\' and Random Word is " + wordArr[i][Math.floor(randNum * wordArr[i].length) ] ); 
   	}
   	

   }
   // countSyllableWords();
  
  	// console.log('2 syllable words = ' + wordArr[2].length + " , first word is \'" + wordArr[2][0] + "\'" );  
}

// formatData(cmudictFile);

var createHaiku = function createHaiku(structure){
    console.log("this should log a haiku with the structure " + structure);

    formatData(cmudictFile);

    function createLine(lineStructure){
    	var finalLine = '';
    	for(var k=0; k<lineStructure.length; k++){
    		var randNum = Math.random();
    		finalLine = wordArr[k][Math.floor(randNum * wordArr[k].length)] + ' ';
    	}
    	return finalLine.trim();
    }

    var finalHaiku = '';
    for(var j=0; j<3; j++){
    	finalHaiku += createLine(structure[j]) + "\n";
    }

    return finalHaiku;
}



module.exports = createHaiku;

