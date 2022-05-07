// current day for jumbotron
var today = moment().format("dddd, MMM Do YYYY");
document.getElementById("currentDay").textContent = today;

const blocks = document.getElementsByClassName("time-block");
const hour = document.getElementsByClassName("hour");

// loops through time to create card 
var mainStart = function() {
    for(let i=0; i < blocks.length; i++) {
        colorCards();
    }
}

//color code based on if it is in the past, present or future

var colorCards = function () {
    // gets current time
    var currentHour = moment().format();
    console.log(currentHour)

    //compares hours 
    if (moment(hour).isBefore(currentHour)){
        // add class for future
        blocks.addClass("future");
    } else if (moment(hour).isAfter(currentHour)){
        // add class for past
        blocks.addClass("past");
    } else { (moment(hour) === currentHour)
        // add present class
        blocks.addClass("present");
    }
}
//save button event listener
$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        // get description and time
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // put into local storage
        localStorage.setItem(time, text);
    });
})

// load events 
var loadEvents = function() {
    $("#block-8a .description").val(localStorage.getItem("block-8a"));
    $("#block-9a .description").val(localStorage.getItem("block-9a"));
    $("#block-10a .description").val(localStorage.getItem("block-10a"));
    $("#block-11a .description").val(localStorage.getItem("block-11a"));
    $("#block-12p .description").val(localStorage.getItem("block-12p"));
    $("#block-1p .description").val(localStorage.getItem("block-1p"));
    $("#block-2p .description").val(localStorage.getItem("block-2p"));
    $("#block-3p .description").val(localStorage.getItem("block-3p"));
    $("#block-4p .description").val(localStorage.getItem("block-4p"));
    $("#block-5p .description").val(localStorage.getItem("block-5p"));
    $("#block-6p .description").val(localStorage.getItem("block-6p"));
    $("#block-7p .description").val(localStorage.getItem("block-7p"));
    $("#block-8p .description").val(localStorage.getItem("block-8p"));
}

mainStart();
