$(document).ready(function() {
  $("#icon1").click(function() {
    $(".d-header").toggle();
    $(".design").toggle();
  });
  $(".design").click(function() {
    $(".design").toggle();
    $(".d-header").toggle();
  });

  $("#icon2").click(function() {
    $(".dev-header").toggle();
    $(".development").toggle();
  });
  $(".development").click(function() {
    $(".development").toggle();
    $(".dev-header").toggle();
  });

  $("#icon3").click(function() {
    $(".pro-header").toggle();
    $(".product-management").toggle();
  });
  $(".product-management").click(function() {
    $(".product-management").toggle();
    $(".pro-header").toggle();
  });
});

function occur(events) {
  var events = document.getElementById("name").value;
  if (events!==undefined) {
    alert("Thank you " + events + " .We have received your credentials");
  }
  return events ;
} 