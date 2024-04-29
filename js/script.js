$(window).on("load", function () {

   // Preload

   $("#preload").fadeOut(500);

});


jQuery(document).ready(function () {

   // Tabs Menu

   $('.link-menu a').click(function (event) {
      event.preventDefault();
   });
   $('.link-menu a').each(function (i) {
      $(this).attr('data-tab', 'tab' + i);
   });
   $('.wrapper-content-menu .single-price-content').each(function (i) {
      $(this).attr('data-tab', 'tab' + i);
   });
   $('.link-menu a').on('click', function () {
      var datatab = $(this).data('tab');
      $('.link-menu a').removeClass('active');
      $(this).addClass('active');
      $('.wrapper-content-menu .single-price-content').hide();
      $('.wrapper-content-menu .single-price-content[data-tab=' + datatab + ']').css({
         'display': 'flex'
      });
   });

   // Gallery Menu

   $('.popup-gallery').magnificPopup({
      delegate: 'a',
      type: 'image',
      tLoading: 'Loading image #%curr%...',
      mainClass: 'mfp-img-mobile',
      gallery: {
         enabled: true,
         navigateByImgClick: true,
         preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
      },
      image: {
         tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
         titleSrc: function (item) {
            return item.el.attr('title') + '<small></small>';
         }
      }
   });

   // Slider Offer

   $('.slider').bxSlider({
      mode: 'fade',
      pager: false,
      controls: false,
      auto: true,
      pause: 3000

   });

   // Owl Carousel Testimonials

   $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 20,
      nav: true,
      dots: false,
      navText: ['<i class="fa-solid fa-chevron-left"></i>', '<i class="fa-solid fa-chevron-right"></i>'],
      responsive: {
         0: {
            items: 1
         },
         600: {
            items: 2
         },
         1000: {
            items: 2
         }
      }
   });

   // Popup Video

   $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,

      fixedContentPos: false
   });

   // Scroll Top Button

   $('#scroll-top').click(function () {
      $('body,html').animate({
         scrollTop: 0
      }, 800);
      return false;
   });

   // Scroll Top

   $('#scroll-top').hide();
   $(window).scroll(function () {
      if ($(this).scrollTop() > 50) {
         $('#scroll-top').fadeIn();
      } else {
         $('#scroll-top').fadeOut();
      }
   });

   // Scroll Fixed Menu

   $(window).scroll(function () {
      var headerTop = $('.wrapper-header-top').height();
      if ($(this).scrollTop() >= headerTop) {
         $('.header-top').addClass('fixed');
         $('.wrapper-header-top').hide();
      } else {
         $('.header-top').removeClass('fixed');
         $('.wrapper-header-top').show();
      }
   });

   // Scroll Menu

   $(".menu li").on("click", "a", function (event) {
      event.preventDefault();
      var id = $(this).attr('href'),
         top = $(id).offset().top;
      $('body,html').animate({
         scrollTop: top
      }, 1500);
   });

   $("#logo, .header-content a, .offer-content a").on("click", function (event) {
      event.preventDefault();
      var id = $(this).attr('href'),
         top = $(id).offset().top;
      $('body,html').animate({
         scrollTop: top
      }, 1500);
   });

   // Mobile Menu

   $('#openmenu').click(function (event) {
      event.preventDefault();
      $('#nav').animate({
         'left': 0
      }, 800);
   });

   $('#closemenu').click(function (event) {
      event.preventDefault();
      $('#nav').animate({
         'left': '-320px'
      }, 800);
   });

   $('#nav a').on("click", function () {
      $("#nav").animate({
         'left': '-320px'
      }, 800);
   });

   // Booking Ajax 

   $('#sendbook').click(function (event) {
      event.preventDefault();

      var name = $('input[name="name"]').val();
      var lastname = $('input[name="lastname"]').val();
      var phone = $('input[name="phone"]').val();
      var email = $('input[name="email"]').val();
      var date = $('input[name="date"]').val();
      var time = $('input[name="time"]').val();

      if (name == '' || lastname == '' || phone == '' || email == '' || date == '' || time == '') {

         $('.res-booking').fadeIn().html('<span class="error">All fields must be filled.</span>');
         $('input').focus(function () {
            $('.res-booking').fadeOut();
         });

      } else {

         $.ajax({
            url: '../booking.php',
            type: 'POST',
            data: {
               name: name,
               lastname: lastname,
               phone: phone,
               email: email,
               date: date,
               time: time
            },
            dataType: 'html',
            success: function (data) {
               if (data == 'Send') {

                  $('.res-booking').fadeIn().html('<span class="send">Thanks. We will contact you shortly.</span>');

                  $('input[name="name"]').val('');
                  $('input[name="lastname"]').val('');
                  $('input[name="phone"]').val('');
                  $('input[name="email"]').val('');
                  $('input[name="date"]').val('');
                  $('input[name="time"]').val('');

               }
            }
         }); // ajax
      }
   });


}); // ready