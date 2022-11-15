let defaltImg = document.querySelector(".home .imgZero");
let allImg = document.querySelectorAll(".choose img");

if(window.localStorage.getItem("src")){
    // src of image
    defaltImg.src = window.localStorage.getItem("src");    
}

allImg.forEach((img)=>{
    img.addEventListener('click',(e)=>{
        defaltImg.src = e.currentTarget.src;
        window.localStorage.setItem("src",e.currentTarget.src);
    });
});


