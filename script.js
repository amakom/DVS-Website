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


