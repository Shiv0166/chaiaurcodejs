const marvel_heros = ["thor", "ironman", "vison"]
const dc_hero = ["batma", "superman", "falsh"]

// if we do like marvel heros wale me push kroge to  let see
// marvel_heros.push(dc_hero);
// console.log(marvel_heros); // it will add the dc_hero array as a single elemment in the marvel_heros array
// it will give output in sinle elemnt od or 4 th elemnt of marvel_hero array [ 'thor', 'ironman', 'vison', [ 'batma', 'superman', 'falsh' ] ]

// we can use concat method to merge two array it will give usn new array
// const newArr = marvel_heros.concat(dc_hero);
// console.log(newArr); // it will give us new array with all the element of both array
// like this [ 'thor', 'ironman', 'vison', 'batma', 'superman', 'falsh' ]



// we can use spread operator two merge two array it will give us new array
// const newArr2 = [...marvel_heros, ...dc_hero];
// console.log(newArr2); // it will give us new array with all the elemnt of both array 


// lets take an example if array ke andar array
const arr1 = [1, 2, 3,[4,5,6],7,8,9,[10,[11,12]]];
console.log(arr1.flat(Infinity)) // iske use se saare nested array ke element ko single array me convert kr dega and it will give us new arraywith allthe element of the array and it will not manipulate the original array


//to change in array 
console.log(Array.from("shivam")) //it will give us new array with all the element of the string 
// [ 's', 'h', 'i', 'v', 'a', 'm' ]

//to check if it is array or not 
console.log(Array.isArray("mittal")) // false 

