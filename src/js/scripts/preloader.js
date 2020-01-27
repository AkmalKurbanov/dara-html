$(document).ready(function () {
  $('#prLoader').fadeIn(700);
  $('body').css('overflow', 'hidden');
  setTimeout(function () {
    $('#strip-wrap').css('opacity', '1');
  }, 2100);
  setTimeout(function () {
    $('#strip').css('background', 'none');
  }, 3000);
  setTimeout(function () {
    $('#strip').addClass('open');
    $('#prlogo').addClass('close');
    $('#prText').addClass('close');
    $('#prLoader circle').fadeOut();
  }, 4200);
  setTimeout(function () {
    $('body').css('overflow', 'auto');
  }, 4000);
  setTimeout(function () {
    $('.preloader').remove();
  }, 8000);
});


$('#prlogo').each(function (index) {
  var characters = $(this).text().split("");

  $this = $(this);
  $this.empty();
  $.each(characters, function (i, el) {
    $this.append("<span>" + el + "</span");
  });

});





