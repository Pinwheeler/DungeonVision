$( document ).ready(function() {

  $(".bgButton").click(function() {
    $("#main").removeClass();
    var button = event.target;
    var location = $(button).attr("location");
    $("#main").addClass(location);
  });

});
