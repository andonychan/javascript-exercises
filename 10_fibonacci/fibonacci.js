const fibonacci = function(num) {
    let term = 0;
    if (num == 0) {
        term = 0;
    }
    else if (num == 1) {
        term = 1;
    }
    else if (num < 0) {
        return 'OOPS';
    }
    else {
        term = fibonacci(num-1) + fibonacci(num-2);
    }
    return term;
};

// Do not edit below this line
module.exports = fibonacci;
