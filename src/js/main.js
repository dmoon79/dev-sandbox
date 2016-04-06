use strict;
$(document).ready(function() {
  //  $('.sb-input').hide();
    $('.sb-submit').hover(function(){
      $('.sb-input').show('slow');
    }, function(){
      $('.sb-input').hide('slow');
    });
});
