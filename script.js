//use jquery to link html to variables to manipulate the dom

let currentDay = $("#currentDay");
let container = $(".container");

// create a timer so that the moment.js shows real time and continues counting
let timer = setInterval(function () {
  let currentTime = moment().format("MMMM Do YYYY, h:mm:ss a");
  currentDay.text(currentTime);
}, 1000);

// create a variable called schedule and add object arrays that contain the times of average business hours and text containters
let schedule = [
  {
    time: "9:00am",
    text: "",
  },
  {
    time: "10:00am",
    text: "",
  },
  {
    time: "11:00am",
    text: "",
  },
  {
    time: "12:00pm",
    text: "",
  },
  {
    time: "1:00pm",
    text: "",
  },
  {
    time: "2:00pm",
    text: "",
  },
  {
    time: "3:00pm",
    text: "",
  },
  {
    time: "4:00pm",
    text: "",
  },
  {
    time: "5:00pm",
    text: "",
  },
];
