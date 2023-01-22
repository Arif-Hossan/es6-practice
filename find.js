//find () returns the first element from array if no element is available
// then returns undefined
let numbers = [13, 100, 12, 24, 30, 20, 120, 25, 4, 37];
//when it found 100 it in second index it immediately return it
let bigNumber = numbers.find((number) => number > 24);
console.log(bigNumber);
//it return 13
let smallNumber = numbers.find((number) => number < 24);
console.log(smallNumber);

//return single product which price greater than 30000
let products = [
  { id: 1, name: "Mobile", price: 40500 },
  { id: 2, name: "Laptop", price: 80500 },
  { id: 3, name: "Phone", price: 30500 },
  { id: 4, name: "Watch", price: 10500 },
];
let highPriceItem = products.find((product) => product.price > 30000);
// let highPriceItem = products.find((product) => product.price > 90000);//undefined
console.log(highPriceItem);
//find the phone from the products array and return it
function isPhone(item) {
  return item.name == "Phone";
}
console.log(products.find(isPhone));

//Using arrow function and destructuring find the laptop
let result= products.find(({name})=>name=="Laptop");
console.log('Laptop',result);