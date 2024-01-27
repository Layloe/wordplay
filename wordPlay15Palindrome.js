const fs = require('fs');

function countWords(text) {
    const wordCounts = []

    const words = text.split(/\s+/); 

    words.forEach(word => {
        const cleanedWord = word.toLowerCase().trim();


        if (cleanedWord == cleanedWord.split('').reverse().join('')) {

            wordCounts.push(cleanedWord)

        
        }
    })

   
    return wordCounts.reduce((sum, curr) => sum.length >= curr.length ? sum : curr )
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
