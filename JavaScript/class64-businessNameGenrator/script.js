let rand = Math.random()

let First , Second, Third;

// lets genrate the first word

 rand = Math.random()

if (rand<0.33){
    let First = "Crazy"
//     0 0.33 0.66 1
}
else if (rand<0.66 && rand>=0.33) {
    First="Amezing"   
}
else{
    First="Fire"
}

// lets genrate the second word

rand = Math.random()

if (rand<0.33){
    let Second = "Engin"
//     0 0.33 0.66 1
}
else if (rand<0.66 && rand>=0.33) {
    Second="Foods"   
}
else{
    Second="Garments"
}

// lets genrate the Third word

rand = Math.random()

if (rand<0.33){
    let Third = "Bros"
//     0 0.33 0.66 1
}
else if (rand<0.66 && rand>=0.33) {
    Third="Limited"   
}
else{
    Third="Hub"
}

console.log(`${First} ${Second} ${Third}`)