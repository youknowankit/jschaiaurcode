/*As per official documentation, the data types are divided into two types:
1. PRIMITIVE DATA TYPES: They are call by value. When you copy them then original reference to memory
is not given rather a separate copy and whatever changes you make are made to the copy. They are of 7 Types:
a. String
b. Number
c. Boolean 
d. Null (Not Zero, Not Empty String it means Just Empty)
e. Undefined (Varaible declared but value not defined)
f. Symbol (Used to make some value unique)
g. Big Int

2. NON-PRIMITIVE DATA TYPES: They are call by reference. You are given reference to the data type. e.g.
1. Arrays
2. Objects
3. Functions

Note: Difference is based on how the the data types are stored in memory and how they can be accessed by you.


Whether JS is a dynamically or statically typed language?
In Javascript, we donot define the data types for example the constant is number or boolean or some 
other value. JS automatically assigns such types. Hence, dynamically typed.

*/



/*PRIMITIVE DATA TYPES*/

const score = 100           //number
const scoreValue = 100.3    //decimal number

const isLoggedIn = false    //Boolean
const outsideTemp = null    //Null
let userEmail;              //undefined


/*Defining Symbols: We pass values to Symbol('123'). The two symbols are not same even though you
pass same values to the symbol.*/
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);  //false

/*When n is used with number it means the number is of type "BigInt" */
const bigNumber = 3456543576654356754n 





/* NON-PRIMITIVE DATA TYPES */



/*ARRAYS: Arrays are written in square brackets */
const heros = ["shaktiman", "naagraj", "doga"];

/*OBJECTS: Objects are written in curly braces.e.g.
{
    name: ankit
    age: 23
}

If you want to store it to some variable:
let myObj = { Now what do you want to store in object
    name: ankit
    age: 23
}
*/
let myObj = {
    name: "hitesh",
    age: 22
}


/*FUNCTION: Function can be declared by using function keyword parenthesis & curly braces 
e.g.  function (){  }

If you want to store this function to a variable:
const myFunc= function(){ What do you want to do inside function }
*/
const myFunction = function(){ 
    console.log("Hello world");
}

console.log(typeof anotherId);


/*When you check type of then values returned are as follows:
1. Undefined: undefined
2. Null: object
3. Boolean: boolean
4. Number: number
5. String: string 
6. Object(native and doesnot implement[(call)]): object
7. Object(native or host and does implement[(call)]): function
8. Object(host and doesnot implement[(call)]): Implementaton defined except may  not be "undefined",
"boolean", "number" or "string"/

So, basically non-primitive datatypes return datatypes as functions but for function datatype return data type
is called Object Function.

// https://262.ecma-international.org/5.1/#sec-11.4.3