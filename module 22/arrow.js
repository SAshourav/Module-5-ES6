//two normal way to declare a function

function doubleIt(num){
    return num*2;
}
let result = doubleIt(2);
console.log(result);

const doubleIt2 = function(num){
    return num*2;
}
let result2 = doubleIt2(4);
console.log(result2);

//lets see the short es6 way
//if there is only one parameter for the function then,
const doubleIt3 = num => num*2;
console.log(doubleIt3(2));
//for two parameters
const add = (n1,n2) => n1 + n2;
console.log(add(5,5));
//for empty parameters
const five = () => 5;
console.log(five());

//if we have many thing to do in a function

const bigFunc = (x,y) => {
    let add = x+y;
    let dif = x-y;
    let result = add*dif;
    return result;
}
console.log(bigFunc(5,3));