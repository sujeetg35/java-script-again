const accountId= 12312
let accountName="sujeetgg35@gmail.com"  
// var accountPassword="1122"  /* prefer not to use var bcz of issue in block scipe and function scope*/
let accountPassword="23234"
accountCity="bilaspur" /* bina kisi keyword ke bhi like let variable assign kar sakte hai but nahi karna hai */

// accountId=22  not allow bcz const var

let accountState; /* bina assign ke bhi ho sakta hai but result will be undefined */
console.log(accountId);
accountPassword=454545
accountCity="bhopal"
console.table([accountId,accountName,accountPassword,accountCity,accountState])