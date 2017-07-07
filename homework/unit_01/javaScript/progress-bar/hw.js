// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

var timerUI = {
  drawNumericDisplay: function (timerValue) {
    if (timerValue <= 10) {
      document.getElementById("numeric-display").style.color = "red";
      document.getElementById("numeric-display").style.fontSize = 24+(1.05*(10-timerValue)) +"px";
    }
    document.getElementById("numeric-display").textContent = timerValue;
  },
  drawProgressBars: function (timerValue) {
    var size = 100 - timerValue;
    document.getElementsByClassName("progress-bar")[0].style.width = size + "%";
  },
  drawLitFuses: function (timerValue) {
    var size = (.98 * timerValue);
    var burntSize = 98 - size;
    document.getElementsByClassName("unburnt")[0].style.width = size + "%";
    document.getElementsByClassName("burnt")[0].style.width = burntSize + "%";
  },
  drawCrawlers: function (timerValue) {
    var position = 100 - timerValue;
    if(timerValue % 2 === 1){
      document.getElementsByClassName("crawler")[0].style.marginTop = "10px";
      document.getElementsByClassName("crawler")[1].style.marginTop = "10px";
    }
    if(timerValue % 2 === 0){
      document.getElementsByClassName("crawler")[0].style.marginTop = "0px";
      document.getElementsByClassName("crawler")[1].style.marginTop = "0px";
    }
    document.getElementsByClassName("crawler")[0].style.marginLeft = 10*position+"px";
    document.getElementsByClassName("crawler")[1].style.marginLeft = 10*position+"px";
  }
};
