let numbers = [5, 6, 1, 2];
let sum = numbers.reduce(
  (accumulatorValue, currentValue) => accumulatorValue + currentValue,
  0
);
console.log(sum);

