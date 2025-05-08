// hero slider
var swiper = new Swiper(".mySwiper", {
    loop: true,
    effect: "fade",
    speed: 2000,
    autoplay: {
        duration: 2000
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    // pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true,
    // },
});
// discover more slider
var swiper = new Swiper(".discoverOnSell", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 15,
    speed: 1000,
    autoplay: {
        duration: 8000
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    // pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true,
    // },
    breakpoints: {
        500: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        767: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
    },
});
function addToWishList(button) {
    const icon = button.querySelector('i');
    if (icon.classList.contains('fa-regular')) {
        icon.classList.remove('fa-regular');
        icon.classList.add('fa-solid');
    } else {
        icon.classList.remove('fa-solid');
        icon.classList.add('fa-regular');
    }
}