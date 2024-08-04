let score = "hitesh" //33 or 33abc

/* Suppose the value of score has come from the backend and you are not sure about the type of it.
So, it is better to check the type of it.*/




// NUMBER CONVERSION

console.log(typeof score); //Output: "number" with small "n" if score= 33
console.log(typeof(score));  //here you have passed score as a method

let valueInNumber = Number(score) 
/*You have to use data type name as first letter capital (Class Based).
Also when you pass a value to number class then it is a guarantee now that it has been
converted to a number*/

console.log(typeof valueInNumber); //number
/*What is someone has sent a value as 33abc? Then also the type comes out as number. How & why so?*/

console.log(valueInNumber); 
/*When we ask javascript to convert 33abc to number it does so but it assings it a value NaN:Not a Number.
So, you have to check and be careful for this. */

/* What a Number Method can/will convert to?

"33" => 33
"33abc" => NaN
"hitesh" = NaN
null= 0 //if matching temperature you must be careful
undefined= NaN
true => 1; 
false => 0

Note:
NaN: means Not a Number | But the typeof(NaN) is a number.

*/ 




//BOOLEAN CONVERSION

let isLoggedIn = "hitesh"
let booleanIsLoggedIn = Boolean(isLoggedIn)
/*Just like Number function coverts a given value to number, we have Boolean function 
to convert it to Boolean */

console.log(booleanIsLoggedIn);

/*What a Boolean Method can/will convert to?

1 => true; 
0 => false
"" => false
"hitesh" => true

*/




//STRING CONVERSION

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

/* String Function converts a given value to a string value. */




//OTHER CONVERSIONS LIKE OBJECTS ETC WE WILL LEARN LATER 
/* The browser mostly returns the values as strings and we have to convert them
to booleans, numbers, objects, array, etc */





// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion