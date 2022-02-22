const repeatString = function(word, n) {
    let result = '';
    while (n > 0) {
        result += word;
        n--;
    }
    while (n<0) {
        return 'ERROR';
    }
    return result;
};


// Do not edit below this line
module.exports = repeatString;


