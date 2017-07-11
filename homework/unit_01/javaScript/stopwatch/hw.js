// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

/// Data & Core Business Logic ///
const Stopwatch = {
  tickClock: function(){
    if (Stopwatch.isRunning) {
      setTimeout(Stopwatch.tickClock, 10); // trigger next clock tick
      Stopwatch.advanceTenMillisecs();
      AppController.handleClockTick();
    }
  },
  isRunning: false,
  mins: 0,
  secs: 0,
  millisecs: 0,
  laps: [],
  // DO NOT EDIT ABOVE THIS LINE
  advanceTenMillisecs: function(){
    Stopwatch.millisecs += 10;
    if(Stopwatch.millisecs > 990){
      Stopwatch.secs += 1;
      Stopwatch.millisecs = 0;
    };
    if(Stopwatch.secs === 60){
      Stopwatch.mins += 1;
      Stopwatch.secs = 0;
    }
    ViewEngine.updateTimeDisplay(Stopwatch.mins, Stopwatch.secs, Stopwatch.millisecs);
  },
  reset: function(){
    $(".lap").remove();
    Stopwatch.millisecs = 0;
    Stopwatch.secs = 0;
    Stopwatch.mins = 0;
    ViewEngine.updateTimeDisplay(Stopwatch.mins, Stopwatch.secs, Stopwatch.millisecs);
  },
  start: function(){
    Stopwatch.isRunning = true;
    Stopwatch.tickClock();
  },
  stop: function(){
    if(Stopwatch.isRunning){
    Stopwatch.isRunning = false;
  } else {
    Stopwatch.reset();
  }
  },
  lap: function(){
    var min = "";
    var sec = "";
    var milsec = "";
    //console.log(Stopwatch.mins+":"+Stopwatch.secs+":"+Stopwatch.millisecs);
    if(Stopwatch.mins > 9){
      min = toString(Stopwatch.mins);
    } else {
      min = "0"+toString(Stopwatch.mins);
    }
    if(Stopwatch.secs > 9){
      sec = toString(Stopwatch.secs);
    } else {
      sec = "0"+toString(Stopwatch.secs);
    }
    if(Stopwatch.millisecs > 90){
      milsec = toString(Stopwatch.millisecs);
    } else {
      milsec = "0"+toString(Stopwatch.millisecs);
    }
    var newLap = min+":"+sec+":"+milsec;
    console.log(newLap);
  }
};

/// User Interface ///
const ViewEngine = {
  updateTimeDisplay: function(mins, secs, millisecs){
    if(mins >9){
    $("#mins").html(mins);
    } else {
      $("#mins").html("0"+mins);
    }
    if(secs >9){
    $("#secs").html(secs);
    } else {
      $("#secs").html("0"+secs);
    }
    if(millisecs > 99){
    $("#millisecs").html(millisecs);
    } else {
      $("#millisecs").html("0"+millisecs);
    }

    if(millisecs === 0){
      $("#millisecs").html("000");
    }
      
  },
  updateLapListDisplay: function(laps){
    $newLi = $("<li>");
    $newLi.addClass("lap");
    $newLi.html("<span id='mins'>00</span>:<span id='secs'>00</span>:<span id='millisecs'>000</span>");
    $("lap-list").append($newLi);
  },
};
const ViewHelpers = {
  zeroFill: function(number, length){
    // Your Code Here
  },
};

/// Top-Level Application Code ///
const AppController = {
  handleClockTick: function(){
    Stopwatch.tickClock;
  },
  handleClickStart: function(event) {
    $("#start").on("click", Stopwatch.tickClock())
    console.log("click start");
  },
  handleClickStopReset: function(){
    // Your Code Here
  },
  handleClickLap: function(){
    // Your Code Here
  }
};

window.onload = function(){
  $("#start").on("click", function(event){
    event.preventDefault();
    Stopwatch.start();
  });
  $("#stop").on("click", function(event){
    event.preventDefault();
    Stopwatch.stop();
  });
  $('#lap').on("click", function(event){
    event.preventDefault();
    Stopwatch.lap();
  });
  };
