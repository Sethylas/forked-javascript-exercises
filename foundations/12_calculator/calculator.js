const add = function(a, b) { 
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((total, nums) => total + nums, 0);
};

const multiply = function(array) {
  return array.reduce((total, nums) => total * nums);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(n) {
  let product = 1;
	for (let i = n; i > 0; i--) {
    product *= i;
  }
  return product;
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
