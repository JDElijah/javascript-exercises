const removeFromArray = function(arr, ...args) {
    return arr.filter(val => !args.includes(val));
    /* The filter() method creates a new arrayy filled with elements that pass a test provided by a function
        The filter() method does not execute the function for empty elements. 
        The filter() method does not change the original array. 
     */

};

// Do not edit below this line
module.exports = removeFromArray;


const removeFromArrayV2 = function(arr, ...args) {
    const newArray = []; 
    arr.forEach((item) => {
        if (!args.includes(item)) {
            newArray.push(item);
        }
    })
    return newArray;
}