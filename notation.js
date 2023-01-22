// object.propertyName
// object[expression]

let student = {
  name: "John",
  age: 15,
  class: "seven",
  marks: {
    math: 75,
    physics: 50,
    english: 80,
  },
};
//dot notation
let physicsMarks= student.marks.physics;
// console.log("physics",physicsMarks);
//bracket notation
let englishMarks=student['marks']['english'];
// console.log('english',englishMarks);

let subject='english';
let engMarks= student.marks[subject]
// let engMarks= student.marks.subject;//return undefined
console.log('english marks',engMarks);