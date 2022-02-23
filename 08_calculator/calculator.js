const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
  return a-b;
};

const sum = function(numArray) {
	let sumOf = 0;
  for (let i=0; i<numArray.length; i++) {
    num = parseInt(numArray[i]);
    sumOf += num;
  }
  return sumOf;
};

const multiply = function(numArray) {
  let mulOf = 1;
  for (let i=0; i<numArray.length; i++) {
    num = parseInt(numArray[i]);
    mulOf *= num;
  }
  return mulOf;
};

const power = function(a,b) {
  return a**b;
	
};

const factorial = function(num) {
  let fac = 1;
	for (let i = 1; i <= num; i++) {
    fac *= i;
  }
  return fac;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
