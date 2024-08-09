/* 
DATES IN JS

*Dates in JS is a pain point as it is pretty messy to declare dates,compare dates & storing them.
*Dates in JS are objects and they represent a single moment in time in a platform independent format.
*Date objects encapsulate an integral number that represents milliseconds since the midnight at the beginning 
of January 1, 1970,UTC (the epoch).

In short, Dates are calculated in milliseconds and stored in string.
TC39 the team of JS working on JS features has motive to make Temporal as Global Object like Maths but as
of now this is not so and we have to work the old way.

DECLARING A DATE:
let myDate = new Date();
So, you created date object with an instance.
*/
let myDate = new Date()

/*DATE FUNCTIONS: These are the functions associated with the date values*/

/*TOSTRING METHOD: Converts the date into a string */
    console.log(myDate.toString());

/*TODATESTRING METHOD: Converts the date into a string */
console.log(myDate.toDateString());

/*TOISOSTRING METHOD: Converts the date into an ISO format string */
console.log(myDate.toISOString());

/*TOJSON METHOD: Converts the date into JSON */
console.log(myDate.toJSON());

/*TOLOCALESTRING METHOD: Converts the date into a locale string */
console.log(myDate.toLocaleString());

/*TOLOCALEDATESTRING METHOD: Converts the date into a locale date string */
console.log(myDate.toLocaleString());

/*TOLOCALETIMESTRING METHOD: Converts the date into a locale time stringstring */
console.log(myDate.toLocaleString());

/*TYPEOF METHOD: Checks the type of Date Object */
console.log(typeof myDate);             //object


/*These methods basically represent the ways in which Date & time could be represented,
convereted and used. And date is an object in JS.*/

let myCreatedDate1 = new Date(2023, 0, 23)
console.log(myCreatedDate1.toLocaleString());  // Mon Jan 23 2023
/*It prints the date only with the passed values but no time. 
Note: Months in JS start from 0 so '0' means Jan when in Array Format but YYYY-MM-DD remains same*/

let myCreatedDate2 = new Date(2023, 0, 23, 5, 3)
console.log(myCreatedDate2.toLocaleString());  // 1/23/2023,05:03:00 AM
/*It prints the date & time with the passed values.*/

let myCreatedDate3 = new Date("2023-01-14")   //YYYY-MM-DD
console.log(myCreatedDate3.toLocaleString()); //1/14/2023, 12:00:00 AM

let myCreatedDate4 = new Date("01-14-2023")   //MM-DD-YYYY
console.log(myCreatedDate4.toLocaleString()); //1/14/2023, 12:00:00 AM




/* ------------------------------CONCEPT  OF TIME STAMPS IN JAVA SCRIPT-------------------------------- */

/*TIMESTAMPS: Time stamps are basically the exact time value you want of an event. Used in quizzes 
puzzles and other time dependent applications. */

/*CREATING TIMESTAMP: You can use Date.now() function for creating a new Timestamp of now. But it returns
a millisecond value from the reference date.*/
let myTimeStamp = Date.now()   // returns a long number

/*How to get exact Time Stamp? */
console.log(myTimeStamp);                   //returns a timestamp
console.log(myCreatedDate);                 //returns date
console.log(myCreatedDate.getTime());       //returns timestamp from the date
/*Now you can easily compare above two values.*/
/*If you want to convert the milliseconds to seconds, then divide it with 1000 & remove decimals
For this, use either Math.floor or Math.round but not ceil */
console.log(Math.floor(Date.now()/1000));


/*Extracting data from the date */
let newDate = new Date() //Declares a new Date
console.log(newDate);    //prints current date
console.log(newDate.getMonth() + 1);  //prints the month but starts from zero so to get exact month add 1
console.log(newDate.getDay());    //Starts from monday so you get a number

/*You can also print the date using string interpolation */
`${newDate.getDay()} and the time`


/*In toLocaleString method you can define what you want so this makes it interesting.
Usual Syntax: newDate.toLocaleString('default', {}) */
newDate.toLocaleString('default', {
    weekday: "long",
    
})


/*CTRL + SPACEBAR : Displays the suggestion from VS-Code */

