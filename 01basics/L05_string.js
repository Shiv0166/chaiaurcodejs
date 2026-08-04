const name = "shivam"
const repoCount = 50

// console.log(name + repoCount + " is the value");  // to concatenate the string this is old method 


// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //this is new method to contcatinate the string 


// to declare a string this method give you lot's of property

const gameName = new String ("shivam kumar     ")// this is non primitive data type and it is stored in heap memory 
// console.log(gameName.length);
// ek br mdn string ka gothrough krlo taki saare property to it is benefits to in oplacement 
// console.log(gameName.indexOf('k'))


const newString = gameName.substring(0,4) // this will give you the string from index 0 to 4 but not include 4th index 
// console.log(newString);

//trim to eliminate the space at end and from starting 
const newString2 = gameName.trim()
// console.log(newString2); 

// to remove space from mid 
const newString3 = gameName.replace(/\s+/g, ' ').trim()
// console.log(newString3); //this will remove the space from mid and also starting and end of an string 

// go through the string method and in mdn 
// console.log(gameName.split('-'));//this will split the string into an array of string based on the chjarcter you provide in the split method