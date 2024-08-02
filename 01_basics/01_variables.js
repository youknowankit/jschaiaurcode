/*
To declare constant you can use "const" keyword only.
*/
const accountId = 144553
// accountId = 2 // not allowed


/*
To declare variables you can use two keywords "let" & "var". 
"let" is used in modern coding & has a block scope. Prefer not to use var
because of issue in block scope and functional scope
*/
let accountEmail = "hitesh@google.com" //
var accountPassword = "12345"  //not used in modern coding as it has global scope


accountCity = "Jaipur" //js automatically assigns type of variable but not a good way
let accountState; //js lets you make an undefined variable which you can define later


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId); //prints acccountID to console



//table method prints value of all variables at once with index
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])