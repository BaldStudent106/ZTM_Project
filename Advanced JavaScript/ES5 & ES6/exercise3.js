// change everything below to the newer Javascript!

// let + const
// let a = 'test';
// let b = true;
// const c = 789;
// a = 'test2';


// // Destructuring
// var person = {
//     firstName : "John",
//     lastName  : "Doe",
//     age       : 50,
//     eyeColor  : "blue"
// };


// var firstName = person.firstName;
// var lastName = person.lastName;
// var age = person.age;
// var eyeColor = person.eyeColor;

// const {firstName, lastName, age, eyeColor}= person;


// // Object properties
// var a = 'test';
// var b = true;
// var c = 789;

// var okObj = {
//   a: a,
//   b: b,
//   c: c
// };

// var okObj = {a,b,c}


// Template strings
// var message = "Hello " + firstName + " have I met you before? I think we met in " + city + " last summer no???";
// firstName=""
// city="jb"
// var message = `Hello ${firstName} have I met you before? I think we met in ${city} + last summer no???`;
// console.log(message);

// default arguments
// default age to 10;
// function isValidAge(age=10) {
//     return age
// }

// console.log(isValidAge());
// // Symbol
// // Create a symbol: "This is my first Symbol"
// var symbol1= Symbol("This is my first symbol");

// // Arrow functions
// function whereAmI(username, location) {
//     if (username && location) {
//         return "I am not lost";
//     } else {
//         return "I am totally lost!";
//     }
// }

const whereAmI = (username,location) =>{
    return (username&&location ? "I am not lost" : "I am totally lost!");
}

console.log(whereAmI(true,true));