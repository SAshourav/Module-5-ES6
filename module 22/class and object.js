class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
    }
}

const student1 = new Student(1,'Khan');
const student2 = new Student(2, 'Ahmed');
console.log(student1, student2);
console.log(student1.name, student2.name);