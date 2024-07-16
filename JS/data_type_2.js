"use strict"; //with the help of this code JS code are treated as new version of js

//alert(3+3) It will print 6 in  browser (console).but here this show error.
// To learn standard of JavaScript Go to ---> https://tc39.es/ecma262/
// Data type, there are different type of data type which are given below:-
/* 1. number
   2. symbol   =it represent each object differently. UNIQUE
   3. boolean   =it's has two value true/false
   4. null      =it's treated as object in js. stand alone value.
   5. undefined =to create this use create the variable and don't assign it a value.
   6. bigint   =It's used in share market etc
   7. string
   
   object */
   let age=20
   let active=true
   
   console.log(typeof"Program")
   console.log(typeof(age))
   console.log(typeof(active))
   //we should write code in readeable form.

   console.log(2**3) //2^3=8

   //Not important but it's confusing 
   console.log(+true) //It will display 1 
   //console.log(true+) It will display error
   console.log(1+"2")  //It will display 12 
   console.log(1+2+"3") //It will display 33 because first it sees number and add's it and then it joines.
   console.log("1"+2+3) // It will display 123 because first it see string.
   