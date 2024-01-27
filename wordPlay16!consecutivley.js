
const fs = require('fs');
// What are all of the letters that never appear consecutively in an English word? For example, we know that “U” isn’t an answer, because of the word VACUUM, and we know that “A” isn’t an answer, because of “AARDVARK”, but which letters never appear consecutively?

function countWords(text, index) {
    const wordCounts = []
    // const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']


    const words = text.split(/\s+/); 

  
    words.forEach(word => {
        const cleanedWord = word.toLowerCase().trim();

        
        if (cleanedWord !== cleanedWord[index + 1] && cleanedWord !== cleanedWord[index - 1])  {
            // return letters that do not have consecitive letters in a word
            //compare against ABC's
            // .repeat(index)
            wordCounts.push(cleanedWord)
            // .reduce((sum, curr) => ( sum == curr ? wordCounts.push(cleanedWord) : 0)
            
            //! Clean up solutions review 10 and 16
          
        }
    });

    
    return wordCounts;
}


fs.readFile('sowpods.txt', 'utf8', (err, data) => {

    if (err) {
        console.error("Error reading file:", err);
        return;
    }

    
    const wordCounts = countWords(data);

    
    console.log(wordCounts);
});

