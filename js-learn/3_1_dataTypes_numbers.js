// Number
const num = 42  //integer
const float = 42.32 //float
const pow = 10e3

console.log('[Number.MAX_SAFE_INTEGER]: ', Number.MAX_SAFE_INTEGER)
console.log('[Math.pow 53]: ', Math.pow(2, 53) - 1)
console.log('[Number.MIN_SAFE_INTEGER]: ', Number.MIN_SAFE_INTEGER)
console.log('[Number.MAX_VALUE]: ', Number.MAX_VALUE)
console.log('[Number.MIN_VALUE]: ', Number.MIN_VALUE)
console.log('[Number.POSITIVE_INFINITY]: ', Number.POSITIVE_INFINITY)
console.log('[Number.NEGATIVE_INFINITY]: ', Number.NEGATIVE_INFINITY)
console.log('[NaN]: ', Number.NaN)  // Not A Number
console.log(typeof NaN)
const weird = 2 / undefined
console.log(Number.isNaN(weird))
console.log(Number.isNaN(42))
console.log(Number.isFinite(Infinity))
console.log(Number.isFinite(42))

const stringInt = '42'
const stringFloat = '42.42'
console.log(stringInt + 2)   // Строка 422
console.log(parseInt(stringInt) + 2)   // Число 44
console.log(Number(stringInt) + 2)   // Число 44
console.log(+stringInt + 2)   // Число 44

console.log(parseFloat(stringFloat) + 2)    // Число 44.42
console.log(+stringFloat + 2)   // Число 44.42

console.log(0.4 + 0.2)   // не 0.6 а 0.6000000000000001
console.log(+((0.4 + 0.2).toFixed(1))) //или parseFloat

// BigIint
// console.log(9007199254740991999999n - 900719925474099199999n)
console.log(parseInt(10n) - 4)
console.log(10n - BigInt(4))



// Math
/* 
console.log(Math.E)
console.log(Math.PI) 

console.log(Math.sqrt(25))
console.log(Math.pow(5, 3))
console.log(Math.abs(-42))
console.log(Math.max(25, 12, 4, 44))
console.log(Math.min(25, 12, 4, 44))
console.log(Math.floor(4.9))
console.log(Math.ceil(4.9))
console.log(Math.round(4.9))
console.log(Math.trunc(4.9))
console.log(Math.random())
*/

// Example Math

function getRandomBetween(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min)
}

console.log(getRandomBetween(10, 42))