const person = {
    name: 'Sasha',
    age: 32,
    isProgrammer: true,
    languages: ['Ru', 'Ua', 'En'],
    // 'complex key': 'Complex Value',
    // ['key_' + (1 + 3)]: 'Computed Key',
    greet() {
        console.log('greet from person')
    },
    info() {
        console.info('Информация про человека по имени:', this.name)
    }
}

/* console.log(person.name)
console.log(person['age'])
console.log(person['complex key'])
person.greet()

person.languages.push('De')
delete person['key_4']   //Удаление ключа из объекта
console.log(person) */


//          ДЛИННАЯ СТАРАЯ ЗАПИСЬ
// const name = person.name
// const age = person.age
// const languages = person.languages

//          НОВЫЙ СИНТАКСИС - ДЕСТРУКТУРИЗАЦИЯ
/* const {name, age: personAge = 10, languages} = person
console.log(name, personAge, languages) */

//          ПРОЙТИ ПО ОБЪЕКТУ ЦИКЛОМ

/* for (let key in person) {
    if (person.hasOwnProperty(key)) {
        console.log('key:', key)
        console.log('value:', person[key])
    }
} */

/* Object.keys(person).forEach(key => {
    console.log('key:', key)
    console.log('value:', person[key])
}) */


//          КОНТЕКСТ ВЫЗОВА
// person.info()

const logger = {
    keys() {
        console.log('[Object Keys]: ', Object.keys(this))
    },
    keyAndValues() {
        //          Вариант 1
        Object.keys(this).forEach(key => {
            console.log(`"${key}": ${this[key]}`)
        })
        //          Вариант 2
        /* Object.keys(this).forEach(function (key) {
            console.log(`"${key}": ${this[key]}`)
        }.bind(this)) */
    },

    withParams(top = false, between = false, bottom = false) {
        if (top) {
            console.log('-------- Start --------')
        }
        Object.keys(this).forEach((key, index, array) => {
            console.log(`"${key}": ${this[key]}`)
            if (between && index !== array.length - 1) {
                console.log('----------------')
            }
        })

        if (bottom) {
            console.log('-------- End --------')
        }
    }
}
//          BIND
// const bound = logger.keys.bind(person)
// bound()
//          CALL - Отличия от bind, что он не возвращает функцию, а сразу ее вызывает
// logger.keys.call(person)
// logger.keyAndValues.call(person)
// logger.withParams.call(person, true, true, true)

//          APPLY - Метод Call принимает в себя максимальное кол-во параметров функции, 
//          а метод APPLY всегда 2 и второй является
logger.withParams.apply(person, [true, true, true])