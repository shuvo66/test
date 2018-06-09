$('#Carousel').owlCarousel({
    loop:true,
    margin:3,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    },
    autoplay:true,

    autoplayTimeout:2000,
    transitionStyle : false,
    dots : false,
    animateOut: 'fadeOut'
})