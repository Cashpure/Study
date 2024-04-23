$(function () {

   // var mixer = mixitup('.directions__list');

   $('.directions__filter-btn').on('click', function () {
      $('.directions__filter-btn').removeClass('directions__filter-btn--active')
      $(this).addClass('directions__filter-btn--active')
   })

   $('.team__slider').slick({
      arrows: false,
      slidesToShow: 4,
      infinite: true,
      draggable: false,
      waitForAnimate: false,
      responsive:
         [
            {
               breakpoint: 1100,
               settings: {
                  slidesToShow: 3,
               },
            },
            {
               breakpoint: 750,
               settings: {
                  slidesToShow: 2,
               },
            },
            {
               breakpoint: 550,
               settings: {
                  slidesToShow: 1,
                  draggable: true,
               },
            },
         ]
   })
   $('.team__slider-prev').on('click', function (e) {
      e.preventDefault()
      $('.team__slider').slick('slickPrev')
   })
   $('.team__slider-next').on('click', function (e) {
      e.preventDefault()
      $('.team__slider').slick('slickNext')
   })

   $('.testimonials__slider').slick({
      arrows: false,
      dots: true,
      appendDots: $('.testimonials__dots'),
      waitForAnimate: false,
      // responsive:
      //   [
      //     {
      //       breakpoint: 700,
      //       settings: {

      //       },
      //     },
      //   ]
   })
   $('.testimonials__prev').on('click', function (e) {
      e.preventDefault()
      $('.testimonials__slider').slick('slickPrev')
   })
   $('.testimonials__next').on('click', function (e) {
      e.preventDefault()
      $('.testimonials__slider').slick('slickNext')
   })

   $('.program__acc-link').on('click', function (e) {
      e.preventDefault()
      if ($(this).hasClass('program__acc-link--active')) {
         $(this).removeClass('program__acc-link--active')
         $(this).children('.program__acc-text').slideUp()
      } else {
         $('.program__acc-link').removeClass('program__acc-link--active')
         $('.program__acc-text').slideUp()
         $(this).addClass('program__acc-link--active')
         $(this).children('.program__acc-text').slideDown()
      }
   })

   $(".header__nav-list a, .footer__go-top").on("click", function (e) {
      e.preventDefault()
      var id = $(this).attr('href'),
         top = $(id).offset().top
      $('body,html').animate({ scrollTop: top }, 800)
   })

   setInterval(() => {
      if ($(window).scrollTop() > 0 && $('.header__top').hasClass('header__top--open') === false) {
         $('.burger').addClass('burger--follow')
      } else {
         $('.burger').removeClass('burger--follow')
      }
   }, 0)
   $('.burger').on('click', function (e) {
      e.preventDefault()
      $('.header__top').toggleClass('header__top--open')
      $('.overlay').toggleClass('overlay--show')
   })
   $('.overlay').on('click', function (e) {
      e.preventDefault()
      $('.header__top').removeClass('header__top--open')
      $('.log').fadeOut()
      $('.register').fadeOut()
      $('.overlay').removeClass('overlay--show')
      $('.burger').removeClass('burger--off')

   })

   $('.footer__top-title--slide').on('click', function () {
      $(this).next().slideToggle()
   })

   $('.login').on('click', function (e) {
      e.preventDefault()
      $('.log').fadeToggle();
      $('.burger').toggleClass('burger--off');
      if ($('.overlay').hasClass('overlay--show')) {

      } else {
         $('.overlay').addClass('overlay--show')
      };
      if ($('.header__top').hasClass('header__top--open')) {
         $('.header__top').removeClass('header__top--open')
      }
   })
   $('.signup').on('click', function (e) {
      e.preventDefault()
      $('.register').fadeToggle();
      $('.register').removeClass('register--off');
      $('.burger').toggleClass('burger--off');
      if ($('.overlay').hasClass('overlay--show')) {

      } else {
         $('.overlay').addClass('overlay--show')
      };
      if ($('.header__top').hasClass('header__top--open')) {
         $('.header__top').removeClass('header__top--open')
      }
   })

   $('.signin__button').on('click', function (e) {
      e.preventDefault()
      $('.register').addClass('register--off')
      $('.log').fadeIn()
   })
})

let validation = new JustValidate("form")

let selector = document.querySelectorAll(".selector")
let im = new Inputmask("+7(999) 999-99-99")
im.mask(selector)

// validation.addField("#email__log", [
//    {
//       rule: "required",
//       errorMessage: "Введите номер!"
//    },
//    {
//       rule: "minLength",
//       value: 11,
//       errorMessage: "Минимум 11 символов!"
//    },
// ])

