class Parent{
    constructor(){
        this.fatherName = 'holand';
        this.motherName = 'bengami';
    }
}
class Child extends Parent{  //after extending the parent this class will also have the element of parent class
    constructor(name){
        super();
        this.name = name;
    }
    fullName(){
        return this.name + ' ' + this.fatherName;
    }
}

const baby1 = new Child('tom');
const baby2 = new Child('shafin');
console.log(baby1);
console.log(baby1.fullName());