const palindromes = function (word) {
    let processedWord = word.toLowerCase().replace(/[^a-z]/g,"");
    let new1 = processedWord.split('').reverse().join('');
    return (new1 === processedWord);
    //return (processedWord === processedWord.split('').reverse().join(''));
};

// Do not edit below this line
module.exports = palindromes;

