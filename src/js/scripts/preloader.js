$(document).ready(function () {
  $('#prLoader').fadeIn(700);
  setTimeout(function () {
    $('#strip').addClass('open');
    $('#prlogo').addClass('close');
    $('#prText').addClass('close');
    $('#prLoader circle').fadeOut();
  }, 3000);
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




