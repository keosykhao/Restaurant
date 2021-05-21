// class Person {
//     constructor(name, age, eyeColor){

//         this.name = name
//         this.age = age
//         this.eyeColor = eyeColor
//     }
// }
// // create a new object from the constructor, create a new var
// // keyword new allows us to create a new instance of this class, it will pass a new parameter

// var tory = new Person("Tory", "30", "black")
// var Batman = new Person("Bruce Wayne", "30", "Green")

// console.log(tory)
// console.log(Batman)

class Profile {
    constructor(name, email, password){
        this.name = name
        this.email = email
        this.password = password}
// create a method are functions that lives inside objects 
        sayHello(age){
            console.log("Hello my name is " + this.name + "My age is " + age )
        }
    }

// create a funcion
var createProfile =() =>{
    var tory = new Profile("tory", "blah@gmail.com", "******")
        console.log(tory)
}

var khol = new Profile("Khol", "khol@gmail.com", "*******")



console.log(khol)
// this extends the first class.  And super takes info from the first contructor and inserts it into the extended class
// You can add onto but you can't leave things out from first class
class Member extends Profile{
    constructor(name, email, password,memberPackage){
        super(name, email, password)
        // this.package is a the extended part of the constructor
        this.package = memberPackage 
    }

}
// create a new member
let mike = new Member("mike", "mike@gmail.com", "***********", "standard user")
console.log(mike)





