$(document).ready(function() {

  $('#button').click(function() {
  $.get('https://async-workshops-api.herokuapp.com/people', function(data) {
    var string = ""
    for (var i = 0; i < data.length; i++) {
      string += (data[i].name + ", ")
    }
    $('#people').text('People: ' + string.slice(0, -2));
  });
});

});
