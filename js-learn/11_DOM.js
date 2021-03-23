//          DOCUMENTS OBJECT MODEL

const heading = document.getElementById('hello')
// console.dir(heading)
// console.dir(heading.textContent)
// const heading2 = document.getElementsByTagName('h2') // Старый метод
// const heading2 = document.getElementsByClassName('h2-class')[0] // Старый метод
//          QUERY запросы (document.querySelector всегда возвращает 1 элемент, первый попавшийся)
// const heading2 = document.querySelector('.h2-class')
// const heading2 = document.querySelector('#sub-hello')

const heading2 = document.querySelector('h2')
// console.dir(heading2)
//      Как достучаться до второго h2
// Вариант 1
/* const heading3 = heading2.nextElementSibling
console.log(heading3) */
// Вариант 2
const h2List = document.querySelectorAll('h2');
// console.log(h2List)
// 2.1
// const heading3 = h2List[1]
// 2.2
const heading3 = h2List[h2List.length - 1]
// console.log(heading3)




setTimeout(() => {
    addStylesTo(heading, 'JavaScript')
}, 1500)

setTimeout(() => {
    addStylesTo(heading2, 'Практикуйся', 'blue')
}, 3000)

const link = heading3.querySelector('a');
link.addEventListener('click', (e) => {
    event.preventDefault()
    console.log('click', e.target.getAttribute('href'))
    const url = e.target.getAttribute('href')

    window.location = url
})

setTimeout(() => {
    addStylesTo(link, 'И все получится', 'yellow', '2rem')
}, 4500)

function addStylesTo(node, text, color = 'red', fontSize) {
    node.textContent = text
    node.style.color = color
    node.style.textAlign = 'center'
    node.style.backgroundColor = 'black'
    node.style.padding = '2rem'
    node.style.display = 'block'
    node.style.width = '100%'

    if (fontSize) {
        node.style.fontSize = fontSize
    }
}

// https://developer.mozilla.org/ru/docs/Web/Events

heading.onclick = () => {
    if (heading.style.color === 'red') {
        heading.style.color = 'black'
        heading.style.backgroundColor = 'white'
    } else {
        heading.style.color = 'red'
        heading.style.backgroundColor = 'black'
    }
}

heading2.addEventListener('dblclick', () => {
    if (heading2.style.color === 'blue') {
        heading2.style.color = 'black'
        heading2.style.backgroundColor = 'white'
    } else {
        heading2.style.color = 'blue'
        heading2.style.backgroundColor = 'black'
    }
})