$('.sponsor-logos').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: false,
    pauseOnHover: false,
responsive: [
{
  breakpoint: 768,
  settings: {
    slidesToShow: 4,
    slidesToScroll: 4,
    infinite: false,
    dots: false
  }
},
{
  breakpoint: 520,
  settings: {
    slidesToShow: 3,
    slidesToScroll: 3
  }
},
// You can unslick at a given breakpoint now by adding:
// settings: "unslick"
// instead of a settings object
]
});

jQuery(document).ready(function( $ )
{ $('.counter').counterUp({
  delay: 10,
  time: 1000
});
});

window.addEventListener('scroll', function () {
  let header = document.querySelector('header');
  let windowPosition = window.scrollY > 700;
  header.classList.toggle('scrolling-active', windowPosition);
})
