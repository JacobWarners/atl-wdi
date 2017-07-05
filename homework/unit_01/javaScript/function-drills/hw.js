// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.
"use strict";
/// DO NOT EDIT ABOVE THIS LINE ///

////// WRITE A FUNCTION THAT TAKES ___ AS INPUT AND RETURNS ___ AS OUTPUT //////

// #1
// Input: an array of numbers
// Output: the sum of the numbers that were passed in
// Edge Case: If the array is empty, return 0
var sumOfNums = function (numsArray) {
  var sumNums = 0;
  if (numsArray.length > 0) {
    for (var i = 0; i < numsArray.length; i++) {
      sumNums = sumNums + numsArray[i];
    }
    return sumNums;
  }
  else {
    return 0;
  }
};

// #2
// Input: an array of numbers
// Output: an array of the numbers from the first array that are strictly
//         greater (i.e. greater than but not equal to) than 10
var numsGreaterThanTen = function (numsArray) {
  var greaterThanTen = [];
  for (var i = 0; i < numsArray.length; i++) {
    if (numsArray[i] > 10) {
      greaterThanTen.push(numsArray[i]);
    }
  }
  return greaterThanTen;
};

// #3
// Input: an array of numbers
// Output: `true` if ALL numbers passed in are strictly greater than 10;
//         `false` otherwise
// Edge Case: If the input array is empty, the function should return `true`.
var allGreaterThanTen = function (numsArray) {
  var greatTen = true;
  if (numsArray.length > 0) {
    for (var i = 0; i < numsArray.length; i++) {
      if (numsArray[i] <= 10) {
        greatTen = false;
      }
    }
  }
  return greatTen;
};

// #4
// Input: an array of words
// Output: an array of all words from the first array with five or more letters
var wordsWithAtLeastFiveLetters = function (words) {
  var fiveLetters = [];
  for (var i = 0; i < words.length; i++) {
    if (words[i].length >= 5) {
      fiveLetters.push(words[i]);
    }
  }
  return fiveLetters;
};

// #5
// Input: an array of words
// Output: `true` if ALL words start with the letter 'a' (case-insensitive),
//          `false` otherwise
// Edge Case: If the array is empty, the function should return `true`.
var allStartingWithA = function (words) {
  var startA = true;
  if (words.length > 0) {
    for (var i = 0; i < words.length; i++) {
      if (words[i].charAt(0) !== "a" || words[i].charAt(0) !== "A") {
        startA = false;
      }
    }
  }
  return startA;
};

// #6
// Input: an array of words
// Output: `true` if there are ANY words that start with the letter 'b'
//          (case-insensitive), `false` otherwise
var anyStartingWithB = function (words) {
  var startB = false;
  if (words.length > 0) {
    for (var i = 0; i < words.length; i++) {
      if (words[i].charAt(0) === "b" || words[i].charAt(0) === "B") {
        startB = true;
      }
    }
  }
  return startB;
};

// #7
// Input: a single word and a number (`n`)
// Output: `true` if the word has at least some number (`n`) of vowels,
//          `false` otherwise
//    Assume that vowels are 'a', 'e', 'i', 'o', and 'u' (NOT 'y')
// Edge Case: If `n` is less than zero, return `null`.
var hasAtLeastNVowels = function (word, n) {
  var nVowels = false;
  var vowelCount = 0;
  //if negative number of vowels return null
  if (n < 0) {
    return null;
  }
  //if 0 or more vowels start counting.
  if (n >= 0) {
    for (var i = 0; i < word.length; i++) {
      if (word.charAt(i) === "a" || word.charAt(i) === "e" || word.charAt(i) === "i" || word.charAt(i) === "o" || word.charAt(i) === "u" || word.charAt(i) === "A" || word.charAt(i) === "E" || word.charAt(i) === "I" || word.charAt(i) === "O" || word.charAt(i) === "U") {
        var vowelCount = vowelCount + 1;
        if (vowelCount >= n) {
          nVowels = true;
        }
      }
    }
  }
  return nVowels;
};

