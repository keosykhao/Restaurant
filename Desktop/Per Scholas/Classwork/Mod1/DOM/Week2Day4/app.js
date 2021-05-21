var heading = document.querySelector('#heading')
console.log(heading)

var paraOne = document.getElementsByClassName('list')
console.log(paraOne)

newFunction();

function newFunction() {
    document.getElementById("heading").addEventListener("mouseover", mouseOver);
    document.getElementById("heading").addEventListener("mouseout", mouseOut);
}
