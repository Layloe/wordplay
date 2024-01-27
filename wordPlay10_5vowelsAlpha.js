const fs = require('fs');

function hasAllVowelsInOrder(word) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let lastIndex = -1;
    for (let vowel of vowels) {
        const index = word.indexOf(vowel);
        if (index === -1 || index < lastIndex) {
            return false;
        }
        lastIndex = index;
    }
    return true;
}

function countWords(text) {
    const wordCounts = []
    const words = text.split(/\s+/); 

    words.forEach(word => {
        const cleanedWord = word.toLowerCase().trim();


        if (hasAllVowelsInOrder(cleanedWord)) {
            
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
