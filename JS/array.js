/* Array contain list of element. It can be defined as given below:
const array_name = [list of element];
const array_name = new Array(list of element);      it contain differnet properties, which is given below.
array_name.length --> to see length of string used in array.
.unshift --> used to add element in array at position '0'(starting)
.push(3) --> to push element at the top 'n' 
.pop --> to pop or delete the element at top
*/
const arr=[9,8,7,4,5,6];
// Finding the differenct between 'slice' & 'splice'.
const sl= arr.slice(2,5);
console.log("slice effect ",sl);
console.log("slice effect in array", arr);
// It shows element for 2 to 5-1. and it doesn't affect the real array

sp= arr.splice(2,5);
console.log("Splice effect",sp)
console.log("splice affect in array =",arr);
// It shows element form 2 to 5 and it also affect the real array (i.e it the that part of splice).

const mc_hero=["Iron_man", "Thor","Hulk"]
const dc_hero=["Bat_man", "Super_man", "Flash"]
// add both heros
const all_hero= mc_hero.concat(dc_hero)
console.log(all_hero)

// If we try to do this by using .push, then problem occurs(i.e it treates  array as one element of that array.)
mc_hero.push(dc_hero)
console.log("mc_hero", mc_hero)

// another method 'spread operator'                 (used in professional life)
const all_heros=[...mc_hero, ...dc_hero]
console.log("spread method", all_heros)

// TO GET ALL ARRAY ELEMENT IN ONE
const mix=[1,2,3,[4,5,6],[4,5,[9,8]]]
const all_ele=mix.flat(Infinity);               // .flat = used to access array element inside another array element.
console.log(all_ele);                       // we can change (Infinity) to depth(2)

// To convet any data into Array
console.log(Array.isArray("Tiger_man"))
console.log(Array.from("Tiger_man"))        // If it's not able to convert then it display '[]'
 const car1="BWM"
 const car2="ferri"
 const car3="Lambo"
 // CONVERTING IT INTO ARRAY (of)
 const set_car=Array.of(car1,car2,car3)
 console.log(set_car)