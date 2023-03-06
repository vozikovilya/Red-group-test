window.addEventListener('DOMContentLoaded', () => {
  
  // Selects
  
  $( function() {
    $('#header__who').selectmenu({
      icons: { button: "header__who-svg" },
    });
  });

  $( function() {
    $('#news__select').selectmenu({
      icons: { button: "news__select-svg" },
    });
  });

  $('.burger').on('click', function() {
    $('body').toggleClass('no-scroll');
    $(this).toggleClass('js-burger-close');
    $('.header__desc').toggleClass('active');
  });
  
  const swiperBanner = new Swiper('.banner__swiper', {
    loop: false,
    arrows: true,
    slidesPerView: 1,
    spaceBetween: 20,
    createElements: true,
    lazyPreloaderClass: 'banner__slide-img',
    speed: 700,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    pagination: {
      el: '.banner__pagination',
      type: 'bullets',
      clickable: true,
    },
    navigation: {
      nextEl: '.banner__arrows-next',
      prevEl: '.banner__arrows-prev',
    },
  });
  
  let swiperComplex = undefined;

  const funcShowSwiper = () => {
    if(window.innerWidth <= 650 && swiperComplex == undefined) {
      swiperComplex = new Swiper('.complex__list', {
        loop: false,
        arrows: false,
        slidesPerView: 1.34,
        spaceBetween: 10,
        createElements: true,
        lazyPreloaderClass: 'complex__item-img',
        speed: 700,
      });
    } else if(window.innerWidth > 650 && swiperComplex !== undefined) {
      swiperComplex.destroy(false, true);
      swiperComplex = undefined;
    }
  };

  funcShowSwiper();

  $(window).on('resize', function() {
    funcShowSwiper();
  });
  
  const swiperNews = new Swiper('.news__swiper', {
    loop: false,
    arrows: true,
    slidesPerView: 1,
    spaceBetween: 20,
    createElements: true,
    lazyPreloaderClass: 'news__slide-img',
    speed: 700,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    navigation: {
      nextEl: '.news__arrows-next',
      prevEl: '.news__arrows-prev',
    },
    breakpoints: {
      650: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      }
    }
  });

  $('.faq__item-btn').on('click', function() {
    $(this).toggleClass('active');
    $(this).closest('.faq__item').toggleClass('active');
  });
});
