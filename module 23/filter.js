const numbers = [12,13,14,25,16,57,18,19,20,21];
const oldNum = numbers.filter(num => num > 20);
console.log(oldNum);

// variable => (condition)

const products = [
    {id:1, name: 'iphone', price:100000},
    {id:2, name: 'iphone', price:5000},
    {id:3, name: 'iphone', price:20000},
    {id:3, name: 'iphone', price:14000}
]
const result = products.filter(product => product.price > 10000);
console.log(result+"\n");

//filter shob gula ke result e dey, find e shudhu first ta dey

const result2 = products.find(product => product.price > 10000);
console.log("Result of find: \n");
console.log(result2);