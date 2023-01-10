const person = {name: 'John', email: 'email@example.com', age: 15, phone: 01710 , gfName : "samira", car : "bmw"};
//two way to get the value from the object

const name = person.name; //method 1
const {email} = person; //method 2
const {phone , age} = person; 
const {gfName , car , salary} = person;  //salary is not present on the object so it will be undefined
console.log(name);
console.log(email);
console.log(phone,age);
console.log(gfName, car, salary);


//array destructuring

const friends = ['sakib','sakil' , 'kobita', 'golpo', 'sadhin', 'hridoy'];
const [first, second] = friends;
const [f1,f2,...rest] = friends;
console.log(first,second);
console.log(rest);