//reduce it also callback fuction 
//reduce sbko sum krke de deta hh 
//accumulator khali variable di jati hh phli br accumulato ki value jo intialise kroge wahi hoga bd me value change hota hh 
// const myNums = [1,2,3]

// const myTotal = myNums.reduce( function(accumulator, currentvalue){
//     console.log(`acc: ${accumulator} and currentvalue: ${currentvalue}`);
//     return accumulator+currentvalue
// }, 0)//yha 0 accumulator ki intail value hh

// console.log(myTotal)

// //arrow function 
const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);