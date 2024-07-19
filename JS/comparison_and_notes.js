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
// stack memory - primitive         //if we change the data(copy) original value will not be affected.
var data="Rohit";
information=data;
information="Mohan"
console.log(information);
console.log(data);
// heap memory - reference          //If we change the data(copy) than original value will be affected.
var o_data={
    name:"Hari",
   email: "google.123@gmail.com"
}
var c_data=o_data
c_data.email="Facebook.@gamil.com"
console.log(o_data.email)
console.log(c_data.email)




