$(function () {
    'use strict';

    // slider height

    var winH = $(window).height(), // window height
        upperH = $('.upper-bar').innerHeight(),
        navH = $('.navbar').innerHeight();

    $('.slider, .carousel-item').height(winH - ( upperH + navH ));   
    // i write carousel-item also because it's height was 0


    // features work 
    $('.featured-work ul li').on('click', function(){
        $(this).addClass('active').siblings().removeClass('active');
        
        if($(this).data('class') === '.all') {
            $('.father-img .col-md').css('opacity', 1);
        }
        else{
            $('.father-img .col-md').css('opacity', '.09');
            $($(this).data('class')).parent().css('opacity', 1);
        }
    });
}); 