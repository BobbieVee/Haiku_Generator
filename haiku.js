var fs = require('fs');

// console.log(fs.readFileSync('./cmudict.txt'))





var cmudictFile = readCmudictFile('./cmudict.txt');

function readCmudictFile(file){
  return fs.readFileSync(file).toString();
}

function formatData(data){    
   var wordArr = [[],[],[],[],[],[],[],[],[],[]];
   var syllables = '';
   var lines = data.toString().split("\n"),
       lineSplit
   lines.forEach(function(line){    
	    lineSplit = line.split("  ");
	    var numberAccents = lineSplit[1].match(/\d/g);
	    if  (numberAccents !== null && numberAccents !== undefined ){
	    	// push word to element of wordArr with corresponding index


	    	syllables = lineSplit[1].match(/\d/g).length
	    	wordArr[syllables].push(lineSplit[0]); 
	    } else {
	    	syllables = "null"
    }

   
    // console.log('\n Syllables =  ' + syllables)
    	   
    // console.log("The word " + lineSplit[0] + " has this phoneme    layout: " + lineSplit[1]); 
    console.log(wordArr[2]);

  });   
}

formatData(cmudictFile);

var createHaiku = function createHaiku(structure){
    console.log("this should log a haiku with the structure " + structure);

    formatData(cmudictFile);
    return structure;
}



module.exports = createHaiku;

