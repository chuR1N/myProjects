function calculateAge(year) {
    return 2020 - year;
}

// const myAge = calculateAge(1988)
// console.log(myAge)
// console.log(calculateAge(1988))

function logInfoAbout(name, year) {
    const age = calculateAge(year)

    if (age > 0) {
        console.log("Человек по имени " + name + "сейчас имеет возраст " + age)
    } else {
        console.log("Вообще-то это будущее")
    }
}

// logInfoAbout("Саша", 1988);
// logInfoAbout("Саша", 2021);



//                  FUNCTION DECLARATION
/* greet('Function Declaration ')
function greet(name) {
    console.log(name)
} */

//                  FUNCTION EXPRESSION - не может использоваться до объявления
/*
const greet2 = function greet2(name) {
    console.log(name)
}
greet2('Function Expression')

console.log(typeof greet)
console.dir(greet)
*/

// АНОНИМНЫЕ ФУНКЦИИ
/*
let counter = 0
const interval = setInterval(function () {
    if (counter === 5) {
        clearInterval(interval)
    } else {
        console.log(++counter)
    }
}, 1000)
*/


//                  СТРЕЛОЧНЫЕ ФУНКЦИИ
function greet(name) {
    console.log('Привет - ', name)
}

const arrow = (name) => {
    console.log('Привет - ', name)
}

const arrow2 = name => console.log('Привет - ', name)

greet('Обычная функция')
arrow('Стрелочная')
arrow2('Стрелочная сокращенная')

// const pow2 = num => {
//     return num**2
// }

const pow2 = num => num ** 2
console.log(pow2(5))

//                  ПАРАМЕТРЫ ПО УМОЛЧАНИЮ
const sum = (a, b = 1) => a + b
console.log(sum(41))

function sumAll(...all) {
    let result = 0
    for (let num of all) {
        result += num
    }
    return result
}

const res = sumAll(1, 2, 3, 4, 5, 6, 7)
console.log(res)


//                  ЗАМЫКАНИЯ
function createMember(name) {
    return function (lastName) {
        console.log(name + lastName)
    }
}

const logWithLastName = createMember('Sasha')
console.log(logWithLastName('Michurin'))
console.log(logWithLastName('Michurin'))