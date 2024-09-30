/*
In this exercise, we will be counting the number of vowels that appear in a given string. 
For this exercise, consider the following to be vowels: a, e, i, o, and u.

Instruction
Create a function named numberOfVowels that will receive a string and return the number of vowels in that string.

*/

const numberOfVowels = function (data) {
  let vowels = 0
  for (let i = 0; i < data.length; i++) {
    if ((data[i] === "a") || (data[i] === "e") || (data[i] === "i") || (data[i] === "o") || (data[i] === "u")) {
      vowels++
    }
  }
  return vowels
};

console.log(numberOfVowels("orangees")); // 3
console.log(numberOfVowels("cornerstone college")); // 7
console.log(numberOfVowels("aeiou")); // 5

module.exports = numberOfVowels;
