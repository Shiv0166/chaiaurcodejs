// memory are two types stack and heap 
// primitive data type stack 
let myYoutubename = "shivam"

let anothename = "mynewchannel"
anothername = "chaiaurcode" // this will not change the myyoutubbename because it is primitive data type and it is stored in stack memory 
 
// console.log(myYoutubename);
// console.log(anothername);


// curly bracket ke ander object hota hh 
let user = {
    name : "shivam",
    age : 22
}
let user2 = user // this will change the user object because it is non primitive data type and it is stored in heap memory 
user2.name = "shivamkumar"
// console.log(user.name); // shivamkumar 