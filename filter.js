let numbers = [13, 12, 24, 30, 20, 25, 4, 37];
//return all numbers greater than 10
let bigNumbers = numbers.filter((number) => number > 10);
console.log("big numbers", bigNumbers);

//return all numbers greater than 10 using callback function
function findBig(value) {
  return value > 10;
}
let bigNumbers2 = numbers.filter(findBig);
console.log("bigNumbers2", bigNumbers2);

//return all numbers less than 15
let smallNumbers = numbers.filter((number) => number < 15);
console.log("small numbers", smallNumbers);

//return products which price greater than 40000
let products = [
  { id: 1, name: "Mobile", price: 40500 },
  { id: 2, name: "Laptop", price: 80500 },
  { id: 3, name: "Phone", price: 30500 },
  { id: 4, name: "Watch", price: 10500 },
];
let highPrice = products.filter((product) => product.price > 40000);
console.log("Hight Price", highPrice);
//return words which length greater than 6
const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];
const bigWords = words.filter((word) => word.length > 6);
console.log(bigWords);

//Searching in array
const fruits = ["apple", "banana", "grapes", "mango", "orange"];

function filterItem(array, query) {
  return array.filter((element) =>
    element.toLowerCase().includes(query.toLowerCase())
  );
}

let result = filterItem(fruits, "An");
console.log(result);
