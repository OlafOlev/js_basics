const firstname = "Olaf Olev"
const surname = "Alakivi"

let val = firstname + " " + surname

val = "olaf"
val += surname

val = firstname.toUpperCase()
val = surname.toLowerCase()

val = surname[0]
val = surname.indexOf("l")
val = surname.lastIndexOf("i")

val = surname.charAt(2)
val = surname.charAt(surname.length - 1)

val = surname.substring(0, 4)
val = surname.slice(0,4)
val = surname.slice(-4)


const tags = "JS, HTML, CSS"
val = tags.split(",")

console.log(val[1].trim())
