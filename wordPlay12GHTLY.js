const fs = require('fs');

function countWords(text) {
    const wordCounts = [];
    const words = text.split('\n'); 

    words.forEach(word => {
        const cleanedWord = word.toLowerCase().trim()

        if (cleanedWord.includes('ghtly')) {

            wordCounts.push(cleanedWord)
        }
    });

   
    return wordCounts;
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
