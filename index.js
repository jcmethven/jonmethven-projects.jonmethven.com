(function ($) {
  
$(".box").hover(function () {
    $(this).find('.box-hover').stop().fadeIn(300);
},

function () {
    $(this).find('.box-hover').stop().fadeOut(100);
});

}(jQuery));