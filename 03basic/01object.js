//object do tarike se bnta hh literals and constructors se 
// constructor se bnta hh wah singelton hota hh 


//Object literals
// yha pr key aur value dono hota hh ye object literals hh
const JsUser = {
    name:"Shivam",//yha pr name  string hh aur value bhi string hh
    location:"Bihar",
    age:"20",
    email: "shivam@gmail.com",
    isLoggedin:false,
    lastLoginDays:["Monaday", "Sunday"]
// yha pr hmmne object create kiya aur key value 
}
// object ko assign kaise kre??
console.log(JsUser.email) // maximum time . ka use krna hh 
console.log(JsUser["email"]) // dono same hh 
// dono me difference yh hh ki phle wale me key ko string me dena pdta hh dusre wale ko nhi dena pdta h
// [] wla tb jb"email":"shivam@gmail.com" aisa ho tb 


// to change the value of object 
JsUser.email = "shiva@cha.com"
//if we want not change the value we can freeze the 
// Object.freeze(JsUser)
JsUser.email = "chit@gmail.com"
// console.log(JsUser)



// we can also add function 
JsUser.greet = function(){
    console.log("hello shivam");
}
// we can refrence the same function in object
JsUser.gree2 = function(){
    console.log(`Hello shivam,${this.age} and ${this.location}`);
}

console.log(JsUser.greet());
console.log(JsUser.gree2());

//undefined kyon aa rha hh 