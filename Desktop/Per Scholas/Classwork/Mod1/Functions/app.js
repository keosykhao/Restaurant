// functions are bits reusable code
// we can use the same function and just pass in new information
// functions have parameters and arguments
// write once and use multiple times

// ES5 function

// this is a function declaration
// function add(){
//     console.log(5+5)
// }
// // this is function call
// add()

// ES6 function

// var add = () => {
//     console.log(5+5)
// }

// var add = (x,y)  => {
//     console.log(x+y)
// }
// add(10,15)
// add(100,300)
// write a function that accepts 5 numbers and make the call

// var add = (a,b,c,d,e) => {
//     console.log(a+b+c+d+e)
// }
// add(1,2,3,4,5)

// write a function that accepts a users age,
//  if they are 18+ they can get in the club, 
// if they are 21+ they can drink
// use parameters and arguments


var club = (age) => {
    if(age >= 18){
        console.log("They can get in the club")
    }
    if(age >= 18 && age >= 21){
        console.log("They can get in the club and drink")
    }
    if(age >= 18 && age <21){
        console.log("They can get in the club but they can't drink")
    }
    else(
        console.log("Leave!")
    )

}
club(17)