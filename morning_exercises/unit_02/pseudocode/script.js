//*************************
// Problem 1:
// Barrels O' RUM

var barrels = function(small, large, total){
  var smallBarrel = 60;
  var largeBarrel = (total - (small * smallBarrel)) / large;

return largeBarrel;
};

//*************************
// Problem 2:
// Sailing the Seas

var shipFuelCost = function(fuelPrice, milesPerGallon){
//   - Find the distance of the earth circumference in miles
var earthCircumference = 24901;
//   - Calculate the # of gallons used to travel around the earth
var gallonsUsed = earthCircumference/milesPerGallon;
//   - circumference / MPG (miles per gallon)
//   - Calculate the cost:
var cost = gallonsUsed * fuelPrice;
//   - total gallons used * cost of fuel
return cost;
};

//*************************
// Problem 3:
// GROG

var calcFruitJuice = function(a, b, c, d){
//   - Find the total amount of pure fruit juice (gal)
var allJuice = a + c;
//   - Total of Costco pure fruit juice:
//     - percentage pure fruit juice * number of gallons
var costcoJuice = a * (b/100);
//   - Total of Kirkland pure fruit juice:
//     - percentage pure fruit juice * number of gallons
var kirklandJuice = c * (d/100);
//   - Add Costco pure fruit juice total + Kirkland pure fruit juice total
var pureJuice = costcoJuice + kirklandJuice
// - Find the total amount of juice (gal):
//   - Total of Costco juice + Total of Kirkland Juice
// - Calculate (total pure fruit juice) / (total juice)
var totalJuice = pureJuice/allJuice;
return totalJuice;
};

//DO NOT EDIT BELOW THIS LINE//
module.exports = {
  barrels: barrels,
  shipFuelCost: shipFuelCost,
  calcFruitJuice: calcFruitJuice
};
