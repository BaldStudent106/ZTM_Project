// Create an object and an array which we will use in our facebook exercise. 

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.


// 2. Create an array which contains the object you have made above and name the array "database".

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".

var User={
    username:"Name",
    password:"Password",
};

var User2={
    username:"Name",
    password:"Password",
};

var User3={
    username:"Name",
    password:"Password",
};

var database=[User,User2,User3];

var newsfeed = [
    {
        username:"User1",
        timeline:2022,
    },
    {
        username:"User2",
        timeline:2022,
    },
    {
        username:"User3",
        timeline:2022,
    }
]

var userNamePrompt=prompt("Enter your user name");
var passwordPrompt=prompt("Enter your password");

function signInCheck(user,pass){
    for (var i =0; i<database.length;i++){
        if (user===database[i].username && pass===database[i].password){
            console.log(
                "Welcome!!"
            );
        }
            else{
                console.log("Fk Off");
            }
    }
}

signInCheck(userNamePrompt,passwordPrompt);