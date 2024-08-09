/*To understand arrays efficiently, we have to understand the basic data structures first. */

/*ARRAYS IN JAVA SCRIPT 

So, an array is an object which can store multiple values in a single variable.
JS arrays are:
1. Resizeable
2. Can store mixed data types
3. Array can be accessed by using index numbers
4. Arrays are zero- indexed
5. Copying an array creates shallow copies(same reference point) not deep copies (not same reference points)
*/

/*DEFINING ARRAYS IN JS: We can define arrays in JS as:
    const myArr= [0,1,2,3,4,5]
i.e. by simply using square brackets and putting values (elements) into it. A single arrays can store
different type of values for example Number, String, Boolean.
Also, have:
1. Length Property
2. Prototype
3. Prototype-> Prototype
*/
const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]
const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[1]);


/*ARRAY METHODS IN JAVASCRIPT*/

/*PUSH METHOD: It pushes a value inside an array at the end */
myArr.push(6)            //0,1,2,3,4,5,6
myArr.push(7)            //0,1,2,3,4,5,6,7   

/*PUSH METHOD: It pops out/ removes a value from the end */
myArr.pop()              //0,1,2,3,4,5,6

/*UNSHIFT METHOD: It inserts a value at the start and basically shifts other elements to higher position
But we will not prefer this methods as after using this if data is huge system will have unneccessary load 
in transferring all values.*/
myArr.unshift(9)

/*SHIFT METHOD: It removes a value from the start and basically shifts other elements to lower position. 
Not Preferred.*/
myArr.shift()

/*INCLUDES METHOD: Tells us whether some data is present in the array or not. */
console.log(myArr.includes(9));    //True or False

/*INDEXOF METHOD: Tells us index of data you are asking. For data not present index returned is -1 */
console.log(myArr.indexOf(3));

/*JOIN METHOD: Joins all values and converts to a string. So, basically main change is your data type. */
const newArr = myArr.join()
console.log(myArr);                 // [0,1,2,3,4,5]
console.log( newArr);               // 0,1,2,3,4,5
console.log(typeof newarr);         // String

/*SLICE METHOD: Returns a section of array. Last value is not included*/
console.log("A ", myArr);           // A [0,1,2,3,4,5]
const myn1 = myArr.slice(1, 3)      
console.log(myn1);                  // [1,2]
console.log("B ", myArr);           // B [0,1,2,3,4,5]

/*SPLICE METHOD: Changes the original array and here last value is counted*/
const myn2 = myArr.splice(1, 3)     
console.log("C ", myArr);           //[0,4,5] 
console.log(myn2);                  //[1,2,3]
