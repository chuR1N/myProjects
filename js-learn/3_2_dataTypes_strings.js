// const name = 'Саша'
// const age = 32

// const output = 'Привет меня зовут ' + name + ' и мой возраст ' + age + ' лет.'
// const output = `Привет, меня зовут ${name} и мой возраст ${age < 18 ? 'Несовершеннолетний' : 'Старик'} года.`

// const output = `
//     <div>This is div</div>
//     <p>this is p</p>
// `
// console.log(output)

// const name = 'Саша'
// console.log(name.length)
// console.log(name.toLowerCase())
// console.log(name.toUpperCase())
// console.log(name.charAt(2))
// console.log(name.indexOf('ша'))
// console.log(name.startsWith('Са'))
// console.log(name.endsWith('ша'))
// console.log(name.repeat(3))

// const string = '   password   '
// console.log(string.trim()) // очистка пробелов
// console.log(string.trimLeft())
// console.log(string.trimRight())

function logPerson(s, name, age) {
    if (age < 0) {
        age = 'Не родился'
    }
    return `${s[0]}${name}${s[1]}${age}${s[2]}`
}
const personName = 'Саша'
const personAge = 32

const output = logPerson`Имя: ${personName}, Возраст: ${personAge}`

console.log(output)