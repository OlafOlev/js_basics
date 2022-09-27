let val;
//
// val = document.getElementById('task-form')
// val = document.getElementById('task-form').id
// val = document.getElementById('task-form').className
const taskTitle = document.getElementById("task-title")

// style
taskTitle.style.background = '#333'
taskTitle.style.color = '#fff'
taskTitle.style.padding = '15px'
// taskTitle.style.display = 'none'

// content
taskTitle.textContent = 'Define Tasks'
taskTitle.innerText = 'My Favorite Tasks'
taskTitle.innerHTML = '<b style="color:red">My Tasks</b>'

val = document.querySelector('ul')
val = document.querySelector('li')


// const task = document.querySelector('li')
// task.style.color = 'green'

// val = document.querySelector('li:last-child')
// document.querySelector('li:nth-child(1)').style.background = "#ccc"
// document.querySelector('li:nth-child(2)').style.background = "#f4f4f4"

val = document.querySelectorAll("li")
val = document.querySelectorAll("li:nth-child(odd)")
oddli = document.querySelectorAll("li:nth-child(odd)")

oddli.forEach((li)=> {
    li.style.background = '#ddd'
})
console.log(val)
