$(window).ready(function() {
  $('.section').each(function(i) {
    if(i > 0) {
      $(this).hide();
    }
  });
  
  $('h2').each(function(i) {
    $(this).click(function() {
      $('.section').slice(i, i + 1).toggle();
    });
  });
});