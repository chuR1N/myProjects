//            Типы данных: null, undefined, boolean, number, string, object, symbol

// console.log(typeof 0)
// console.log(typeof true)
// console.log(typeof 'Javascript') // "", '', `` - литералы, чтобы передавать свойства
// console.log(typeof undefined) // переменная не объявлена или объявлена без значения. Либо функции, которые ничего не возвращают
// console.log(typeof Math)
// console.log(typeof Symbol('JS'))
// console.log(typeof null) // неточность у оператора typeof (выдает object)
// console.log(typeof function () {}) // вообще это объект, но для удобства выдает function
// console.log(typeof NaN) // Not a number, но опять же неточность у оператора typeof (выдает number)

//           Приведение типов
// let language = 'Javascript'
//
// if (language) {
//   console.log('The best language is: ', language)
// }

//        Falsy values
// '', 0, null, undefined, NaN, false

//            Строки и числа
// console.log(1 + '2') // string 12
// console.log('' + 1 + 0) // string 10
// console.log('' - 1 + 0) // number -1
// console.log('3' * '8') // number 24
// console.log(4 + 10 + 'px') // string 14px
// console.log('px' + 5 + 10) // string px510
// console.log('42' - 40) // number 2
// console.log('42px' - 2) // NaN
// console.log(null + 2) // number 2
// console.log(undefined + 42) // NaN

//     == vs ===
// console.log(2 == '2') // true
// console.log(2 === '2') // false
// console.log(undefined == null) // true
// console.log(undefined === null) // false
// console.log('0' == false) // true
// console.log('0' == 0) // true
// console.log(0 == 0) // true

// =====
// console.log(false == '') // true
// console.log(false == []) // true
// console.log(false == {}) // false
// console.log('' == 0) // true
// console.log('' == []) // true
// console.log('' == {}) // false
// console.log(0 == []) // true
// console.log(0 == {}) // false
// console.log(0 == null) // false





