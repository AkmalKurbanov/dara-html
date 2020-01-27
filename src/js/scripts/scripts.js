// select dropdown
$('.select').on('click', function () {
  $(this).children('.select__dropdown').slideToggle();
});
$('.select__option').on('click', function () {
  let value = $(this).attr('data-value');
  $(this).parent().parent().find('.select__item').val(value);
  $(this).parent().parent().find('.select__checked').text(value);
});
// select dropdown end



// hamburger

$(".hamburger").click(function () {
  $(this).toggleClass("is-active");
});

// hamburger end