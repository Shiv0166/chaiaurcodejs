// curly braces in function and if else ke sath aata hh to isko scope khte hh
// basically function or if else ke sath curly braces ko scope kehte hh 


// hm var kyon nhi use krte hh 
// if(true){
//     let a = 10
//     const b = 20
//     var c = 300
    
// }

// console.log(a); a is not defined and it is true because if ke andr a define hua hh 

// console.log(c);//300 c hh if ke ander to bhr value bloce scope ke bhr nhi aana chahiye to that is wrong
// that's why we can't use the var 

// if ke ander wale ko block scope and bhr wale ko globval scope kehte h

// browser pr console ka global scope and vs code ya code enviroment ka scope diffferent hota hh

//nested scope bhi hota hh -> scope ke ander scope 
 

// function one(){
//     const username = "shivam"

//     function two(){
//         const website  = "youtube"
//         console.log(username)
//     }
//     console.log(website) // yha pr ye code nhi run krega kyon ki website two ke ander define kiya hh to two ke andr hi chlega scope ke bhr use kr rhe h
//     two()
// }
// one()

//---------------Interesting--------
console.log(addOne(5))
function  addOne(num){
    return num+1
} // ye wala run kr jayega but arge hmmne function ko phle call kiya define krne se phle 




// console.log(addTwo(56))
// const addTwo = function(num){
//     return num+2
// }
// Cannot access 'addTwo' before initialization
// but ye wla nhi run karega to function kaise define krenge isse bhi frk pdta hh