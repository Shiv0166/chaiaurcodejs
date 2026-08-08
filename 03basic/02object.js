//now we make object using constructor and it is singelton object 
const user = new Object()
//how to give name of the object
user.name = "shivam"
user.id = "12344"
user.isLoggedin = false
// console.log(user);


// now we make an object inside object
const regularUser = {
    email:"shivam@gmail.com",
    fullname: {
        firstname:"shivam",
        lastname:"singh",
    }
}

// console.log(regularUser);
// console.log(regularUser.fullname);


// jaise hmmne array ko merge kiya tha waise hi object ko bhi merge krskte hh

const obj1 = {a:"1",b:"2"}
const obj2 = {c:"3",d:"4"}
const obj4 = {e:"5",f:"6"}
//hmme insbko merge krna hh 


//agr hm aisa kre to
// const obj3 = {obj1, obj2, obj4}
// console.log(obj3) // to yha pr hmmne 3 object ko merge kiya but ye answer object ke objectaaiyega 

//so we use spread operator to merge the object
 
// const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3) //basically we use this in often

// we can access the key of object 
console.log(Object.keys(user)) // iska answer arrar me aata hh
console.log(Object.values(user))

//if you want to check if the key is present or not 
console.log(user.hasOwnProperty("name")) //true