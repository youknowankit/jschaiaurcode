/*
DEFINING A NUMBER:
We generally use a const keyword along with a variable and assign number to it. For Ex:
const score = 400
*/

/*Here JS is automatically detecting it as a number*/
const score = 400   
console.log(score);           //400
/*If you want to explicity/strictly define it as a number then we can use new keyword with Number class */
const balance = new Number(100)
console.log(balance);        //[Number:100]


/*If you print this to the console then you will find there are some properties associated with 
number which are limited as compared to the properties of string. */

/*TOSTRING METHOD: converts the given number to the string. Then it gets additional properties of the 
string also.*/
    console.log(balance.toString().length);     //3
/*TOFIXED METHOD: adds in a given number specified number of decimal places */
    console.log(balance.toFixed(2));            //100.00
/*TOPRECISION METHOD: How many places of number you want to focus on */
    const otherNumber = 123.8966
    console.log(otherNumber.toPrecision(3));    //124
    const otherNumber2 = 1123.8966
    console.log(otherNumber2.toPrecision(3));    //1.12e+3
    const otherNumber3 = 123.8966
    console.log(otherNumber3.toPrecision(3));    //123.9
/*TOLOCALESTRING METHOD: Sometimes it becomes difficult to count zeros in a number so by using tolocalestring 
the number gets converted into a number with commas but as per US-Standard. To convert it to Indian Standard
we pass argument 'en-IN'*/
    const hundreds = 1000000
    console.log(hundreds.toLocaleString('en-IN'));

/*In competitive programming there is a concept of max and min value.
With Number function you get lot of functions or methods to use:

1. Number.MAX_VALUE             //Maximum value of a number
2. Number.isSafeInteger
3. Number.MAX_SAFE_INTEGER      //Maximum Safe Value that can be stored
4. Number.MIN_SAFE_INTEGER
5. Number.MIN_VALUE             //Minimum Value of a number

*/





/*+++++++++++++++++++++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++++++++++++++++++*/

/*Maths Library comes by default in JS  */
/*This is an object and has it's key:value pairs (visible in console) */
console.log(Math);
/*MATH.ABS METHOD: returns absolute value of a number leaving sign*/                   
console.log(Math.abs(-4));           
/*MATH.ROUND METHOD: used in rounding of a number  */
console.log(Math.round(4.6));
/*To control the round off to upper value or lower value, we have two methods namely ceil & Floor */
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
/*MATH.MIN: Gives minimum value among specified values */
console.log(Math.min(4, 3, 6, 8));
/*MATH.MAX: Gives maximum value among specified values */
console.log(Math.max(4, 3, 6, 8));
/*MATH.RANDOM: Returns a random value between 0 - 1 */
console.log(Math.random());
    /*Suppose you want random values but between specified range. As we know values are b/w 0-1 so,
    we multiply it by 10. But the value could be zero also. So, to avoid such a situation we add one to the
    function. */
    
    console.log((Math.random()*10) + 1); 
    console.log(Math.floor(Math.random()*10) + 1);

    /*How to fetch random values between specified range? 
    1. Define min, max
    2. Use Math.random()
    3. Multiply this with (max-min+1)    //Math.random() * (max-min+1)
        max-min: gives range for multiplacation for which you want values
        max-min +1: plus one removes that possibility where number becomes zero
    4. Wrap the function with Math.floor  //Math.floor(Math.random() * (max-min+1))
    5. Add the minimum value to the Function to set minimum value to specified limit 
        //(Math.floor(Math.random() * (max-min+1)) +min)
    */
    const min = 10
    const max = 20

    console.log(Math.floor(Math.random() * (max - min + 1)) + min)