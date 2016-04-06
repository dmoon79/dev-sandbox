'use strict';

$(document).ready(function() {
  $('.sb-submit').hover(function(){
    $('.sb-input').show('slow');
  }, function(){
    $('.sb-input').hide('slow');
  });
});
