const fs = require('fs');

fs.readFile('./hello.txt', (err, data)=>{
    if(err){
        console.log(err);
    }
    console.log(data.toString());
});

const file= fs.readFileSync('./hello.txt');
console.log(file.toString());

fs.appendFile('./hello.txt','This is so cool', err=>{
    if(err){
        console.log(err);
    }
})

fs.writeFile('Bye.txt','Sad to see you go',err=>{
    if(err){
        console.log(err);
    }
});

fs.unlink('./Bye.txt',err=>{
    if(err){
        console.log(err);
    }
    console.log('Inception');
})