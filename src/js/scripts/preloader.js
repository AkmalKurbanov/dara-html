$(document).ready(function () {
  $('#prlogo').addClass('loaded');
  $('#prText p').addClass('fade');
  $('#prLoader').fadeIn(700);
  setTimeout(function () {
    $('#strip').addClass('open');
    $('#prlogo').removeClass('loaded');
    $('#prText p').removeClass('fade');
    $('#prLoader circle').fadeOut();
  }, 2000);
  setTimeout(function () {
    $('.preloader').remove();
  }, 4000);
});


$('#prlogo').each(function (index) {
  var characters = $(this).text().split("");

  $this = $(this);
  $this.empty();
  $.each(characters, function (i, el) {
    $this.append("<span>" + el + "</span");
  });

});