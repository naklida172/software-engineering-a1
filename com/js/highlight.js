$(document).ready(function () {
  const currentUrl = window.location.href;

  $("ul.gnb li a").each(function () {
    if (this.href === currentUrl) {
      $(this).addClass("current");
    }
  });
});
