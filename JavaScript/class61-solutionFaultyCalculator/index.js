/* Creat a Faulty Calculator Using JavaScript

This faulty calculator dose following

1. it takes two number as input from the user 
2. it perform wrong operation as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **
 

It performs wrong operation 10% of the times


*/

let random = Math.random()
let a =  prompt("Enter first number")

let c =  prompt("Enter operation")
let b =  prompt("Enter second number")

let obj={
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",

}



if (random > 0.1) {

    //perform correct calculation:
    alert(`The result is ${eval(`${a} ${c} ${b} `)}`)

    
}
else{
    //perform wrong calculation
    c=obj[c]
    alert(`The result is ${eval(`${a} ${c} ${b} `)}`)
}