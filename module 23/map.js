/* we can only use map for array .
when we call map(function), this takes all the element of array and call the function given in the parameter then keep the result in the array and return that array as a result   */

function doubleIt(num){
    return num*2;
}
const arr = [1,2,3,4,5,6,7,8];
const result = arr.map(doubleIt);
console.log(result);

//also you can give the function inside the parameter

const result2 = arr.map(x => x * 2);
console.log(result2);