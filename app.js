// function greeting(name){
//     return `Hello, ${name}`
// }
//
// // greeting('Olaf')
// // let greet = greeting('olaf')
// // console.log(greet)
//
// const square = function(number) {
//     return number * number
// }
//
// let result = square(3)
// console.log(result)
(function(){
    console.log(`function is running`)
})();

(function(name){
    console.log(`Hello, ${name}!`)
})(`olaf`)

const todo = {
    add: function (){
        console.log(`add todo...`)
    },
    edit: function (){
        console.log(`edit todo....`)
    },
    delete: function (){
        console.log(`delete todo....`)
    },

}