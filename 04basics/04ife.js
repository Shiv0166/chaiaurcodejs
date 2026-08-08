//immediateky invoked function expression

// aisa function jis ko immediately execute hojaye usko ife 
// ye bhi bolna hh global scope ke pollution se problem hoti hh kai br to us global scope ke pollution ko hatane ke liye ife use krte hh


(function chai(){
    console.log(`1DB CONNECTED`)
})(); 
// semicolon isliye taki code khtm hojayega 

//we can also write using arrow function 

( () => {
    console.log(`DB CONNECTED HH BHAI MERE `);
}) ();//unaned ife 

// do ife tb likhenge semicolon dena padega 
// parametr ife kaise likhenge 

( (name) => {
    console.log(`SHIVAM BHAI KAISE HH TOO ${name}`)
})('muzaffarpur')