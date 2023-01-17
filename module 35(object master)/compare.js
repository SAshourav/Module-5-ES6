const first = 2;
const second = 2;
console.log("normal number compare: \n");
if(first === second){
    console.log("they are same");
}else{
    console.log("they are different");
}

//this method does not work with array or object

const firstO = {a:2};
const secondO = {b:3};
const firstString = JSON.stringify(firstO);
const secondString = JSON.stringify(secondO);

console.log("\n object compare: \n");

if(firstString === secondString){
    console.log("they are same");
}else{
    console.log("they are different");
}

const firstO2 = {a:2, b:3, c:4};
const secondO2 = {b:3, a:2, c:4};
const thirdO2 = {a:2, b:3, c:4};

const firstString1 = JSON.stringify(firstO2);
const secondString2 = JSON.stringify(secondO2);
const secondString3 = JSON.stringify(thirdO2);

console.log("\n first1 to second2: \n");

if(firstString1 === secondString2){
    console.log("they are same");
}else{
    console.log("they are different");
}

console.log("\n first1 to third3: \n");

if(firstString1 === secondString3){
    console.log("they are same");
}else{
    console.log("they are different");
}

