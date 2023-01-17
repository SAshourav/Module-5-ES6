const bottle = {
    color: 'yellow', //each of this is known as key
    price: 50,
    isCleaned: true,
    capacity: '1L'
}
const bottle2 = {
    color: 'yellow', //each of this is known as key
    price: 50,
    isCleaned: true,
    capacity: '1L'
}
const key = Object.keys(bottle);
const values = Object.values(bottle);
const KeyValue = Object.entries(bottle); //will giv 2D array


console.log(key);
console.log(values);
console.log(KeyValue); 
console.log("before deleting key");
console.log(bottle);

delete bottle.isCleaned ; //gonna delete this key

console.log("after deleting key");
console.log(bottle);

Object.seal(bottle); //after sealing you can only change the property value, nothing else

delete bottle.price ; //not gonna work now
bottle.price = 100; //this will work
bottle.height = 5; //not gonna work now

Object.freeze(bottle2); //after freezing you will be unable to change anything 




