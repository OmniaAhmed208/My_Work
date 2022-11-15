let icon = document.querySelectorAll(".qus i");
let ans2 = document.querySelectorAll(".answercont");
let qus = document.querySelectorAll(".question");


icon.forEach((i)=>{
    i.addEventListener('click', (e)=>{

        let currIcon = document.querySelector(".qus .activeQus")
        if( currIcon && currIcon !== i){
            currIcon.classList.toggle('activeQus');
            currIcon.parentElement.nextElementSibling.style.height = 0
        }

        i.classList.toggle('activeQus');

        let ans = e.currentTarget.parentElement.nextElementSibling;

        if(i.classList.contains('activeQus')){
            ans.style.height = "100%";
        } else{
                ans.style.height = 0;
            }
    })
})

