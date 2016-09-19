$(document).ready(function(){
var menu_height=$('.menu-wrapper').height();
var window_height=$(window).height();

$('.gjheader').height(window_height - menu_height);

$('#navbar-brand-centered .nav li a').on("click", function(){
    var section=$(this).attr('href');
    var offset = 20; //Offset of 20px
    $('html, body').animate({
        scrollTop: $(section).offset().top - menu_height
    }, 2000);
});

$(window).on('resize',function(){
    $('.gjheader').height(window_height - menu_height);
});

$(window).on("scroll",function(e){
    var scrollPos = $(document).scrollTop() + menu_height + 10;

    if($(window).scrollTop() > ($('.menu-wrapper').offset().top)){
        $('.custom-menu-wrapper').addClass('navbar-fixed-top');
        e.preventDefault();
    }
     else{
        $('.custom-menu-wrapper').removeClass('navbar-fixed-top');
        e.preventDefault();
     }


       $('#navbar-brand-centered a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#navbar-brand-centered ul li a').removeClass("active");
            currLink.addClass("active");
            currLink.css("border-bottom-color","gold");
        }
        else{
            currLink.removeClass("active");
            currLink.css("border-bottom-color","transparent");
        }
    });


})

$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});

/* Document ends */
})