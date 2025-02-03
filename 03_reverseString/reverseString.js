const reverseString = function(txt) {
    let strResult = ""; 
    let len = txt.length * (-1); 
    for (let i = -1; i >= len; i--)
    {
        strResult += txt.at(i);
    }
    return strResult; 
};

// Do not edit below this line
module.exports = reverseString;
