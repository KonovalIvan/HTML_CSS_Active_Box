$(function () {
    
    /*  Fixed__header  */
    let header = $("#header");
    let intro = $("#intro");
    let intro_h = intro.innerHeight();
    let scroll_position = $(window).scrollTop();
    let nav = $("#nav")
    let navToggle = $("#navToggle")
    
    checkScroll(scroll_position, intro_h);
    
    $(window).on("scroll resize", function() {
        
        intro_h = intro.height();
        
        scroll_position = $(this).scrollTop();
        checkScroll(scroll_position, intro_h);
        
    });
    
    function checkScroll(scroll_position, intro_h) {
        
        if(scroll_position > intro_h) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
        
    }
    
    /*  Smooth scroll  */
    $("[data-scroll]").on("click", function(event) {
        
        event.preventDefault();
        
        let element_id = $(this).data('scroll');
        let element_offset = $(element_id).offset().top;
        nav.removeClass("show");
        
        $("html, body").animate({
            
           scrollTop: element_offset - 70
            
        }, 600);
    });
    
    /*  nav Toggle  */    
    $("#navToggle").on("click", function(event) {
        
        event.preventDefault();
        nav.toggleClass("show");
        
    });

    /*  Reviews  */
    let slider = $("#opinionSlider");
    
    slider.slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      arrows:  false,
      dots: true
    }); 
    
});