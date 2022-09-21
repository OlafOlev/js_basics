const firstname = "Olaf Olev"
const surname = "Alakivi"
const email = "olaf-olev.alakivi@voco.ee"
const department = "ITA21"

let result = '<ul>' +
    '<li><b>Name:</b>' + firstname + '</li>' +
    '<li><b>Surname:</b>' + surname + '</li>' +
    '<li><b>Email:</b>' + email + '</li>' +
    '<li><b>Department:</b>' + department + '</li>' +
    '</ul>'
result = `
    <ul>
        <li><b>Name: </b>${firstname}</li>
        <li><b>Surname: </b>${surname}</li>
        <li><b>Email: </b>${email}</li>
        <li><b>Department: </b>${department}</li>
    </ul>`

console.log(result)
document.body.innerHTML = result