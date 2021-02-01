// console.log(sum (1, 41))
//
// function sum(a, b) {
//   return a + b
// }

//       var подвержен хостингу и выдаст undefined
// var i
// console.log(i)
// i = 42
// console.log(i)

//       const и let не подвержены хостингу и даст ReferenceError

// console.log(num)
// let num = 42
// console.log(num)

//        Function Expression & Function Declaration
console.log(square(25))

// function square(num) {
//   return num ** 2
// }

const square = function(num) {
  return num ** 2
}