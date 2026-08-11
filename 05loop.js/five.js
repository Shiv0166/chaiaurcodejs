//for each 
// by default inject hota hh
// for each call back function  
const coding = ["js", "ruby","cpp","python"]
// coding.forEach( function(val){ // appa isme naam nhi dete h
//     console.log(val);
// })


//for each using arrow function 
coding.forEach( (item)=>{
    // console.log(item);
})


// iske pss bht sare parameter hote h


// coding.forEach((item, indexedDB, arr)=>{
//     console.log(item, indexedDB, arr);
// })

//array ke andr object ki value acccess krna hh 
//for each apka array ke hr elemnt ko acces kr leta hh so below apka array ke andr object hh to hr elemnt ko item access krlega 
const myCoding = [
    {
        languageName: "javascript",
        languageFileName : "js"
    },
    {
        language2: "cpp",
        language2FileName : "p" 
    }
]

myCoding.forEach( (item)=>{
    console.log(item.languageName);
})