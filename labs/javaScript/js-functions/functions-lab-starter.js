// Question 1
function maxOfTwoNumbers(numOne, numTwo) {
    if(numOne > numTwo){
        return numOne;
    } else if(numOne < numTwo){
        return numTwo;
    } else if(numOne === numTwo){
        return "They are equal";
    } else{
        return "At least one of these is not a number";
    }
}

// Question 2
function maxOfThree(numOne, numTwo, numThree) {
    var maxOfArray = [numOne, numTwo, numThree];
    var highest = 0;
    for (var i = 0; i < maxOfArray.length; i++){
        if(maxOfArray[i]>highest){
            highest = maxOfArray[i];
        }
    }
    return highest;
}

// Question 3
function isCharacterAVowel(char) {
    char = char.toLowerCase();
    if(char === "a" ||char === "e" ||char === "i" ||char === "o" ||char === "u"){
        return true;
    } else {
        return false;
    }
}

// Question 4
function sumArray(nums) {
    var sum = 0;
    for(var i = 0; i < nums.length; i++){
        sum = sum + nums[i];
    }
    return sum;
}


// Question 4
function multiplyArray(nums) {
    var product = 1;
    for(var i = 0; i < nums.length; i++){
        product = product * nums[i];
    }
    return product;
}


// Question 5
var numberOfArguments = function(){
  return arguments.length;
}



// Question 6
var reverseString = function(string){
  return string.split('').reverse().join('');
};


// Question 7
function findLongestWord (arrayOfWords) {
  var wordSize = 0;
  for (var i = 0; i < arrayOfWords.length; i++){
      if(arrayOfWords[i].length > wordSize){
          wordSize = arrayOfWords[i].length;
      }
  }
  return wordSize;
}


// Question 8
function filterLongWords (arrayOfWords, n) {
  var newArray = [];
  for (i = 0; i < arrayOfWords.length; i++){
      if(arrayOfWords[i] >= n){
          newArray.push(arrayOfWords[i]);
      }
  }
  return newArray;
}


// Bonus 1
var String = {
    reverseString: reverseString()
}


// Bonus 2
function charactersOccurencesCount(string) {
  var charactersObject = {};
  for (var i = 0; i < string.length; i++){
      charactersObject.string.charAt[i] += 1;
  }
  return charactersObject;
}
