const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
  return array.reduce((partialSum, a) => partialSum + a, 0);
};

const multiply = function(array) {
  return array.reduce((partialMultiple, a) => partialMultiple * a);  
};

const power = function(a, power) {
	return Math.pow(a, power);
};

const factorial = num => {
  console.log('oi')
  if (num < 0) 
    return -1;
  else if (num == 0) 
    return 1;
  else {
    return (num * factorial(num - 1));
  }
};
console.log(factorial(5))


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
