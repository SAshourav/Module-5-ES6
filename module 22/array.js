let agesF = [18,19,20,21];
let agesC = [21,22,23,24,25,26,27];
let agesD = [28,29,30,31,32,33];
let combine1 = agesF.concat(agesC);
let combine2 = agesF.concat(agesC).concat(agesD).concat([5]);
let combine3 = [agesC,agesD,agesF,5];
let combine4 = [...agesC,...agesD,...agesF,5]; //this will take  all the values and combine into one array
console.log(combine1);
console.log(combine2);
console.log(combine3);
console.log(combine4);

let v1 = 5;
let v2 = 6;
let v3 = 7;
let result = Math.max(v1, v2, v3);//this will not work for an array
let arr = [5,6,7];
let result2 = Math.max(arr); //this will not work
let result3 = Math.max(...arr);
console.log(result);
console.log(result2); //it will result NaN
console.log(result3);