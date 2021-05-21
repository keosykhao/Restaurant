//  selectors 


//  var header = document.getElementById('heading')
// console.log(header)
var paraOne = document.getElementsByClassName('paragraph')
console.log(paraOne)

// var paragraphs = document.getElementsByTagName('p')
// console.log(paragraphs)

var heading = document.querySelector('#heading')
console.log(heading)

var paragraphs = document.querySelectorAll('.paragraph')
console.log(paragraphs)

var container = document.querySelector('.box')
console.log(container)
// DOM Properties
// heading.innerHTML = '<h3> Good </h3>'
// innerText doesn't add an element, innerHTML does
// heading.innerText = 'Hello World'
// container.style.color = 'red'
// 

// container.style.border = 'solid 2px red'
// container.style.color = 'red'


// event listener add them to a specific element

var button = document.querySelector('#button')
console.log(button)

button.addEventListener('click', changeText)
{
    // container.style.color = 'blue'
}

// second way to add event listener instead adding the function in the argument add a function to the outside of the add event listener

function changeColor(){
    container.style.color = 'blue'
    container.style.border = 'solid 2px red'
}
function changeText(){
    container.style.border = 'solid 2px red'
}