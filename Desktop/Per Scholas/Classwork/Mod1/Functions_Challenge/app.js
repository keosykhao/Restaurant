// Write a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. 
// Use the if-then-else construct available in Javascript.
//  Do some googling to figure this out if you forget how conditionals work.




//  function maxOfTwoNumbers (num1, num2){
//      if(num1 > num2){
//          console.log(num1 + " is greater");
//      }
//      if(num2 > num1){
//         console.log(num2 + " is greater");
//      }
//      else{
//          console.log("Numbers are equal")
//      }
//     }
    

//  maxOfTwoNumbers (4, 4)


     

// Write a function maxOfThree that takes three numbers as arguments and returns the largest of them.
// function maxOfThree(num1, num2, num3){
//     if(num1 > num2 && num1 > num3){
//         console.log(num1)
//     }
//     if(num2 > num1 && num2 > num3) {
//        console.log(num2)
//     }
//     if(num3 > num1 && num3 > num2) {
//         console.log(num3)
//      }
// }
// maxOfThree(3, 2, 1)


// Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) 
// and returns true if it is a vowel, false otherwise

 function isCharacterAVowel(letter){
    if(letter === "a" ||letter ===  "e" ||letter ===  "i" ||letter ===  "o" ||letter ===  "u" ||letter ===  "A" ||letter ===  "E" ||letter ===  "I" ||letter ===  "O" ||letter ===  "U"){
        console.log( letter + " true");
       
    }
    else{
        console.log( letter + " false")
        
    }
}
isCharacterAVowel("E")


// Write a function charCount that takes a string and returns the length of the string.
function charCount(word){
    word = word.length
    console.log(word)

    
}
charCount("software")
// Write a function vowelCount that takes a String and returns the number of vowels in the String. 
// add a check for the string to be of 10 or less characters




