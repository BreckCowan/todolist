//jshint esversion:6
//all logic and code stored in app.js
//making express and bodyParser required

const express = require("express");
const bodyParser = require("body-parser");

//declaring app constant

const app = express();

//adding in ejs

app.set('view engine', 'ejs');

//sets app function

app.get("/", function(req, res) {

  //sets variables for days of the weekday

  //sets today to get the current day

  var today = new Date();

  //sets current day to the previous variables value

  var currentDay = today.getDay();

  //adding variable to correspond to the ejs marker on index.html file

  var day = "";

  //adding in switch statement to print to client day of the weekday
  //setting the expression to 'currentDay' variable = number day
  //setting case variable to 'day' variables value = '"kindOfDay"'
  //creating new cases that correspond to the 'day' of the week (0,1,2,3,4,5,6,7)
  switch (currentDay) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
//the console log here is meant to help debug if switch statement ever breaks
    default:
    console.log("Error: current day is equal to: " + currentDay);
  }
//render file called list and pass file (list.ejs) variable kindOfDay and the value is day

  res.render('list', {
    kindOfDay: day
  });

});



//tells which port server is running on

app.listen(3000, function() {
  console.log("Server is running on port 3000");
});
