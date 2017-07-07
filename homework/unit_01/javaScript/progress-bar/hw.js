// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

var timerUI = {
  drawNumericDisplay: function (timerValue) {
    if (timerValue <= 10) {
      document.getElementById("numeric-display").style.color = "red";
      document.getElementById("numeric-display").style.fontSize = 24 + timerValue+"px";
    }
    document.getElementById("numeric-display").textContent = timerValue;
  },
  drawProgressBars: function (timerValue) {
    var size = 100 - timerValue;
    document.getElementById("progress-bar").style.width = size + "%";
  },
  drawLitFuses: function (timerValue) {
    var size = (.98 * timerValue);
    var burntSize = 98 - size;
    document.getElementById("unburnt").style.width = size + "%";
    document.getElementById("burnt").style.width = burntSize + "%";
  },
  drawCrawlers: function (timerValue) {
    var position = 100 - timerValue;
    if(timerValue % 2 === 1){
      document.getElementById("crawler").style.marginTop = "10px";
    }
    if(timerValue % 2 === 0){
      document.getElementById("crawler").style.marginTop = "0px";
    }
    document.getElementById("crawler").style.marginLeft = 10*position+"px";
  }
};
