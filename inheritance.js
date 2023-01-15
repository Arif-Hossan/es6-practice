class Parent {
  constructor() {
    this.fatherName = "Doe";
  }
}

class Child extends Parent {
  constructor(name) {
    super();
    this.name = name;
  }
  getFullName() {
    return this.name + " " + this.fatherName;
  }
}
const firstBaby = new Child("Tomato");
const secondBaby = new Child("Alu");
console.log(firstBaby);
console.log(secondBaby);

// access method of child class
console.log(firstBaby.getFullName());
