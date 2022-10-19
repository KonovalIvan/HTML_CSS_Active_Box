$(function () {
    
    /*  Fixed__header  */
    let header = $("#header");
    let intro_h = intro.height();
    let intro = $("#intro");
    let scroll_position = $(window).scrollTop();
    
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
        console.log(element_offset);
        
        $("html, body").animate({
            
           scrollTop: element_offset - 70
            
        }, 600);
    });
    
    /*  nav Toggle  */
    let nav = $("#nav")
    let navToggle = $("#navToggle")
    $("#navToggle").on("click", function(event) {
        
        event.preventDefault();
        
        
    });

});