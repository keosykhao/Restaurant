console.log("working")
// window.alert("Hello")
document.write("Coding is kicking my butt....")

document.write(10+5)

document.getElementById("sample").innerHTML = "Good Morning"

var work = () => {
    window.alert("Hello!")
}
var animalPicture = document.getElementById("animal")
console.log(animalPicture)
var changeAnimal = () => {
    animalPicture.src = "/images/cat.jpeg"
}
var changeBackToDog = () => {
    animalPicture.src = "/images/dog.jpeg"
};