// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

"use strict";

// Data Management and Business Logic //
const CounterCollection = {
  lastCountId: 0,
  counters: [], // e.g. {countId: 3, count: 20}
  createCounter: function(){
    this.lastCountId++;
    this.counters.push({
      countId: this.lastCountId,
      count: 0
    });
    return this.lastCountId;
  },
  getCounterValue: function(countId){
    console.log(`read counter #${countId}`);
    let counter = this.counters.find(function(counter){
      return counter.countId === countId;
    });
    if (counter) { return counter.count; }
  },
  incrementCounter: function(countId){
    console.log(`increment counter #${countId}`);
    let counter = this.counters.find(function(counter){
      return counter.countId === countId;
    });
    if (counter) {
      counter.count += 1;
      return counter.count;
    }
  },
  destroyCounter: function(countId){
    console.log(`destroy counter #${countId}`);
    let counter = this.counters.find(function(counter){
      return counter.countId === countId;
    });
    if (counter) { counter.destroy(); }
    this.counters = this.counters.filter(function(counter){ //
      return counter.countId !== countId
    });
  }
};

// UI //
const Presenter = {
  insertCounterComponent: function(newCountId){
    //console.log(`insert counter component #${newCountId}`);
    var newCounter = document.createElement("div");
    var appendTo = document.getElementById("counter-list");
    newCounter.innerHTML = "<h3>Count: <span>0</span></h3> <button class='increment'> + 1 </button>";
    newCounter.className = "counter";
    //CounterCollection.counters.push(newCounter);
    newCounter.setAttribute("data-index", CounterCollection.counters.length-1);

    appendTo.appendChild(newCounter);
    newCounter.getElementsByClassName("increment")[0].onclick = AppController.onClickIncrement;
  },
  refreshCounterComponent: function(countId){
    //console.log(`refresh counter component #${countId}`);
    document.getElementsByClassName("counter")[countId].getElementsByTagName("span")[0].innerHTML = CounterCollection.getCounterValue(countId);
  },
  removeCounterComponent: function(countId){             // REACH
    console.log(`remove counter component #${countId}`);
    // Your Code Here
  }
};

// Top-Level Application Control //
const AppController = {
  onClickNewCounter: function(event){
    CounterCollection.createCounter();
    Presenter.insertCounterComponent(CounterCollection.lastCountId);
  },
  onClickIncrement: function(event){
    let countId = Number(event.target.parentNode.getAttribute("data-index"));
    CounterCollection.incrementCounter(countId);
    Presenter.refreshCounterComponent(countId);
  },
  onClickDelete: function(event){                           // REACH
    // Your Code Here
  }
};

window.onload = function(){
  document.getElementById('new-counter').onclick = AppController.onClickNewCounter;
};
