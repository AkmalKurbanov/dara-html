var duration = 600; //'slow'
$(".menu-js .menu__item").each(function (index) {
  $(this).delay(duration * index).fadeIn(duration);
});