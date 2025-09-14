    var swiper = new Swiper(".storySwiper", {
 
      navigation: {
        nextEl: ".story-next",
        prevEl: ".story-prev",
      },
      slidesPerView: 12.5,
         spaceBetween: 30,
          slidesPerGroup: 2,  
           freeMode: true, 
    });

    var swiper =new Swiper(".heroSwiper",{
      navigation:{
        nextEl:".hero-next",
        prevEl:".hero-prev"
      },
      slidesPerView:1,
    
       pagination: {
        el: ".swiper-pagination",
      },
    })