const name="acer";
price=120000
console.log(`The one of best laptop ${name} costes is around ${price}`)         // This is used in modern time.
//New way to decleare string
const brand=new String('Dell')                          //It is object
console.log(typeof name) 
console.log(typeof brand)

// Notes we can get obtain more information. if we go to 'console' and write the code of 5 line.
console.log(brand.toUpperCase())
console.log(brand)
// like wise we can use
// .slice(star_point, end_point)    to make substring, we can also give negative value to print in reverse order.
// .substring(1,7) 
// .trim()  is used to delete/remove space in string.
// .replace('replace_string','by_this')
// .includes('Is_this_value_is_given_in_string')    answer true/false.
// .split('based on what')          It breaks the string 

const value= new Number(100.123)  // We are setting the value in number(made) 
console.log(value.toString().length)  // Converting the number into string, and using its properties/functions.
console.log(value.toFixed(1))   // toFixed is Used to select required decimal number to display on the screen.
console.log(value.toPrecision(4))   // Use it carefully because it's used to round off the value.
console.log(value.toLocaleString('en-IN'))  // TO use comma in number to make it easy to read.
//----------------------------  Maths  -----------------

//console.log(Math);              //By typing this in (console) browser in math function can be seen.
console.log(Math.round(4.9));       // Used to round off value
console.log(Math.abs(-191));        // Used to make -ve value into +ve value (absolute)
// we can also use  .ceil=to convert (2.1->3, 2.9->3)   .floor=to take floor value (2.9->2)

console.log(Math.random());         // To generate random number but it give value between (0 to 1)

