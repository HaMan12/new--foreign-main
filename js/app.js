(function ($) {
  const goAnchor = () => {
    // 觸發錨點
    $('[data-href]').on('click', function () {
      let target = $(this).data('href');
      let headerHeight = $('header').outerHeight();
      let targetPosition = $(target).offset().top;
      $('.mobile-nav').removeClass('is-active');
      $('.hamburger').removeClass('is-active');
      $('html,body').animate({
        scrollTop: targetPosition - headerHeight
      }, 700);
    });
  };
  const openHamburger = () => {
    $('.hamburger').on('click', function () {
      $('.mobile-nav').toggleClass('is-active');
      $(this).toggleClass('is-active');
    });
  };
  const openDropDownMenu = () => {
    $('.dropDownMenu').on('click', function () {
      $('.dropDownMenuList').slideToggle();
      $('.dropDownMenuArrow').toggleClass('is-active');
    });
  };
  const openModal = () => {
    $('.openModal').on('click', function () {
      $('.modal').addClass('is-active');
      $('body').addClass('overflow-hidden');
    });
    $('.closeModal').on('click', function () {
      $('.modal').removeClass('is-active');
      $('body').removeClass('overflow-hidden');
    });
  };
  const openModal1 = () => {
    $('.openModal1').on('click', function () {
      $('.modal1').addClass('is-active');
      $('body').addClass('overflow-hidden');
    });
    $('.closeModal1').on('click', function () {
      $('.modal1').removeClass('is-active');
      $('body').removeClass('overflow-hidden');
    });
  };
  const initSwiper = () => {
    const mobileSmallCardSwiper = new Swiper('.mobile-small-card .swiper', {
      slidesPerView: 4,
      spaceBetween: 25,
      grid: {
        rows: 2,
        fill: 'row',
      },
    })

    new Swiper('.card .swiper', {
      loop: true,
      slidesPerView: 1,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },
      navigation: {
        nextEl: '.card .btn-next',
        prevEl: '.card .btn-prev',
      },
      thumbs: {
        swiper: mobileSmallCardSwiper
      }
    })

    const pcSmallCardSwiper = new Swiper('.pc-small-card .swiper', {
      slidesPerView: 4,
      spaceBetween: 30,
      grid: {
        rows: 2,
        fill: 'row',
      },
    })

    new Swiper('.card .swiper', {
      loop: true,
      slidesPerView: 1,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },
      navigation: {
        nextEl: '.card .btn-next',
        prevEl: '.card .btn-prev',
      },
      thumbs: {
        swiper: pcSmallCardSwiper,
      }
    })

  };
  $(function () {
    goAnchor();
    openHamburger();
    openDropDownMenu();
    openModal();
    openModal1();
    initSwiper();
  });
})(jQuery);