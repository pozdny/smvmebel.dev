/**
 * Created by Valentina on 26.10.2015.
 */
$(function() {
    //parallax
    $(window).stellar({
        horizontalScrolling: false,
        responsive: true/*,
         scrollProperty: 'scroll',
         parallaxElements: false,
         horizontalScrolling: false,
         horizontalOffset: 0,
         verticalOffset: 0*/
    });
    /* ==============================================
     WOW plugin triggers animate.css on scroll
     =============================================== */

    wow = new WOW(
        {
            animateClass: 'animated',
            offset: 100,
            mobile: true
        }
    );
    wow.init();

    $(".btn").on('click', function(e){
        //(e.preventDefault()) ? e.preventDefault() : e.returnValue = false;

    });
    //MODAL
    /*$('.modal-cover').Mmodal({
        width: 948,
        height: 'auto',
        delay: 500
    });*/

    $(".product_ajax_link").fancybox({
        type: 'ajax',
        afterShow: function(current, previous) {
            /*$('#product_info .slider11').bxSlider({
                slideWidth: 200,
                minSlides: 3,
                maxSlides: 3,
                moveSlides: 1,
                slideMargin: 1
            });*/
        }
    });
    $('.fancybox').fancybox();
    /**
     * scrollspy
     */
    //$("#main").onepage_scroll();
    $('body').scrollspy({ target: '.navbar' })
    /**
     * Make navbar active
     */

    $("body").waypoint(function() {
        $(".navbar").toggleClass("navbar__initial");
        return false;
    }, { offset: "-20px" });

    /**
     * Change sidebar link color
     */

    $("body").waypoint(function() {
        $(".sidebar__btn").toggleClass("sidebar__btn_alt");
        return false;
    }, { offset: "-100%" });

    /**
     * Smooth scroll to anchor
     */


    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});
function delayedFunc(callback, duration) {
    setTimeout(callback, duration);
}

