//function ka likhne ka tarikan
function sayMyname(){
    console.log("s");
    console.log("h");
    console.log("i")
    console.log("v");
}

//sayMyname is refrence of function and when you add parenrthesis it will execute the function

// sayMyname()


function addtwo(a, b){ // yha pr a, b hh wah parameters hh
    console.log(a+b);
}
// addtwo(2,4); //yha pr 2, 4 argument hh

// const result = addtwo(2,4)
// console.log(result) //undefined kyon ki function me return nhi hh to undefined aa rha hh
// 6
// undefined


function addtwo(a, b){ // yha pr a, b hh wah parameters hh
    let result = a+b
    return result
}
const result = addtwo(3, 5)
// console.log(result) //8

// here result in function and result outside the function is different and they are not the same 


function loginUserMessage(username){
    return `${username} just logged in`
}
// console.log(loginUserMessage("shivam"))

//agr  hmm koi value assign diya hi nhi tb kya hoga 
// console.log(loginUserMessage()) // undefined just logged in





// but app aisa chahte ho ki agr function value na bhi diya ho to bhi ek default vlue aajaye 
// function loginUseraaMessage(username = "livingthing"){
//     return `${username} just logged in`
// }
// console.log(loginUseraaMessage())
// // livingthing just logged i


//now lets example app cart me produnct add krte ja rhe ho aur mujhe sabka sum chahoiyeb
// so we use rest operator/spreadoperator
function calculateCartPrice(num1){
    return num1
}
// console.log(calculateCartPrice(2333)) //233

// console.log(calculateCartPrice(2333,2456,9089)) // it will give you 2333 but we want all price so we use rest operator


// --------------------
//three dots before parater 
function calculateCartPrice(...num1){
    return num1
}
// console.log(calculateCartPrice(2333,2456,9089))//[ 2333, 2456, 9089 ]


//underatnd the meaning of backtic ``

//ap object ko bhi use  kr skte ho 
const user = {
    username: "snitch -shirt",
    price: "2000"
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
} // yha pr anyObject de rhe hh functionke ander me hmra parameter tha 
// handleObject(user)



// now we can do with array
// yha pr bhi same krenge parameter ke sath 
const newArray = [122, 345, 678, 334456]
function returnSecondvalue(getArray){
    return getArray[1] // to access secondindexofarray
}
// console.log(returnSecondvalue(newArray))
