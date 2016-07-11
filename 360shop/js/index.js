var swiper = new Swiper('.swiper-container1', {
    pagination: '.swiper-pagination',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    paginationClickable: true,
    centeredSlides: true,
    loop : true,
    autoplay: 2500,
    autoplayDisableOnInteraction: false
});

var swiper = new Swiper('.swiper-container2', {
    pagination: '.swiper-pagination',
    slidesPerView: 3,
    slidesPerGroup:3,
});