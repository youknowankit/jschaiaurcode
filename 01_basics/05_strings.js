/*
DEFINING A STRING IN JS

To define a string in JS: We can use either "" double or ''single quotes. 
*/
const name = "hitesh"
const repoCount = 50
const game = new String('hitesh-hc-com')  //using Objects of JS

/*To concatinate a String you can do so by using + with console.log but this is outdated. */
console.log(name + repoCount + " Value");

/*Modern way of writing string is using BackTick: Also called String Interpolation */
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);



/* When we define the string it is treated as string object and has key value pairs, length & functions
available along with it */
const gameName = new String('hitesh-hc-com')

console.log(gameName[0]);           //returns h because gameName[0] corresponds to h

/*We can also access prototype and it's properties */
console.log(gameName.__proto__);    //returns function/prototype

/*We can use properties available either direct or with proto directly. Without writing proto everytime. */
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));



/*IMPORTANT STRING METHODS */

/*SUBSTRING METHOD: slices the string between given values but last value (4) not included. Here
negative values are ignored and starts from zero.*/
console.log(newString);
const newString = gameName.substring(0, 4) 

/*SLICE METHOD: also slices the string between given values but last value (4) not included. But here
you can also give a negative value and it starts counting backwards*/
const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

/*TRIM METHOD: Removes extra space from the string. Used where user knowingly or unknowingly enters
extra spaces and we don't need them. */
const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

/*REPLACE METHOD: Replaces the desired part from the string */
const url = "https://hitesh.com/hitesh%20choudhary"
//replaces the '%20' with -"-"
console.log(url.replace('%20', '-'))

/*INCLUDES METHOD: Tells whether a particular keyword is present in the string or not*/
console.log(url.includes('sundar'))

/*SPLIT METHOD: Splits the string based on separator (here "-") & limit. Returns an array*/
const splitDash = new String('hitesh-hc-com')
console.log(splitDash.split('-'));


/*
HOMEWORK:
Go to Prototype & explore all string functions.
STRING IS THE STRONGEST PART OF ANY LANGUAGE.
*/