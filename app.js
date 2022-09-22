const person = {
    firstname: 'Kadi',
    surname: 'Tamm',
    age: 40,
    email:'kadi.tamm@gmail.com',
    hobbies: ['tennis', 'korvpall'],
    address: {
        city:'võru',
        county:'Võrumaa'
    },
    getBirthYear: function (){
        return 2022 - this.age
    }
}

let val
val = person
val = person.firstname
val = person['surname']
val = person['hobbies'][1]
val = person.address.city
val = person.address['city']
val = person.getBirthYear()

// for(let i = 0; i< person.hobbies.length; i++){
//     console.log(person.hobbies[i])
//     console.log(i)
// }

person.hobbies.forEach((hobbie, index) => {
    console.log(hobbie + " on element indeksiga " + index)
})

console.log(val)