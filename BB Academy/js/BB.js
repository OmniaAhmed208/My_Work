var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: '.mySwiper-pagination',
        clickable: true,
    },
    grabCursor: true,
    slidesPerView: 1.2,
    spaceBetween: 5,
    loop: false,
    breakpoints: {
        320: {
            slidesPerView: 1.2,
            spaceBetween: 5
        }, // when window width is <= 480px
        480: {
            slidesPerView: 1.2,
            spaceBetween: 5
        }, // when window width is <= 640px
        640: {
            slidesPerView: 1.3,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 2.3,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 3.3,
            spaceBetween: 10,
        },
    },

});

/* =====================================================
TESTIMONIALS SLIDER
===================================================== */
var testimonialsSlider = new Swiper('.js-testimonials-slider', {
    spaceBetween: 30,
    grabCursor: true,
    pagination: {
        el: '.js-testimonials-pagination',
        clickable: true,
    },
    breakpoints: {
        767: {
            slidesPerView: 2,
        },
    },
});
// ===================== gates
var orgSlider = new Swiper('.organization-swiper-container', {
    spaceBetween: 30,
    grabCursor: true,
    pagination: {
        el: '.organization-swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        767: {
            slidesPerView: 2,
        },
    },
});

// ===================== instructor
var instructorSlider = new Swiper('.instructor-swiper-container', {
    spaceBetween: 30,
    grabCursor: true,
    pagination: {
        el: '.instructor-pagination',
        clickable: true,
    },
    breakpoints: {
        767: {
            slidesPerView: 3,
        },
    },
});