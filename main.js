$(".skilbar").each(function () {
$(this).find('.skilbarColor').animate({
    width:$(this).attr('procent')},4000);
    });
