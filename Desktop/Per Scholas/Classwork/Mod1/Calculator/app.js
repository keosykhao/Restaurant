

var add = () => {
    var addInputOne = document.getElementById("addInputOne").value;
var addInputTwo = document.getElementById("addInputTwo").value;
var sum;
     sum =  parseInt(addInputOne) + parseInt(addInputTwo)
     alert("The sum is " +  sum)

     console.log(addInputTwo)
     console.log(addInputOne)
     console.log(sum)
}
var minus = () => {
    var subtractInputOne = document.getElementById("subtractInputOne").value;
var subtractInputTwo = document.getElementById("subtractInputTwo").value;
var minus;
     minus =  parseInt(subtractInputOne) - parseInt(subtractInputTwo)
     alert("The subraction is " +  minus)
}

var minus = () => {
    var subtractInputOne = document.getElementById("subtractInputOne").value;
    var subtractInputTwo = document.getElementById("subtractInputTwo").value;
    var minus;
     minus =  parseInt(subtractInputOne) - parseInt(subtractInputTwo)
     alert("The subraction is " +  minus)
}
var division = () => {
    var divisionInputOne = document.getElementById("divisionInputOne").value;
    var divisionInputTwo = document.getElementById("divisionInputTwo").value;
    var division;
     division =  parseInt(divisionInputOne) / parseInt(divisionInputTwo)
     alert("The division is " +  division)
}
var multiply = () => {
    var multiplyInputOne = document.getElementById("multiplyInputOne").value;
var multiplyInputTwo = document.getElementById("multiplyInputTwo").value;
var multiply;
     multiply =  parseInt(multiplyInputOne) * parseInt(multiplyInputTwo)
     alert(`The the answer is ${multipy}`)
console.log(multipy)
    console.log(multiplyInputOne)
    console.log(multiplyInputTwo)
}
var average = () => {
    var avgInput1 = document.getElementById("avgInput1").value;
    var avgInput2 = document.getElementById("avgInput2").value;
    var avgInput3 = document.getElementById("avgInput3").value;
    var average;
    average = (parseInt(avgInput1)+ parseInt(avgInput2)+parseInt(avgInput3)) / 3
    alert("The average is " + average);
}
