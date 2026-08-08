const userEmail = "shiv@.com"

if(userEmail){
    console.log("Got user email")
}else{
    console.log("don't have user email")
}


const userEmmail = "" // empty string 

if(userEmmail){
    console.log("Got user email")
}else{
    console.log("don't have user email")
} //don't have user email


const userEemail = [] //empty array

if(userEemail){
    console.log("Got user email")
}else{
    console.log("don't have user email")
} //output-> Got user email


//falsy value kin kin value ko false mana jata h 

// false, 0, -0, BigInt 0n, ""(emptyString), null, undefined, NaN
//iske alawa saare truthy hh



// but some example  truthy value 
// string ke andr "0", "false" ye truthy value hh
// " ", [] ,{}, function(){}empty function 


// to check an object 
const obj = {}
    if(Object.keys(obj).length===0){
        console.log("Object is empty");
    }

//Nullish collesing operator (??): null undefined

let val1;
// val1 = 5 ?? 10 //5
// val1 = null??10 //10
// val1 = undefined ?? 15//15

// console.log(val1);


//ternary operator 
const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")