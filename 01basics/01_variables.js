// we have to make an e commerce website and we need to store client id that can not change so we use const
//  and we also need to store the client name email city it can store in let 
const accountId = 1234
let accountEmail = "shivam@g.com"
var accountCity = "Muzaffarpur"

// let and var can be change 

accountEmail = "Karan@g.com"
accountCity = "Noida"

console.log(accountId)

/*
Prefer not to use var because of issue in block scope and finctional scope 

*/console.table([accountId, accountEmail, accountCity])