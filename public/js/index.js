$(document).ready(function(){   
resizeDiv();
});
window.onresize = function(event) {
resizeDiv();
}
function resizeDiv(){
    //alert("hello");
    var vpw = $(window).width();
var windheight = $(window).height();
var menuheight = $('.navbar ').height();
var headersize=windheight-menuheight;
$('.gjheader').css({'height': headersize +'px'});


/********************/
var distance = $('.menu-wrapper').offset().top,
    $window = $(window);

$window.scroll(function() {
    if ( $window.scrollTop() >= distance ) {
        $('.custom-menu-wrapper').addClass("navbar-fixed-top");
    }
    else{
        $('.custom-menu-wrapper').removeClass("navbar-fixed-top");
    }

    if ($(this).scrollTop() > 100) { 
        $('#return-to-top').fadeIn(); 
    } else { 
        $('#return-to-top').fadeOut(); 
    } 

    return;
});


    $('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});

/******************/
}



$(document).ready(function () {
    $(document).on("scroll", onScroll);
    $('.navbar-nav li a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    $(document).off("scroll");
    $('.navbar-nav li a').each(function () {
    $(this).removeClass('active');
    $(this).css("border-bottom-color","transparent");
    })
    $(this).addClass('active');
    $(this).css("border-bottom-color","gold");

    var target = this.hash,
    menu = target;
    $target = $(target);

    $('html, body').stop().animate({
    'scrollTop': ($target.offset().top)-20
    }, 500, 'swing', function () {
    window.location.hash = target;
    $(document).on("scroll", onScroll);
    });
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop()+120;
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
}

