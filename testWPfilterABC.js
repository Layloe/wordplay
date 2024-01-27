function processWordsStartingWithVowels(words) {
    // Define vowels
    const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];

    // Filter the words that start with a vowel
    const wordsStartingWithVowels = words.filter(word => vowels.includes(word[0].toLowerCase()));

    // Sort the words that start with a vowel in alphabetical order
    const sortedWordsStartingWithVowels = wordsStartingWithVowels.sort();

    // Iterate through the sorted list and perform the desired operation
    sortedWordsStartingWithVowels.forEach(word => {
        // For demonstration, we're just logging the words to the console.
        // You can perform any operation you want here.
        console.log(word);
    });
}

// Example usage:
const wordList = ['apple', 'banana', 'avocado', 'grape', 'elephant', 'umbrella', 'strawberry', 'orange'];
processWordsStartingWithVowels(wordList);
