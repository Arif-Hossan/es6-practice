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