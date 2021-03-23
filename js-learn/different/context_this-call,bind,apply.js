const person = {
    name: 'Sasha',
    age: 32,
    logInfo: function (job, phone) {
        console.group(`${this.name} info`)
        console.log(`Name is ${this.name}`)
        console.log(`Age is ${this.age}`)
        console.log(`Job is ${job}`)
        console.log(`Phone is ${phone}`)
        console.groupEnd()
    }
}


const lena = {
    name: 'Elena',
    age: 23
}

//          Вариант 1 BIND - Возвращает функцию
// person.logInfo.bind(lena, 'FrontEnd', '80672323232')()

//          Вариант 2 CALL - Сразу вызывает функцию
// person.logInfo.call(lena, 'FrontEnd', '80672323232')

//          Вариант 3 APPLY - Всего 2 параметра (2-ой массив), сразу вызывает
// person.logInfo.apply(lena, ['FrontEnd', '80672323232'])


//          Примеры
const array = [1, 2, 3, 4, 5]

//          Вариант 1
// function multBy(arr, n) {
//     return arr.map(function (i) {
//         return i* n
//     })
// }
// console.log(multBy(array, 5))

//          Вариант 2
Array.prototype.multBy = function (n) {
    return this.map(function (i) {
        return i * n
    })
}

console.log(array.multBy(5))
