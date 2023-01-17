const numbers = [11,12,13,14,15,16,17,18,19,20,21];
for(const num of numbers) {
    console.log(num);
}

const bottle = {
    color: 'yellow', //each of this is known as key
    price: 50,
    isCleaned: true,
    capacity: '1L'
}
//for loop can not be applied on the object

//first option
console.log("optional system\n");
const keys = Object.keys(bottle);
for(const key of keys) {
    console.log(key,bottle[key]);
}

//direct for loop ; we just have to use 'in' instate 'of'
console.log("\ndirect loop system\n");
for(const key in bottle){
    console.log(key,bottle[key]);
}

//advanced system

console.log("\n advanced system\n");
const advanced = Object.entries(bottle); //remember , it gives you 2d array
for(const [key, value] of advanced){
    console.log(key,value);
}