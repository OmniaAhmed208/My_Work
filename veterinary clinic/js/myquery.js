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


    // chande theme color in box (way 1)

    // var colorLi = $(".option-box ul li");

    // colorLi 
    // .eq(0).css("backgroundColor","#e63636").end()
    // .eq(1).css("backgroundColor","#5212db");

    // colorLi.click(function()
    // {
    //     $("link[href*='theme']").attr("href", $(this).attr("data-value"));
    // });

    // chande theme color in box (way 2)
    let color = document.querySelectorAll(".option-box li");
    let link = document.querySelectorAll("link");
    let arr = [];
    
    if(window.localStorage.getItem("link")){

        link.forEach((link)=>{
            arr.push(link);
        });

        arr[arr.length-1].removeAttribute('href');
        arr[arr.length-1].setAttribute('href' , window.localStorage.getItem('link'))

    }

    color.forEach((i)=>{
        i.addEventListener('click',(e)=>{

            link.forEach((link)=>{
    
                if(e.currentTarget.getAttribute('data-value')==="css/default-theme.css"){
                    if(link.getAttribute('href')=== "css/instead-theme.css"){
                       link.removeAttribute('href');
                       link.setAttribute('href' , "css/default-theme.css");
                       window.localStorage.setItem("link",link.getAttribute('href'));
                    } 
                } 

                if(e.currentTarget.getAttribute('data-value')==="css/instead-theme.css"){
                    if(link.getAttribute('href')=== "css/default-theme.css") {
                       link.removeAttribute('href')
                       link.setAttribute('href' , "css/instead-theme.css")
                       window.localStorage.setItem("link",link.getAttribute('href'));
                    }
                }

            });
        });
    });
    
});  