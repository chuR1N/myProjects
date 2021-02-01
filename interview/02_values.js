// let a = 42
// let b = a
// b++
// console.log('a', a)
// console.log('b', b)

let a = [1, 2, 3]
// let b = a.concat() // полное копирование
let b = a // передача ссылки
b.push(4)

console.log('a', a)
console.log('b', b)

