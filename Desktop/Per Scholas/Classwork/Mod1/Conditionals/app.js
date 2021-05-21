 // Conditionals
// if(this is the condition to be tested){
//     this is the work that should happen based of the conditional
// }
var x = 50

if(x == 100){
    console.log("Hello")
}
else{
    console.log("Goodbye")
}



//  user should have a grade
//  if usersGrade is an greater than or equal to 90 they get an A, console.log("You get an A")
// if userGrade is greater than or equal to 80 and less than 90 = "You get a B"
//  c = 70's
// d= 65 and above
// f = anything less than 65
var userGrade = 56
if (userGrade >= 90){
    console.log("You get an A")
}
else if(userGrade >= 80){
    console.log("You get a B")
}
else if(userGrade >= 70 <80){
    console.log("You get a C")
}
else if(userGrade >= 65 <70){
    console.log("You get a B")
}
else{
    console.log("You get an F")
}
// write a conditional statement that will tell a users input is positive or negative

var number = 0
if (number > 0) {
    console.log("The number is positive");
}

else if (number == 0) {
  console.log("The number is zero");
}


else {
     console.log("The number is negative");
}