// using of this keyword -> current context ko refer krta hh
const user= {
    username: "shivam",
    email : "shivam@gmail.com",

    welcomeMessage: function(){
        // console.log(`${this.username} , welcome to website `);
        // console.log(this);// it will refer the current context 
    }
}

// user.welcomeMessage()
// // now if we change the username to 
// user.username = "shiv"
// user.welcomeMessage()

// so the username chaneg 
//   username: 'shivam',
//   email: 'shivam@gmail.com',
//   welcomeMessage: [Function: welcomeMessage]
// }
// shiv , welcome to website 
// {
//   username: 'shiv',
//   email: 'shivam@gmail.com',
//   welcomeMessage: [Function: welcomeMessage]
// }

// if we comment out all and the run console.log(this) this will give you empty braces or empty object
// browser has window object hh


// console.log(this)//{}



// this.username sirf object me km krta hhh function me nhi 
function shiv(){
    const username = "shivam"
    // console.log(this.username)//undefined
}
// shiv()

// ARROW FUNCTION KAISE LIKHE BASIC SYNTAX\

const chai = () => {
    let username  = "shivam"
    console.log(this.username)//undefined
    console.log(this)//{}
}
chai()

// basic arrow function syntax 

const addTwo = (num1, num2) => {
    return num1 + num2
}
// is wale syntax ko explicit khte hh aur jha pr hm curly brace use krenge wha return krna hoga 
console.log(addTwo(3, 4)) // 7 


//implicit 
const arrOne = (num1, num2) => (num1 + num2)
console.log(addTwo(4,9)) // 13 so yha pr brqacket ke ander mtlb return hojayega 


// to return object 
const addThree = (num1, num2) => ({username: "shivam"}) //{ username: 'shivam' }
console.log(addThree(9,0))