// #8
// Input: an array of words
// Output: an array of words from the original array that have at least two
//          vowels
var wordsWithAtLeastTwoVowels = function (words) {
  var leastTwoVowels = [];
  var vowelCount = 0;

  //Cycle through each word in the array
  for (var i = 0; i < words.length; i++) {
    //Cycle through each letter of the array
    for (var n = 0; n < words[i].length; n++) {
      //Search for vowels
      if (word.charAt(n) === "a" || word.charAt(n) === "e" || word.charAt(n) === "i" || word.charAt(n) === "o" || word.charAt(n) === "u" || word.charAt(n) === "A" || word.charAt(n) === "E" || word.charAt(n) === "I" || word.charAt(n) === "O" || word.charAt(n) === "U") {
        //when we find a vowel add it to the count
        var vowelCount = vowelCount + 1;
      }
    }
    //if that word had two or more vowels lets add it
    if (vowelCount >= 2) {
      leastTwoVowels.push(word[i]);
      //reset vowel counter for next iteration.
      vowelCount = 0;
    }
  }
  return leastTwoVowels;
};

// #9
// Input: an array of words
// Output: `true` if ALL words have two or more vowels, `false` otherwise
// Edge Case: If the array is empty, the function should return `true`.
var allHaveAtLeastTwoVowels = function (words) {
  /*
    So we've already made a function that returns an array
    if the words have two or more vowels. Call that. Then
    check to see; if all words had two or more vowels then
    the arrays should have the same length
  */
  var newArray = wordsWithAtLeastTwoVowels(words);
  if (newArray.length === words.length){
    return true;
  }
  else {
    return false;
  }
};

// #10
// Input: an array of words
// Output: `true` if there are ANY words have two or more vowels,
//          `false` otherwise.
var anyHaveAtLeastTwoVowels = function (words) {
  //we aleady made a function to check this. If its longer than 0 then there must have been at least 1.
  var newArray = wordsWithAtLeastTwoVowels(words);
  if (newArray.length > 0){
    return true;
  }
  else {
    return false;
  }
};

// #11
// Input: an array of words
// Output: `true` if NONE of the words have two or more vowels,
//          `false` otherwise
// Edge Case: If the array is empty, the function should return `true`.
var noneHaveTwoOrMoreVowels = function (words) {
  var newArray = wordsWithAtLeastTwoVowels(words);
  //solve the edgecase first cause its the easy part.
  if (words.length = 0){
    return true;
  }
  else {
    //using our handy function from earlier we can find out. If its empty none of the words had two or more vowels.
    if (newArray.length === 0){
      return true;
    }
    else {
      return false;
    }
  }
};

// #12
// Input: an array of words
// Output: an object ({}) where each word in the array is a key, and the value
//          tied to that key is the length of the word.
// e.g. given ['cat', 'horse', 'elephant'],
//      return { cat: 3, horse: 5, elephant: 8}
var buildObjectFromWords = function (words) {
  var wordObject = {};
  
};


/// DO NOT EDIT BELOW THIS LINE ///
module.exports = {
  sumOfNums: sumOfNums,
  numsGreaterThanTen: numsGreaterThanTen,
  allGreaterThanTen: allGreaterThanTen,
  wordsWithAtLeastFiveLetters: wordsWithAtLeastFiveLetters,
  allStartingWithA: allStartingWithA,
  anyStartingWithB: anyStartingWithB,
  hasAtLeastNVowels: hasAtLeastNVowels,
  wordsWithAtLeastTwoVowels: wordsWithAtLeastTwoVowels,
  allHaveAtLeastTwoVowels: allHaveAtLeastTwoVowels,
  anyHaveAtLeastTwoVowels: anyHaveAtLeastTwoVowels,
  noneHaveTwoOrMoreVowels: noneHaveTwoOrMoreVowels,
  buildObjectFromWords: buildObjectFromWords
}
