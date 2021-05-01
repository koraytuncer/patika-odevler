$(document).ready(function () {
  $(window).scroll(function () {
    if ($(document).scrollTop() > 350) {
    
      $(".bg-yellow").addClass("bg-white");
      $(".btn-dark").toggleClass("btn-dark");

    } else {

      $(".bg-yellow").removeClass("bg-white");
      $(".btn-dark").addClass("btn-success");
      $(".btn-success").addClass("btn-dark");

    }
  });
});
