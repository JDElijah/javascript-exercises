const palindromes = function (inputString) {
    // Consider only letterrs and numbers in a variable. 
    const alphanumerical ='abcdefghijklmnopqrstuvwxyz0123456789';

    // Convert the input string to lowercase, split to array of individual characters. 
    const arrayStr = inputString
        .toLowerCase()
        .split('')
        .filter((character) => alphanumerical.includes(character))
        .join(''); 
    
    // Create a new reversed string for comparison
    const reversedString = arrayStr.split('').reverse().join(''); 

    // Return the outcome of the comparison between the arrayStr and reversedString.
    return arrayStr === reversedString;

};

// Do not edit below this line
module.exports = palindromes;
