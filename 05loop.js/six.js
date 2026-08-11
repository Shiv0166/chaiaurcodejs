//for each return nhi krta hh
// const coding = ["js", "ruby","cpp","python"]

// const val = coding.forEach( (item)=>{
//     console.log(item);
//     return item
// })

// console.log(val) /// it will return undefined so the test case will fail if we want to return anything 
//so we use filter to return the values 


//use filter operation, filter bhi apne andr call back krta hh 
const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter( (nums)=> (nums)>4)
// console.log(newNums)

// if we make an curly braces to hmmne yha pr scope open krliya hh to return krna hoga wrna scope ko hatana hoga 
// const newNums = myNums.filter( (nums)=> {
//     return nums>4 // yha curly braces on krne pr scope dusra ho jata hh 
// })

// console.log(newNums);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk)=> bk.genre === 'History')

  //if we use curly braces and we also add the logical condition 
  userBooks = books.filter( (bk) => { return bk.publish >=2000 })
  console.log(userBooks)



  // filter khud return krta hh but ap scope on krte ho to return krna hoga 
  //filter tru or false jaisa km krta h agr condition satisfy to return krega 