// sets the time to the current day
const currentDate = moment().format("dddd, MMM Do YYYY");

// current time to current date
currentTime.text(moment().format("dddd, MMMM Do"));

//color code based on if it is in the past, present or future
// if (currentHour < 9) {
//     .addClass("future");
// } else if (currentHour > 9) {
//     .addClass("past");
// } else if (currentHour = 9) {
//     .addClass("present");
// }

var colorCards = function (timeAndday) {
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

// do something like above until 6pm. 

//save events to local storage

