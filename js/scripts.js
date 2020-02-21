$(document).ready(function() {
  $("#icon1").click(function() {
    $(".d-header").toggle();
    $(".design").toggle();
  });
  $(".design").click(function() {
    $(".design").toggle();
    $(".d-header").toggle();
  })
});