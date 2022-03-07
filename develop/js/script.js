// sets the time to the current day
const todayDate = moment().format("dddd, MMM Do YYYY");


//color code based on if it is in the past, present or future
if (currentHour < 9) {
    .addClass("future");
} else if (currentHour > 9) {
    .addClass("past");
} else if (currentHour = 9) {
    .addClass("present");
}
// do something like above until 6pm. 

//save events to local storage

