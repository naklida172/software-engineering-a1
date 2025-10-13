$(document).ready(function () {
  // Добавляем кнопку в конец body
  const $btnTop = $('<a href="#" id="btn_top" title="Наверх">⬆</a>').appendTo("body").hide();

  // При скролле показываем или скрываем кнопку (оптимизировано через таймер)
  let scrollTimer;
  $(window).on("scroll", function () {
    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(function () {
      if ($(window).scrollTop() > 200) {
        $btnTop.fadeIn();
      } else {
        $btnTop.fadeOut();
      }
    }, 100); // срабатывает максимум 1 раз в 100мс
  });

  // Клик по кнопке — плавный скролл наверх
  $btnTop.on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, 500);
  });
});
