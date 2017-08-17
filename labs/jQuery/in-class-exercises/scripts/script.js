$(function(){

$("#counter")

//find the button
var $button = $("#add-one");

//add an event to the button
$button.on("click", function () {

    var currentValue = $('#current-count').text();
    var currentValueAsInt = parseInt(currentValue);
    currentValueAsInt += 1;
    $('#current-count').html(currentValueAsInt);
});

//var $submitButton = $('#add-new-counter');
let CounterCollection = {
    counters: [{
        currentValue: 0,
        counterName: "Errors"
    }, {
        currentValue: 0,
        counterName: "Warnings"
    }, {
        currentValue: 5,
        counterName: "Other"
    }]
}


$('#add-new-counter').click(function (event) {
    event.preventDefault();
    console.log("did not refresh");
    var inputFieldNumber = $('#new-counter-start-value').val();
    var inputFieldText = $('#new-counter-id').val();

    alert("You made " + inputFieldText + "! It has a value of " + inputFieldNumber + ".");

});

//get container that we want to add divs to
$counterContainer = $("#counter-container");

//setup a loop that will create the divs for the counters.
CounterCollection.counters.forEach(function (counter, index) {
    var counter = CounterCollection.counters[index];

    //for each, create a div
    var $newDiv = $("<div>");
    //the div should have a class of counter.
    $newDiv.addClass("counter");
    //the div should have a data counter index of the array
    $newDiv.data("counterIndex", index);
    //have a h1 equal to the current name of the counter
    var $newCounterHeader = $("<h1>");
    $newCounterHeader.html(index.counterName);
    $newDiv.append($newCounterHeader);
    //have a span with the current value
    $newDiv.append("<span>").html(counter.currentValue);
    //should have a button the increment
    var $newButton = $("<button>");
    $newButton.html("+1");
    $newButton.attr("id", "add-one");

    $newDiv.append($newButton);
    //append the new div
    $counterContainer.append($newDiv);
});

});