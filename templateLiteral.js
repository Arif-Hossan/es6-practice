let firstName = "John";
let lastName = "Doe";
let profession = "Web Developer";
// first approach
let sentence = firstName + " " + lastName + " is a " + profession;
console.log(sentence);
// with template literal
let sentence2 = `${firstName} ${lastName} is a ${profession}`;
console.log(sentence2);

//some operation with template literal
let a = 5;
let b = 6;
let sum= `Sum of ${a} ${b} is ${a+b}`;
console.log(sum);

//multiline
let description= "John Doe is a creative designer.\n"
+"His design is creative, unique.\n"
+"But he is anonymous.";
console.log(description);

//multiline with template literal
let anotherDescription=`John doe is a creative designer.
His design is creative , unique.
But he is anonymous.`;
console.log(anotherDescription);