let arr =[1,23,5,64,33]

// let newArr =[]

// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newArr.push(element**2)
    
// }

let newArr = arr.map((e,index  , array)=>{
   return e**2
})

console.log(newArr)
const greaterThanSeven =(e)=>{
    if(e>7){
           return true
    }
    return false

}

let arr2=[1,2,3,4,5,6]
 console.log(newArr.filter(greaterThanSeven))

 const red = (a,b)=>{
    return a+b
 }

 console.log(arr2.reduce(red))