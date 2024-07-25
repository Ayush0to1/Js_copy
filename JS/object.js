const user = {
    "name":"Ultra User",                // we can also define it as (name)only. 
    age:21,                             //but while using "" we need to access it by (["here"]).
    location:"Baitadi",
    email:"hellomemo.email.com",
    lastLoginDay:["Monday","Saturday"]
}

console.log(user["name"])       // Here we cannot use user.name
console.log(user.age) 