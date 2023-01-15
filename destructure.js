const person = {
  name: "John Doe",
  profession: "Designer",
  phone: "01704151623",
  address: "Pan Street",
  wifeName: "Susana Doe",

  introduction() {
    return `${name} is a creative ${profession}`;
  },
};
// traditional way of accessing object property
/*
console.log(person.name);
console.log(person.profession);
console.log(person.phone);*/

// destructure way of accessing object property
//single element
// as salary isn't the property of person that's why we get undefined
const { name, salary } = person;
console.log("salary= ", salary, "name= ", name);
const { profession, phone, introduction } = person;
console.log(introduction());
let numbers = [10, 15, 20, 22];
let [first] = numbers; //10
console.log(first);
let [firstNumber, secondNumber, ...restNumbers] = numbers;
console.log(firstNumber);
console.log(secondNumber);
console.log(restNumbers);

let friends = ["john", "Susan", "Smith", "Tom", "Emily"];
// let [firstPerson, ,lastPerson,...restPerson]=friends;
// console.log(firstPerson);
// console.log(lastPerson);
// console.log(restPerson);
let [p, q, ...[r, s]] = friends;
console.log(s);

//swapping variable
let a = 10;
let b = 5;
[a, b] = [b, a];
console.log("a=", a);
console.log("b=", b);

// swapping array element
let array = [10, 20, 30];
[array[1], array[2]] = [array[2], array[1]];
console.log(array);

// Parsing an array returned from a function
function age() {
  return [11, 12, 13];
}
const [x, y, z] = age();
console.log("x =", x);
console.log("y =", y);
console.log("z =", z);
