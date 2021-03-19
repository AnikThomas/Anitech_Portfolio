//  Carousel home page
$('.carousel').carousel({
    interval: 4000,
    pause: 'hover'
    });

// Featured products slick on home page
$(document).ready(function(){
    $('.logo-area-products').slick({
        slidesToShow: 6,
        slidesToscroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
 });

 // testimonial about page
$('.slider-testimonials').slick({
        infinite: true,
        slideToShow: 1,
        slideToScroll: 1
    });

// PRODUCTS SLICK
$(document).ready(function(){
    $('.logo-area2').slick({
        slidesToShow: 6,
        slidesToscroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 4
                 }
               }, {
                breakpoint: 520,
                settings: {
                    slidesToShow: 3
                     }
                }]
        });
    });
    
// SLICK LISTS OF PRODUCTS BRANDS 
$(document).ready(function(){
    $('.logo-area-lists').slick({
        slidesToShow: 6,
        slidesToscroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
});



