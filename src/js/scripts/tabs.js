$('[data-tab]').on('click', function (e) {
  $(this).parent().addClass('active').siblings('[data-tab]').removeClass('active')

 $(this).parent().parent().siblings('[data-content=' + $(this).data('tab') + ']').addClass('active').siblings('[data-content]').removeClass('active')
})