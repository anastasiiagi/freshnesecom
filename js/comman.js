const swiper = new Swiper('.swiper', {
  // Optional parameters
    direction: 'horizontal',
    loop: true,

  // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    
    slidesPerGroup: 1,
    spaceBetween: 32,
    slidesPerView: 2.8,
    centeredSlides: true, 
    freeMode: true,
    
    // slidesPerView: 2.8,
    // slidesPerGroup: 1,
});