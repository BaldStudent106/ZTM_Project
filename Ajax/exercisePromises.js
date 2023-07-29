// Solve the questions below:

// #1) Create a promise that resolves in 4 seconds and returns "success" string

const promise1 = new Promise((resolve,reject) =>{
  setTimeout(resolve,4000,'success') 
    
})
// #2) Run the above promise and make it console.log "success"

const promise2 = new Promise((resolve,reject) =>{
  setTimeout(resolve,4000,'success') 
    
})

promise1.then(quote=>console.log(quote));


// #3) Read about Promise.resolve() and Promise.reject(). How can you make
// the above promise shorter with Promise.resolve() and console loggin "success"

const promise3 = Promise.resolve("success");
promise3.then(value => console.log(value));


// #4) Catch this error and console log 'Ooops something went wrong'
const promise4=Promise.reject('failed');
promise4.then(value=>console.log("Impossible lol")).catch(console.log("Haha"));


// #5) Use Promise.all to fetch all of these people from Star Wars (SWAPI) at the same time.
// Console.log the output and make sure it has a catch block as well.
const urls = [
  'http://swapi.dev/api/people/1',
  'http://swapi.dev/api/people/2',
  'http://swapi.dev/api/people/3',
  'http://swapi.dev/api/people/4'
]

const promise5 = urls.map((url)=>fetch(url).then(response=>response.json()));

Promise.all(promise5)
.then(value=>console.log(value));
// #6) Change one of your urls above to make it incorrect and fail the promise
// does your catch block handle it?


Promise.all(promise5)
.then(value=>console.log(value))
.catch(error=> console.log('Haha you dumb dumb'),console.log(error));
