let rollNumber="232U"
console.log(typeof rollNumber)
// changing the string value into number so
let changeNumber=Number(rollNumber)
// Now here is the problem, it will change the string into number but due to "U" it will diplay NaN (Not a Number)
console.log(typeof changeNumber)
console.log(changeNumber)

//If we put null--> 0, undefined-->NaN, true-->1