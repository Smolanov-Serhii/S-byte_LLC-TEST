$( document ).ready(function() {

    $('.header__btn').click(function () {
        $('.hiden-menu').addClass('show');
        $('.fade').fadeToggle(300);
        $('body').addClass('locked');
    });

    $('.close-btn img').click(function () {
        $('.hiden-menu').removeClass('show');
        $('.fade').fadeToggle(300);
        $('body').removeClass('locked');
    });

    $('.main-content').perfectScrollbar();

    // $(window).scroll(function(e){
    //     parallax();
    // });
    // function parallax(){
    //     var scrolled = $(window).scrollTop();
    //     $('.landing__header').css('background-position', '0 '+(scrolled*0.2)+'px');
    // }

});






