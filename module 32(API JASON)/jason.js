const user = {id: 1, name:"tis mar kha", email:"tismarkha@gmail.com"}
//JavaScript object Notation(JASON)
const userString = JSON.stringify(user);
console.log(userString);
console.log(user);

/* {"id":1,"name":"tis mar kha","email":"tismarkha@gmail.com"} (stringify object using jason)
{ id: 1, name: 'tis mar kha', email: 'tismarkha@gmail.com' }  (normal object)
*/

const complicatedUser = {
    name: "sabbir ahmed",
    address: {
        street: "becker street",
        houseNo: "221B"
    },
    salary: 20000,
    employee: ["aranb", "john", "rahim"],
    rich: false
}
console.log(complicatedUser);
const Jcompliuser = JSON.stringify(complicatedUser);
console.log(Jcompliuser);

/*
{
  name: 'sabbir ahmed',
  address: { street: 'becker street', houseNo: '221B' },
  salary: 20000,
  employee: [ 'aranb', 'john', 'rahim' ]
}
{"name":"sabbir ahmed","address":{"street":"becker street","houseNo":"221B"},"salary":20000,"employee":["aranb","john","rahim"]} (JSON update)

*/

//can go reverse also

const reverse = JSON.parse(Jcompliuser);
console.log(reverse);