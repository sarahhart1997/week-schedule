// sets the time to the current day
const currentDate = moment().format("dddd, MMM Do YYYY");

// current time to current date
currentTime.text(moment().format("dddd, MMMM Do"));

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

// loops through time to create card 
var mainStart = function() {
    for(let i=9; i < hours; i++) {
        colorCards(formatTime(i), i);
        loadEvents(formatTime(i), i);
    }
}

//color code based on if it is in the past, present or future
// if (currentHour < 9) {
//     .addClass("future");
// } else if (currentHour > 9) {
//     .addClass("past");
// } else if (currentHour = 9) {
//     .addClass("present");
// }

var colorCards = function (dateAndtime) {
    // gets current time
    var currentHour = moment().format();
    
    //compares hours 
    if (moment(currentHour, 'YYYY-MM-D').isBefore(currentDate)){
        // add class for future
        $("#input"+ index).addClass("future");
    } else if (moment(currentHour, 'YYYY-MM-D').isAfter(currentDate)){
        // add class for past
        $("#input"+ index).addClass("past");
    } else {
        // add present class
        $("#input"+ index).addClass("present");
    }
}
//save events to local storage
$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        // get description and time
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // put into local storage
        localStorage.setItem(time, text);
    });
})

mainStart();
