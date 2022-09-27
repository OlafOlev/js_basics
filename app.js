const li = document.createElement('li')
li.className ='collection-item'
let text = document.createTextNode('Study Element creation')
li.appendChild(text)

const a = document.createElement('a')
a.className = 'blue-text text-darken-2 secondary-content'
a.innerText = 'x'
a.setAttribute('href', '#')
li.appendChild(a)
const list = document.querySelector('ul')
list.appendChild(li)
console.log(list)
