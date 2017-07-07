// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.
"use strict";
/// DO NOT EDIT ABOVE THIS LINE ///

var makeChange = function(price, payment, useDenominations) {
  var denominations = [.25, .10, .05, .01];
  // if (useDenominations !== []){
  //   denominations = useDenominations;
  // } else {
  //   denominations = [.25, .10, .05, .01];
  // }
  var changeToReturn = [0, 0, 0, 0];
  var changeDue = payment - price;
  console.log(changeDue);
  for(var i = 0; changeDue > 0; i++){
    if(changeDue >= denominations[0]){
      changeDue -= denominations[0];
      changeToReturn[0] += 1;
    } else if (changeDue >= denominations[1]){
      changeDue -= denominations[1];
      changeToReturn[1] += 1;
    } else if (changeDue >= denominations[2]){
      changeDue -= denominations[2];
      changeToReturn[2] += 1;
    } else if (changeDue < denominations[2]){
      changeDue -= denominations[3];
      changeToReturn[3] += 1;
    }
  }
  return changeToReturn;
};

console.log(makeChange(7.56, 10.00));
console.log(makeChange(159, 200, [10, 5, 3, 1]));
/// DO NOT EDIT BELOW THIS LINE ///
module.exports = {
  makeChange: makeChange
};
