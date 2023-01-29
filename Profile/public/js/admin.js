let webBtn = document.querySelector('#webBtn');
let certificBtn = document.querySelector('#certificBtn');
let reviewBtn = document.querySelector('#reviewBtn');

let websites = document.querySelector('#websites');
let certificates = document.querySelector('#certificates');
let reviews = document.querySelector('#reviews');

webBtn.addEventListener('click',function(){
    websites.style.display = "block";
    certificates.style.display = "none";
    reviews.style.display = "none";
});

certificBtn.addEventListener('click',function(){
    websites.style.display = "none";
    certificates.style.display = "block";
    reviews.style.display = "none";
});

reviewBtn.addEventListener('click',function(){
    websites.style.display = "none";
    certificates.style.display = "none";
    reviews.style.display = "block";
});