const express  = require('express');
const bcrypt = require('bcrypt-nodejs');
const app = express();
const cors= require('cors');
const knex=require('knex');

const postgres =knex({
    client:'pg',
    connection:{
        host:'127.0.0.1',
        user:'postgres',
        password:'postgres',
        database:'smart-brain'
    }
})


const database = {
    users:[
        {
            id:'123',
            name:'John',
            email:'john@gmail.com',
            password:'cookies',
            entries:0,
            joined:new Date()
        },
        {
            id:'123',
            name:'John',
            email:'john@gmail.com',
            password:'cookies',
            entries:0,
            joined:new Date()
        },
        {
            id:'123',
            name:'John',
            email:'john@gmail.com',
            password:'cookies',
            entries:0,
            joined:new Date()
        }
    ]
}

app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{
    res.send(database.users);
})



app.post('/signin',(req,res)=>{
    console.log(req.body);
    if(req.body.email===database.users[0].email && 
        req.body.password === database.users[0].password){
            res.json('success');
        }else{
            res.status(400).json('error logging in');
        }
})

app.post('/register',(req,res)=>{
    const {email, name , password}=req.body;
    bcrypt.hash(password,null,null,function(err,hash){
        console.log(hash);
    })
    postgres('users')
    .returning('*')
    .insert({
        email:email,
        name:name,
        joined:new Date() 
    }).then(response=>{
        res.json(response)
    })
})

app.get('/profile/:id',(req,res)=>{
    const {id} = req.params;
    let found = false;
    postgres.select('*').from('users')
    .where({id:id})
    .then(user=>{
        res.json(user[0]); 
    })
    if(found){
        res.status(404).json('No such user');
    }

})

app.put('/image',(req,res)=>{
    const {id} = req.body;
    postgres('users').where('id','=',id)
    .increment('entries',1)
    .returning('entries')
    .then(entries =>{
        res.json(entries[0].entries);
    }) 
    })

app.listen(3001, ()=>{
    console.log("App is running on port 3001");
});

