/*
if(function){
    // if statements
} else {
    // else statements
}


== equal -> ===
!== not equal -> !==
*/

// let personId = 23;
//
// console.log(personId)
//
// if(typeof personId === 'undefined') {
//     console.log('id is not correct')
// }
const color1= "yellow"

if(color1 === "red"){
    console.log("Stop!")
} else if(color1 === "yellow"){
    console.log("Attention!")
} else if(color1 === "green"){
    console.log("Go!")
} else {
    console.log("Error!")
}

const name = "Kadi"
const age = "1"

if(age > 0 && age <= 12){
    console.log(`${name} on laps`)
} else if(age > 12 && age <= 18){
    console.log(`${name} on nooruk`)
} else{
    console.log(`${name} on täiskasvanu`)
}

let id = 5

if(id === 100){
    console.log("Ok")
} else{
    console.log("Not")
}


// ? - ternary
console.log(id === 100 ? "Ok" : "Not")

// switch
const color = 'blue'

switch (color) {
    case "red":
        console.log('Stop!')
        break;
    case "yellow":
        console.log('Attention!')
        break;
    case "green":
        console.log('Go!')
        break;
    default:
        console.log("Error!")

}



