// let numbers = [13, 12, 24, 30]; /*
// //double the array elements
// let double = numbers.map((n) => n * 2);
// console.log(double);

// let friends = ["John Smith", "Sussan Doe", "Tom Snow", "Jenifer Lopez"];
// // return the first letter of every name
// let firstLetterOfFriends = friends.map((friendName) => friendName[0]);
// console.log(firstLetterOfFriends);
// //return the first name of friends array list
// let firstName = friends.map((friendName) => friendName.split(" ")[0]);
// console.log(firstName);
// //return the last name of friends array list
// let lastName = friends.map((friendName) => friendName.split(" ")[1]);
// console.log(lastName);

// */
// // conventional way
// function doubleIt(numbers) {
//   let output = [];
//   for (number of numbers) {
//     // let double = number * 2;//normal way
//     let double = doubleOld(number);
//     output.push(double);
//   }
//   return output;
// }
// /*
// function doubleOld(number) {
//   let doubleNumber = number * 2;
//   return doubleNumber;
// }
// */
// //arrow function
// let doubleOld = (number) => number * 2;

// let result = doubleIt(numbers);
// console.log(result);
// //declare a function inside map so that it can call the function for every number for the array
// let makeDouble = numbers.map(doubleOld);
// console.log(makeDouble);

// let products = [
//   {id: 1, name: "Mobile", price: 40500},
//   {id: 2, name: "Laptop", price: 80500},
//   {id: 3, name: "Phone", price: 30500},
//   {id: 4, name: "Watch", price: 10500}
// ]

// let itemName= products.map(product=>product.name);
// console.log('Item Name',itemName);

// let itemPrice= products.map(product=>product.price);
// console.log('Item Price',itemPrice);

// //reformat objects in an array
// let reformat= products.map(({id,name})=>({[id]:name}));//same name as object
// console.log(reformat);

// //Using map() on sparse array
// console.log(
//   [2,,5].map((x,index)=>{
//     console.log(`visit : ${index}`);
//     return x*2;
//   })
// );


console.log(['1','2','3'].map(parseInt));//[1, NaN, NaN]

console.log(['1','2','3'].map((str)=>parseInt(str)));


console.log(["1.1", "2.2e2", "3e300"].map((str)=>parseInt(str)));

