

//Example:
// for (initialization; condition; final-expression) {
    // code to be executed
// }

// for (let i = 1; i <= 5; i++) {
//     console.log(i);
// }

// Initialization: This step is executed first and only once, which sets up the loop. It usually initializes one or more loop counters.
// Condition: Before each iteration of the loop, the condition is evaluated. If it's true, the loop continues; if it's false, the loop stops.
// Final-expression: After each iteration of the loop, this expression is executed. It usually increments or decrements the loop counter.


// Challenge 1: Sum of Even Numbers
// Write a JavaScript program that initializes an array with numbers 1 through 20 and then uses a for loop to calculate the sum of all even numbers in the array.

let total = 0

for (let i = 1; i <= 20; i++) {
    
    if (i % 2 == 0) {
        total += i  
        // let array = [1,2,3,4,5]
        // array.reduce((sum, curr) => sum + curr, 0)
        // console.log(i) 
    }
    // console.log(total)
}


// Challenge 2: Reverse Array
// Write a JavaScript program that takes an array of integers and uses a for loop to reverse the array without using the built-in .reverse() method.
// let array = [1,2,3,4,5]
// // let index = -1

// function revArr(arr) {                          //? reviewed and analized code
//     let arrBucket = []
//     for (let i = arr.length -1; i >= 0; i--) {
//         arrBucket.push(i)
//         // console.log(i)
//     }
//    return arrBucket
// }

// console.log(revArr(array))



// Challenge 3: Find Maximum Value
// Create an array of random numbers. Then, write a JavaScript program that uses a for loop to go through the array and find the maximum value.
let array = [1,2,3,4,5,20]

function maxValue(arr) {
    const max = Math.max(...arr)
    //  return max
    arr.forEach(item => {
        item == max ? item : 0 
    })
    
    return max
     
    
}
 console.log(maxValue(array))

// Challenge 4: Count Occurrences
// Given an array of strings and a particular string, write a JavaScript program that uses a for loop to count how many times that particular string appears in the array.

// Challenge 5: Fibonacci Sequence
// Write a JavaScript program that uses a for loop to create an array storing the Fibonacci sequence up to the 10th number.

// Challenge 6: Array of Squares
// Initialize an empty array and use a for loop to fill it with the squares of integers from 1 to 10.

// Challenge 7: Remove Duplicates
// Given an array of integers, write a JavaScript program that uses a for loop to remove duplicate values from the array.

// Challenge 8: Character Count
// Given a string, write a JavaScript program that uses a for loop to count the occurrence of each character and stores the counts in an object.

// Challenge 9: Merge Arrays
// Write a JavaScript program that takes two arrays of the same length and uses a for loop to create a new array, where each element is the sum of the elements at that index from the input arrays.

// Challenge 10: Find Common Elements
// Write a JavaScript program that takes two arrays and uses a for loop to find and store common elements in a new array.