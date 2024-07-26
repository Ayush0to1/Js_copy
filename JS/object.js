// To add Symbole as key in object
const id= Symbol("23AD6")
const user = {
    "name":"Ultra User",                // we can also define it as (name)only. 
    age:21,                             //but while using "" we need to access it by (["here"]).
    location:"Baitadi",
    email:"hellomemo.email.com",
    lastLoginDay:["Monday","Saturday"],
    [id]:"12ASF5"
}


console.log(user["name"])       // Here we cannot use user.name
console.log(user.age) 
// To access symbole in object
console.log(user[id])
//Object.freeze(name)             //It is used to make variable to have same value(we can't change the value of that variables.)

// Creating a funtion for object
user.greeting=function(){
    console.log(`Welcome to our software Mr/Mrs, ${this.name}`)         //this. is used to display properties of object.
}
console.log(user.greeting())