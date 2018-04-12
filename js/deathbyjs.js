/*eslint-env browser*/

//STEP 1

//function orderWord(){
//    var word = window.prompt("enter a word");
//    word = word.split("");
//    word = word.sort()
//    word = word.join("");
//    window.console.log(word);
//}
//orderWord();
//STEP 2
//function capFirstLetters () {
//    "use strict";
//    var finalText = " ";
//    var text = window.prompt("Enter a string");
//    text = text.split(" ");
//window.console.log(text.length);
//    for(var i = 0; i < text.length; i = i + 1){
//        finalText += text[i].toString().charAt(0).toUpperCase() + text[i].toString().slice(1) + " ";
////        window.console.log(finalText);
//    }
//    window.console.log(finalText.trim());
//}
//capFirstLetters()
//STEP 3
//function howManyVowels() { 
//    var phrase = window.prompt("Enter a string");
//    window.console.log(phrase.match(/[aeiou]/g).length);
//}
//howManyVowels();

//STEP 4
//function createRandomString(){
//    var numberArray = [];
//    var wordString = "";
//    for(var i = 0; i <= 7; i = i + 1){
//        var number = Math.floor((Math.random()*90)+65);
//        window.console.log(number);
//        numberArray[i] += number;
//        var randomNum = String.fromCharCode(number);
//        wordString += randomNum;
//    }
//    window.console.log(wordString);
//    
//}
//createRandomString()

//STEP 5
//function longestCountry(array){
//    var indexArray = []
//    for(var i = 0; i < array.length; i= i + 1){
//    indexArray[i] = array[i].length;
//    }
//    var max = Math.max(...indexArray);
//    var maxIndex = indexArray.indexOf(max);
//    window.console.log(array[maxIndex]);
//}
//var array = ["Germany", "Australia", "America", "Russia", "Atlantis", "The Unites States of America"];
//longestCountry(array);
