$(function(){



    var topBtn = $("#page_top");
    topBtn.hide();
    $(window).scroll(function(){
        $(this).scrollTop() > 100 ? topBtn.fadeIn(): topBtn.fadeOut();
    });

    topBtn.click(function(){
        $('body, html').animate({scrollTop: 0}, 500);
        return false;
    });

    $('.hydeBoX').hide();
    $('.seekBoX').click(function(){
        $(this).next().slideToggle();

        $(this).next("hydeBoX").slideToggle();

        $(this).children().children('.henkaYajirusi').toggleClass('ac');
    });




});
