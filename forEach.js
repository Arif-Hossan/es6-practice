// The forEach() method executes a provided function once for each array element.
let names = ["John", "Sussan", "Tom"];
names.forEach((name) => console.log(name));

let products = ["Laptop", "Mobile", "Phone"];
let cart = [];
products.forEach((item) => {
  cart.push(item);
});
console.log(cart);
