let items = document.querySelectorAll(".items");
let allCart = document.querySelectorAll(".items .fa-shopping-cart");
let cart = document.querySelector(".items .fa-shopping-cart"); // <i class="fa fa-shopping-cart fa-2x"></i>

items.forEach((ele)=>{
    ele.addEventListener("click", (e)=>{

        items.forEach((ele)=>{
            ele.classList.remove("item2"); //remove class called item2 from all ele(items)

            allCart.forEach((ele2)=>{
                ele2.classList.remove("btn","btn-warning","cart"); //remove this class from all ele2(allCart)
            });
        });
        e.currentTarget.classList.add("item2"); // event that i choose => add this class to it
        e.currentTarget.querySelector(`[class="${cart.className}"]`).classList.add("btn","btn-warning","cart");
    });
});

