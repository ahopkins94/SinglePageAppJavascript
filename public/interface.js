$(document).ready(function() {

  $('#button').click(function() {
  $.get('https://async-workshops-api.herokuapp.com/people', function(data) {
    $('#people').text(data);
  });
});

});
