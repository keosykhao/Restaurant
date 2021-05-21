// function maxOfTwoNumber(x, y){
//     if(x >y){
//         console.log( x + " is greater than " + y)
//     }
//     else if(y > x){
//         console.log( y + " is greater than " + x)
//     }
// }
// maxOfTwoNumber(29,28)
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
// maxOfThree(7, 3, 2)

//  function isCharacterAVowel(letter){
//      if(letter === "a" ||letter ===  "e" ||letter ===  "i" ||letter ===  "o" ||letter ===  "u" ||letter ===  "A" ||letter ===  "E" ||letter ===  "I" ||letter ===  "O" ||letter ===  "U"){
//          console.log( letter + " true");
       
//      }
//      else{
//          console.log( letter + " false")
        
//      }
//  }
//  isCharacterAVowel("p")

// Define a function sumArray

function sumArray(arr){
    let sumArray = 0;
    for (let i = 0; i <arr.length; i++){
    sumArray += arr[i];
}
    
    return sumArray;
}

 console.log(sumArray([1,2,3,4]))

// // Define a function multiplyArray
//  function multiplyArray (arr) {
//      var multiplyArray = 1;
//      for (var i = 0; i <arr.length; i ++){
//         multiplyArray = multiplyArray * arr[i];
//      }
     
 
//      return multiplyArray;
//  }
//  console.log(multiplyArray([1,2,3,4]))

// Write a function that returns the num of arguments passed to the function when called
//  function howManyArguments(){
//      console.log(arguments.length);
//  }

//  howManyArguments("ten", 1, 4, 5)


// Define a function reverseString
// example jag testar should be ratset gaj


// set our string as a constant
// const str = 'software engineering';

// make a new string that will be the reverse of the string, first split the string into an array
// use reverse to reverese the order of the string
// join it back together
// const newStr = str
//      .split('') 
//     .reverse()
//     .join('');  
// console.log(newStr)



// Write a function findLongestWord

// function findLongestWord(str){
//     var words = str.split(" ");
//     var longest = "";
//    for (var word of words){
//        if(word.length > longest.length) longest = word;
//    }
//    return longest.length;
// }
// findLongestWord("Which word will be longer javascript or java");



// // Write a function filterLongestWords

// function filterLongestWords(str){
//     var words = str.split (" ")'
//     '
// }
// filterLongestWords("coding", "programming")
