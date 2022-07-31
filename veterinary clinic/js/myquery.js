// scroll top
var scrollButton = $("#scroll-top");

$(window).scroll(function(){
    console.log($(this).scrollTop());

    if($(this).scrollTop()>=400){
        scrollButton.show();
    } else{
        scrollButton.hide();
    }

});

scrollButton.click(function(){
    $("html,body").animate({scrollTop:0},600);
});


// scroll window
window.onscroll = () => {
    if (this.scrollY >= 900) {
       document.querySelector(".arrowHome i").style.right = "10px";
    } else {
       document.querySelector(".arrowHome i").style.right = "-40px";
    }
};       


//   Option box of colors
$(document).ready (function(){

    // Color option
    $('.gear-check').click(function()
    {
        $('.color-option').toggle(); 
    });


    // chande theme color in box
    var colorLi = $(".option-box ul li");

    colorLi 
    .eq(0).css("backgroundColor","#e63636").end()
    .eq(1).css("backgroundColor","#5212db");

    colorLi.click(function()
    {
        $("link[href*='theme']").attr("href", $(this).attr("data-value"));
    });

});  