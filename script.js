//use jquery to link html to variables to manipulate the dom

let currentDay = $("#currentDay");
let container = $(".container");

// create a timer so that the moment.js shows real time and continues counting
let timer = setInterval(function () {
  let currentTime = moment().format("MMMM Do YYYY, h:mm:ss a");
  currentDay.text(currentTime);
}, 1000);
