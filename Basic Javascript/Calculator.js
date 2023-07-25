
// Make a Calculator! using prompt(), and variables, make a program that does the following:
// 1. Prompts the user for first number.
// 2. Stores that first number
// 3. Prompts the user for the second number.
// 4. stores that number and responds with the SUM by using an alert.  


// BONUS: Make a program that can subtract, multiply, and also divide!

var firstNum=prompt("Give the first number");
firstNum=parseInt(firstNum);
var secondNum=prompt("Give the second number");
secondNum=parseInt(secondNum);
var action=prompt("1- Sum, 2- Subtract, 3-Multiple, 4-Divide");
var finalNum;
if(action==1){
    alert(firstNum+secondNum);
}else if(action==2){
    alert(firstNum-secondNum);
}else if(action==3){
    alert(firstNum*secondNum);
}else if(action==4){
    alert(firstNum/secondNum);
}else{
    alert("Wrong Number");
}