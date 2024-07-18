//Rule but we don't these type of code
//WE only make clean code
console.log(null>=0)  // True
console.log(null==0) //False
console.log(null>0)  //false  

//Notes
//Data type is divided into 2 parts (on based of how data is accessed and put into the memory.)
/* 1.Primitive:
  String, Number, Boolearn, Null, Undefined, Symbol, BigInt
   2.Non-primitive(Reference) 
  Array, Objects, Functios*/

  const key = Symbol('123')
  const superkey = Symbol('123')
  //Here both are not equal.
  console.log(key==superkey)
   //BigInt is repersented by putting n is the last in the number.
   let account=32423345453435n

const hero=["superman", "batman", "spiderman"] //eg of array
const car = {
    name:"TATA",            //eg of object.
    type:"truck"
}
const work= function(){
    console.log("Car is started")       //eg of function.
}

//+++++++++++++++++++++++++++++++ stack and heap +++++++++++++++++++++++++++++++
// stack memory - primitive 
// heap memory - reference





