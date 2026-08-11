// for of 
//["","",""]
//array me objects honge 
// [{},{},{}]

const arr = [1,2,3,4,5]

// Object ka tatpray ye hh kis cheej pr lagana hh yaha pr arr hh
// for (const element of object) {
    
// }
//ye loop string kisi cheej pr lga skte hh 

for (const element of arr) {
    // console.log(element) 
    // for of arr ka direct value de deta hh othrewise forin me key deta hh 
}

// string ke upr 
const greeting = "Hello Shivam"
for (const greet of greeting) {
    // console.log(`Each character is ${greet}`)
}

// Maps is object , collectionof key and values and unique value store 

const map = new Map()
map.set('In', "India")
map.set('USA', "United State Of America")
// console.log(map)
// { 'In' => 'India', 'USA' => 'United State Of America' }

///for loop on map
for (const key of map) {
    // console.log(key)
} //this will give you answer like this [ 'In', 'India' ]
// [ 'USA', 'United State Of America' ] we not wanted as array so we do de structure 

for (const [key, value] of map) {
    // console.log(key, ':-', value)
}
// this will give you answer in In :- India
// USA :- United State Of America

// object pr forof wala iterate nhi karega 
// example 
const user = {
    game1 : 'superman',
    game2: 'batman'
}
for(const [key, value] of user){
    // console.log(key, ':-', value)
} // user is not iterable 