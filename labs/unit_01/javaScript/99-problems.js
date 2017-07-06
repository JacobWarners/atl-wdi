// 1
// Write a for loop that will console.log the numbers 0 to 999.

for (var i = 0; i < 1000; i++){
    console.log(i);
}

// 2
// Write a for loop that iterates in reverse. Console.log a countdown from 999 to 0.

for (var i = 999; i >= 0; i--){
    console.log(i);
}

// 3
// Write a for loop that iterates over the directors array and console.logs each director.

var directors = ["Michelangelo Antonioni", "David Lynch", "Yasujiro Ozu", "Ingmar Bergman", "Federico Fellini", "Martin Scorcese", "Michael Bay"]
for (i = 0; i < directors.length; i++){
    console.log(directors[i]);
}

// 4
// Write another for loop that iterates over the directors array but also adds the string "Hi, " to the beginning of the name.

for (i = 0; i < directors.length; i++){
    console.log("Hi, "+directors[i]);
}

// 5
// Write a function isCool that accepts one parameter, name as an argument. The function should return a string that outputs the name and a message saying that the person is super cool.

var isCool = function(name){
    return name+" is super cool!";
}
console.log(isCool("Thom"));

// 6
// Write a function twoLengths that accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.

var twoLengths = function(stringOne, stringTwo){
    arrayToReturn = [];
    arrayToReturn.push(stringOne.length);
    arrayToReturn.push(stringTwo.length);
    return arrayToReturn;
}
console.log(twoLengths("Hank", "Hippopopalous"));

// 7
// Write a Javascript function called transmogrifier. This function should accept three arguments, which you can assume will be numbers. Your function should return the "transmogrified" result.
var transmogrifier = function(numOne, numTwo, numThree){
    var productOfNums = numOne * numTwo;
    var tmog = Math.pow(productOfNums, numThree);
    return tmog;
}
console.log(transmogrifier(5, 3, 2));

// 8
// Fizz Buzz! Write a loop that will iterate through numbers from 1 to 100 and log each number in the console.
// In the loop, every time a number is divisible by 3, the word "Fizz" should appear instead of the number.
// If the number is divisible by 5, the word "Buzz" should appear instead of the number.
// If the number is divisible by both 3 and 5, then the word "Fizzbuzz" should appear.

for (var i = 0; i <= 100; i++){
    if (i % 5 === 0 && i % 3 === 0){
        console.log("Fizzbuzz!");
    } else if (i % 5 === 0){
        console.log("Buzz");
    } else if (i % 3 === 0){
        console.log("Fizz");
    } else
        console.log(i);
}

// 9
// Write a function wordReverse that accepts a single argument, a string. The function should return a string with the order of the words reversed. Don't worry about punctuation.
var wordReverse = function(words){
    return words.split(" ").reverse().join(" ");
}

console.log(wordReverse("Ishmael me Call"));

// 10
// Write a function longestWord that accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.

newArray = ["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"];

var longestWord = function(words) {
    var wordLength = 0;
    var wordToReturn = "";
    for (i = 0; i < words.length; i++){
        if(words[i].length > wordLength){
            wordLength = words[i].length;
            wordToReturn = words[i];
        }
    }
    return wordToReturn;
}
console.log(longestWord(newArray));

// 11
// Write a function digitSum that accepts a number and returns the sum of its digits using a for loop.
var digitSum = function(nums){
    sum = 0;
    nums = nums.toString();
    var splitNums = nums.split('');
    for (i = 0; i < splitNums.length; i++){
        sum = sum + parseInt(splitNums[i]);
    }
    return sum;
}

console.log(digitSum(42));

// 12
// Write a function insertDash that accepts a number as a parameter and returns the parameter with a dash inserted between 2 odd numbers.

var insertDash = function(nums){
    nums = nums.toString();
    var splitNums = nums.split('');
    console.log(splitNums);
    for (i = 0; i < splitNums.length; i++){
        if(splitNums[i] % 2 === 1 && splitNums[i+1] % 2 === 1){
            splitNums.splice(i, "-");
        }
    }
    console.log(splitNums);
    return splitNums.join("");
}
console.log(insertDash(454793));
// => 4547-9-3