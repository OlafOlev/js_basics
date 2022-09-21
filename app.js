const numbers1 = [69, 9000, 420, 666, 1]
const numbers2 = new Array(9000, 420, 666, 1)

let val

val = numbers1.length
val = numbers2.length

val = numbers1[1]
val = numbers1.indexOf(666)

val = Array.isArray(val)

numbers1.push(123)
numbers1.unshift(100)
numbers1.shift()
val = numbers1.concat(numbers2)


console.log(numbers1)
numbers1.sort(function (x,y) {
    return y - x
})
console.log(numbers1)