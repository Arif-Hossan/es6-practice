let friends = ["x", "y", "z"];
let cousins = ["a", "b", "c", "d"];
// concating two array into single array
let all = friends.concat(cousins);
console.log(all);

// with the help of three dots
// let all2= [...friends,...cousins];
let all2 = [...friends, "p", ...cousins];
console.log(all2);

// finding maximum
let num1 = 500;
let num2 = 400;
let num3 = 700;
let maximum = Math.max(num1, num2, num3);
console.log(maximum);
// find max from array
let numbers = [400, 500, 600];
let max2 = Math.max(...numbers);
console.log(max2);

function sum(x, y, z) {
  return x + y + z;
}
// sum of numbers
console.log(sum(...numbers));
