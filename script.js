$('.owl-carousel').owlCarousel({
    items:4,
    loop: true,
    nav: false,
    autoplay: true,
    autoplayTimeout:2000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:6
        }
    }
})

// document.querySelector('.box').addEventListener('onMouseOver', (e) => 
// { if(e.target.classList.contains('getting-started-btn')) 
// { document.querySelector('.box').style.border = '2px solid black'; } })

