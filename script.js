// initial commit
var today = moment().format("ddd, MMM Do YYYY");

$("#currentDay").html(today);

const saveButton = $(".saveBtn").on("click", function () {
  console.log(this);
  let time = $(this).parent().attr("id");
  let text = $(this).siblings("description").val();
});

// block colors
function tBlockColors() {}

// local storage stuff
$("#hour9.description").val(localStorage.getItem("hour9"));
$("#hour10.description").val(localStorage.getItem("hour10"));
$("#hour11.description").val(localStorage.getItem("hour11"));
$("#hour12.description").val(localStorage.getItem("hour12"));
$("#hour13.description").val(localStorage.getItem("hour13"));
$("#hour14.description").val(localStorage.getItem("hour14"));
$("#hour15.description").val(localStorage.getItem("hour15"));
$("#hour16.description").val(localStorage.getItem("hour16"));
$("#hour17.description").val(localStorage.getItem("hour17"));
