
  jQuery( document ).ready(function(){
    jQuery(".button-collapse").sideNav();
    jQuery(".slider").slider({
      indicators: false,
      height: 600});
    jQuery('.parallax').parallax();
    jQuery('.scrollspy').scrollSpy();
    jQuery('.modal-trigger').leanModal();

      jQuery(".autoplay").slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint:850,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    });
  })