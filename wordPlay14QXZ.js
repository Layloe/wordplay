
const fs = require('fs');

function countWords(text) {
    let wordContainQ = 0
    let wordContainX = 0
    let wordContainZ = 0
    
    const words = text.split(/\s+/); 

    words.forEach(word => {
        const cleanedWord = word.toLowerCase().trim()

        if (cleanedWord.includes('z')) {
            wordContainZ += 1
            
        }
        if (cleanedWord.includes('x')) {
            wordContainX += 1
        }
        if ( cleanedWord.includes('q')) {
            wordContainQ += 1
            
        } 
            
           
});
    if (wordContainQ < wordContainX && wordContainQ < wordContainZ) {
        return 'q'
    }
    if (wordContainX < wordContainQ && wordContainX < wordContainZ){
        return 'x'
    }
    if (wordContainZ < wordContainQ && wordContainZ < wordContainX){
        return 'z'
    }
    
    return wordContainQ 
    
}

// Reading the contents of a text file.
fs.readFile('sowpods.txt', 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }

    // Count words in the file and print the results.
    const wordCounts = countWords(data);
    console.log(wordCounts);
});

