/*

Creating a page where every time the user hits the "Roll Dice" button, the screen randomly updates the two dice. Use the html and css code included in the starter code folder to get started.

1) Write down pseudocode for the following program.

2) Follow the steps below to write your code.
* generate a random number between 1 - 6 and store to a variable, random1
* generate a random number between 1 - 6 and store to a variable, random2
* combine 'dice-' and random1 to form the random class for the first die, firstDie
* combine 'dice-' and random2 to form the random class for the second die, secondDie
* get the first die by ID and update the class to firstDie (hint: document.getElementById)
* get the first die by ID and update the class to secondDie (hint:document.getElementById)

3) Check to see if the Dice Roll has been hit, if it has run the diceRoll function.

*/

window.onload = function (event) {
    var button = document.getElementById("roll-dice");
    button.addEventListener("click", rollDice.roll);
};

var rollDice = {

    roll: function rollDice() {
        var diceOne = Math.floor(Math.random() * 6)+1;
        var diceTwo = Math.floor(Math.random() * 6)+1;
        console.log(diceOne);
        console.log(diceTwo);

        var diceImageOne = document.getElementById("first-die");
        var diceImageTwo = document.getElementById("second-die");

        diceImageOne.className = "dice dice-"+diceOne;
        diceImageTwo.className = "dice dice-"+diceTwo;
    }
}