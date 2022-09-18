// initial commit
var today = moment().format("ddd, MMM Do YYYY");
var currentTime = moment().hour();
$("#currentDay").html(today);

$(".saveBtn").on("click", function () {
  console.log(this);
  let time = $(this).parent().attr("id");
  let text = $(this).siblings("description").val();
  localStorage.setItem(time, text);
});

// block colors
$(".time-block").each(function () {
  let blockTime = parseInt($(this).attr("id").split("hour")[1]);

  if (blockTime === currentTime) {
    $(this).addClass("present");
    $(this).removeClass("future");
    $(this).removeClass("past");
  } else if (blockTime < currentTime) {
    $(this).addClass("past");
    $(this).removeClass("future");
    $(this).removeClass("present");
  } else {
    $(this).addClass("future");
    $(this).removeClass("present");
    $(this).removeClass("past");
  }
});

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
