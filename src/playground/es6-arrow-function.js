// function square(x) {
//     return x*x;
// }
// console.log(square(3));

// // const squareArrow = (x) => {
// //     return x*x;
// // };

// const squareArrow = (x) => x*x;

// console.log(squareArrow(5))

const fullName = "Karolis Žigas";
const getFirstName = (name) => {
    return console.log(name.split(" ")[0]);
}
getFirstName(fullName);
const getFirstNameShort = (name) => console.log(name.split(" ")[0]);
getFirstNameShort(fullName);