
// const cars = new Array ('Мазда','Мерседес','Форд')
const cars = ['Мазда', 'Форд', 'БМВ', 'Мерседес']
const fib = [1, 1, 2, 3, 5, 8, 13]
const people = [
    { name: 'Саша', budget: 4200 },
    { name: 'Петя', budget: 3500 },
    { name: 'Вася', budget: 1700 }
]

/* cars.push('Рено')
cars.unshift('Волга')

const firstCar = cars.shift()
const lastCar = cars.pop()

console.log(cars)
console.log(firstCar)
console.log(lastCar)

console.log(cars.reverse())
console.log(cars) */

//          Задача 1 (Развернуть строку)
/* const text = 'Привет, мы изучаем JS'
const reverseText = text.split('').reverse().join('')
console.log(reverseText) */

//          Задача 2 (Найти и поменять элемент)
const index = cars.indexOf('БМВ') // Метод indexOf хорош для примитивов, строчки, числа ...
cars[index] = 'Порше'
// console.log(cars)

/* const index2 = people.findIndex(function(person) {
    return person.budget === 3500
})
console.log(people[[index]]) */

/* const person = people.find(function(person) {
    return person.budget === 3500
})
console.log(person) */
/* let findedPerson
for (const person of people) {
    console.log(person)
    if (person.budget === 3500) {
        findedPerson = person
    }
} */

// const person = people.find(person => person.budget === 3500)
// console.log(person)


// cars.includes() // Проверка на наличие элемента true false

// const upperCaseCars = cars.map(car => {
//     return car.toUpperCase()
// })
// console.log(upperCaseCars)
// console.log(cars)

// const pow2Fib = fib.map(num => num ** 2)
// console.log(pow2Fib)
// // ИЛИ
// const pow2 = num => num ** 2
// const pow2Fib2 = fib.map(pow2)
// console.log(pow2Fib2)

/* const pow2 = num => num ** 2
const pow2Fib2 = fib.map(pow2)
const filteredNumbers = pow2Fib2.filter(num => num > 20)
console.log(pow2Fib2)
console.log(filteredNumbers) */

const people2 = [
    { name: 'Саша', budget: 4200 },
    { name: 'Петя', budget: 3500 },
    { name: 'Вася', budget: 1700 }
]

const allBudget = people2
    .filter(person => person.budget > 2000)
    .reduce((acc, person) => {
        acc += person.budget
        return acc
    }, 0)
console.log(allBudget)