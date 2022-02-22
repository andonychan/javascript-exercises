const reverseString = function(word) {
    let splitString = word.split(''); // => [h,e,l,l,o]
    let reverseStringArray = splitString.reverse();//=> [o,l,l,e,h]
    let joinStr = reverseStringArray.join('');
    return joinStr;
};

// Do not edit below this line
module.exports = reverseString;
