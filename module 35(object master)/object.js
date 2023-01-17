//making object with literals
const player = {};
player.name = 'Nirob';
player.role = 'batsman';
player.bat = () => {console.log('swing the bat');}; //method

const student = {
    name: 'sabbir', 
    age: 24, 
    class: 'nine',
    run: () => {console.log('run towards the class');} //method
};
console.log(player);
player.bat();
console.log(student);

//object with constructor

const project = new Object();
console.log(project);


//object create method
const item = Object.create(null);
console.log(item);
const calling = Object.create(student);
console.log(calling); //this will give empty object
console.log(calling.name); //this will show the name value from another object named student

//object making with class

class Person{
    name= 'Moti Miya';
    age= 40;
    constructor(address){
        this.address=address;
    }

}
person1 = new Person('Boalmari');

console.log(person1);