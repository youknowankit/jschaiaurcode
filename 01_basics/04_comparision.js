/*These basic comparison operators return a boolean value after comparison.
i.e. True or False so these are fairly easy to understand*/
console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);

/*Problem arises when we compare different data types */
console.log("2" > 1);    //true
console.log("02" > 1);   //true
/*It means javascript has converted string to number for comparsion. But this type of comparison doesn't
give a predictable result. So, whenever you compare two values ensure data types must be same. */


  

/*AVOID THESE CONVERSIONS AS THEY CREATE CONFUSIONS AND RESULTS MAY VARY. */
console.log(null > 0);  //true
console.log(null == 0); //true
console.log(null >= 0); //false
/*Why so?
The reason is that an equality check == and comparisons <= work differently.
Comparisons convert null to a number. treating it as 0.
That's why 3rd statement null>=0 is true and 1st statement null>0 is false. */
console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);
/*It gives all values as false. */




/*So, learning is: Comparison and Equality check are two different things. */



/*Strict Check "===" Triple Equals check values as well as data types*/
console.log("2" === 2);