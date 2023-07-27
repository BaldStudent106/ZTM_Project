// Solve the below problems:


// #1) Check if this array includes the name "John".
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];

console.log(dragons.includes("John"));

// #2) Check if this array includes any name that has "John" inside of it. If it does, return that
// name or names in an array.
const dragonss = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
let newName=[];
const filterJohn = (name)=>{
    if (name.includes("John")){
        newName.push(name);
    }
}
    
dragonss.forEach(filterJohn);
console.log(newName);
// #3) Create a function that calulates the power of 100 of a number entered as a parameter

const powerOf100 = (num1)=>{
    num1 *100;
}

// #4) Useing your function from #3, put in the paramter 10000. What is the result?
// Research for yourself why you get this result

