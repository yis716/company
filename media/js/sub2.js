// before 높이설정
function updateBeforeHeight() {
    const imageContainers = document.querySelectorAll('.image-container');
    imageContainers.forEach(container => {
        const img = container.querySelector('img');
        const beforeHeight = `${img.clientHeight}px`;
        container.style.setProperty('--before-height', beforeHeight);
    });
}

window.addEventListener('resize', updateBeforeHeight);
window.addEventListener('load', updateBeforeHeight);



// swiper
var swiper = new Swiper('.swiper-container', {
    pagination: {
        el: '.swiper-pagination',
    },
    slidesPerView: 'auto',
    paginationClickable: true,
    spaceBetween: 0,
    freeMode: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {

        1280: {

            slidesPerView: 4,
            spaceBetween: 20,
        },

        1024: {

            slidesPerView: 3,
            spaceBetween: 20,

        },

        768: {

            slidesPerView: 2,
            spaceBetween: 20,

        },

        640: {

            slidesPerView: 1,
            spaceBetween: 20,

        }
    }
});