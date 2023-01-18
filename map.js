let numbers = [13, 12, 24, 30];
//double the array elements
let double = numbers.map((n) => n * 2);
console.log(double);

let friends = ["John Smith", "Sussan Doe", "Tom Snow", "Jenifer Lopez"];
// return the first letter of every name
let firstLetterOfFriends = friends.map((friendName) => friendName[0]);
console.log(firstLetterOfFriends);
//return the first name of friends array list
let firstName = friends.map((friendName) => friendName.split(" ")[0]);
console.log(firstName);
//return the last name of friends array list
let lastName = friends.map((friendName) => friendName.split(" ")[1]);
console.log(lastName);
