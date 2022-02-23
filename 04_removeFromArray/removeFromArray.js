const removeFromArray = function(...args) {
    const array = args[0]; //extract array from function
    const newArray = []; //create new array
    array.forEach((item) => {
        if (!args.includes(item)) {
            newArray.push(item);
        }
    })
    return newArray;
    
}


// Do not edit below this line
module.exports = removeFromArray; 


