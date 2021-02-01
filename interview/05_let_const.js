//        Let
// let a = 'Variable a'
// let b = 'Variable b'
//
// {
//   a = 'New Variable A'
//   let b = 'Local Variable B'
//   console.log('Scope A', a)
//   console.log('Scope B', b)
// }
// console.log('A', a)
// console.log('B', b)

//        Const
const a = 1
// a = 2    Если примитивный тип данных, то изменять его нельзя
const PORT = [] // Если непритмитвный тип данный (obj), то можно менять его внутренне состояние
PORT.push('1')
console.log(PORT)
