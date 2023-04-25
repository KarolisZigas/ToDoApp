var nameVar = "Karolis";
var nameVar = "Mike";
console.log("nameVar", nameVar);

let nameLet = 'Jen';
nameLet = "Julie";
console.log("nameLet", nameLet);

const nameConst = "Frank";
console.log("nameConst", nameConst);

// function getPetName() {
//     var petName = "Hal";
//     return petName;
// }
// getPetName();
// console.log(petName)

var fullName = "Karolis Žigas";
if (fullName) {
    var firstName = fullName.split(" ")[0];
    var lastName = fullName.split(" ")[1];
    console.log(firstName, lastName);
}