console.log('\'Allo \'Allo!');


jQuery(document).ready(function ($) {
  // remove empty div
  $("p:empty").remove();
  // click move
  $("#participate-button").on('click', function (e) {
    e.preventDefault();
    var target = $(this).attr('href');
    $('html, body').animate({
      scrollTop: ($(target).offset().top)
    }, 2000);
  });
});
