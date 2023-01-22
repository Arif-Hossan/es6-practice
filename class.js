class Student {
    constructor(name,classes,grade){
        this.name=name;
        this.classes=classes;
        this.grade=grade;
        this.school="X school"
    }
}
const student1=new Student('John',5,'A+');
const student2=new Student('Snowy',6,'A-');

console.log(student1);
console.log(student2);
console.log(typeof student2.classes);

class Instructor {
  constructor(fname, lname, age, location) {
    this.fname = fname;
    this.lname = lname;
    this.age = age;
    this.location = location;
  }
  title = "Web Instructor";
  team = "Web Development";
  getFullName() {
    return this.fname + " " + this.lname;
  }
  static startSupportSession(time) {
    console.log(`Start support session at ${time}`);
  }
}

let john = new Instructor("John", "Doe", 26, "Sylhet");
console.log(john);
//accessing the getFullName method
let fullName = john.getFullName();
console.log(fullName);

//call static startSupportSession function
Instructor.startSupportSession("9 am");

console.log(john.title);
