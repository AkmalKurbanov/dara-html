$('.hamburger').on('click', function () {
  $('.menu').toggleClass('menu-open');
  $('.sub-menu ').removeClass('active');
  setTimeout(function () {
    $('.menu__list').toggleClass('list-border');
  }, 1000);
});

var mainItemMenu = 0;
$(".menu__item a").not('.menu__item--sub-menu-item a').each(function () {
  mainItemMenu++;
  $(this).attr("href", "#menuItem" + mainItemMenu);
  $(this).attr("data-tab", "menuItem" + mainItemMenu);
});
var subItemMenu = 0
$(".sub-menu").each(function () {
  subItemMenu++;
  $(this).attr("data-content", "menuItem" + subItemMenu);
});