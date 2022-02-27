const caesar = function(string, shift) {
    return string
    .split('') //convert string to array. eg. 'hello world!' returns ['h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd', '!']
    .map(char => charShift(char, shift)) //pass each array element through charShift function, to convert to code and shift as necessary.
    .join('') //convert array back to string
}

const codeSet = (code) => {return code < 97 ? 65 : 97};

function mod(m ,n) {
    return (m % n + n) % n;
}

function charShift(char, shift) {
    const code = char.charCodeAt();

    if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
        return String.fromCharCode(mod(code + shift - codeSet(code), 26) + codeSet(code));
    }

    else {
        return char;
    }
    
}

// Do not edit below this line
module.exports = caesar;


// A - 65; Z - 90; a - 97; z - 122