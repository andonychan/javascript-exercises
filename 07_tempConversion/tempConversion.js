const ftoc = function(num) {
  return Math.round(((num-32)*5/9)*1e1)/1e1;
};

const ctof = function(num) {
  return Math.round((((9*num)/5+32)*1e1))/1e1;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
