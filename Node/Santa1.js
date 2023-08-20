const fs = require('fs');

fs.readFile('./Santa1.txt',(err,raw)=>{
    if(err){
        console.log(err);
    }
    data = raw.toString();
    let num=0;
    let tracker=0;

    for (let char of data){
        if(char==="("){
            num+=1;
        }else if(char===")"){
            num-=1;
        }
        tracker+=1;
        if(num===-1){
            console.log(`The number of the tracker is ${tracker}`);
        }
    }

    
    console.log(num);
})