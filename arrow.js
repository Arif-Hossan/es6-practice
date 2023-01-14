// const doubleIt = function (number) {
//   return number * 2;
// };
// arrow function with single parameter
const doubleIt = (number) => number * 2;

const result = doubleIt(5);
console.log(result);
//multiple parameter
const add = (number1, number2) => number1 + number2;
const sum = add(5, 15);
console.log(sum);
// without parameter
const give10 = () => 5;
const result2 = give10();
console.log(result2);
// multiple operation
const randomMath = (number1, number2) => {
  const sum = number1 + number2;
  const sub = number1 - number2;
  const result = sum * sub;
  return result; //important
};
const result3 = randomMath(5, 6);
console.log(result3);

// find the maximum number
let max = (a, b) => (a > b ? a : b);
let result4=max(15,50);
console.log(result4);