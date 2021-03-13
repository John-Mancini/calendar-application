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

// created a function that uses js to manipulate the dom and insert a row that contains the time text and save button and use jquery to append everything to the same line.
function appendRow(time, text) {
  let className = determineClassName(time);
  let row = $('<div class="row time-block">');
  $('<div class="hour"></div>').text(time).appendTo(row);
  $('<textarea class=""></textarea>')
    .val(text)
    .addClass(className)
    .data("time", time)
    .appendTo(row);
  $('<div class="saveBtn"><i class="far fa-save"></i></div>')
    .data("time", time)
    .appendTo(row);
  $(row).appendTo(container);
}

//created a fuction that uses the current time of the day and compares it to the time row on the schedule that adds color codes from css to indicate wether the time is in the past present or future
function determineClassName(time) {
  let currentTime = moment();
  let scheduleTime = moment(time, "h:mma");
  let currentHour = Number(currentTime.format("HH"));
  let scheduleHour = Number(scheduleTime.format("HH"));
  console.log(currentHour, scheduleHour);
  if (currentHour > scheduleHour) {
    return "past";
  } else if (currentHour === scheduleHour) {
    return "present";
  } else {
    return "future";
  }
}

//created a for loop so that the function append row is triggered for each object in the schedule array
for (let i = 0; i < schedule.length; i++) {
  const timeSlot = schedule[i];
  console.log(timeSlot.time, timeSlot.text);
  appendRow(timeSlot.time, timeSlot.text);
}
