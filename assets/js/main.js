(function($) {
    "use strict";
    
    jQuery(document).ready(function($) {
        
        // Header Sticky
        $(window).on('scroll', function() {
            if ($(this).scrollTop() > 120) {
                $('.navbar').addClass("is-sticky");
            } else {
                $('.navbar').removeClass("is-sticky");
            }
        });
        
        // Navbar Menu JS
        $('.navbar .navbar-nav li a').on('click', function(e) {
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 100
            }, 1500);
            e.preventDefault();
        });
        $('.navbar .navbar-nav li a').on('click', function() {
            $('.navbar-collapse').collapse('hide');
        });
        
        // Video Popup
        $('.video-btn').modalVideo();
        
        // Feedback Carousel
        var $imagesSlider = $(".feedback-slides .client-feedback>div"),
            $thumbnailsSlider = $(".client-thumbnails>div");
        
        $imagesSlider.slick({
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            cssEase: 'linear',
            fade: true,
            autoplay: true,
            draggable: true,
            asNavFor: ".client-thumbnails>div",
            prevArrow: '.client-feedback .prev-arrow',
            nextArrow: '.client-feedback .next-arrow'
        });
        
        $thumbnailsSlider.slick({
            speed: 300,
            slidesToShow: 5,
            slidesToScroll: 1,
            cssEase: 'linear',
            autoplay: true,
            centerMode: true,
            draggable: false,
            focusOnSelect: true,
            asNavFor: ".feedback-slides .client-feedback>div",
            prevArrow: '.client-thumbnails .prev-arrow',
            nextArrow: '.client-thumbnails .next-arrow',
        });
        
        // Go to Top
        $(function() {
            //Scroll event
            $(window).on('scroll', function() {
                var scrolled = $(window).scrollTop();
                if (scrolled > 300) $('.go-top').fadeIn('slow');
                if (scrolled < 300) $('.go-top').fadeOut('slow');
            });
            //Click event
            $('.go-top').on('click', function() {
                $("html, body").animate({
                    scrollTop: "0"
                }, 500);
            });
        });
        
        // FAQ Accordion
        $(function() {
            $('.accordion').find('.accordion-title').on('click', function() {
                // Adds Active Class
                $(this).toggleClass('active');
                // Expand or Collapse This Panel
                $(this).next().slideToggle('fast');
                // Hide The Other Panels
                $('.accordion-content').not($(this).next()).slideUp('fast');
                // Removes Active Class From Other Titles
                $('.accordion-title').not($(this)).removeClass('active');
            });
        });
        
        // Tabs
        $("#tabs li").on("click", function() {
            var tab = $(this).attr("id");
            if ($(this).hasClass("inactive")) {
                $(this).removeClass("inactive");
                $(this).addClass("active");
                $(this).siblings().removeClass("active");
                $(this).siblings().addClass("inactive");
                $("#" + tab + "_content").addClass("show");
                $("#" + tab + "_content").siblings("div").removeClass("show");
            }
        });
        
        // Count Time 
        function makeTimer() {
            var endTime = new Date("August 19, 2022 17:00:00 PDT");
            var endTime = (Date.parse(endTime)) / 1000;
            var now = new Date();
            var now = (Date.parse(now) / 1000);
            var timeLeft = endTime - now;
            var days = Math.floor(timeLeft / 86400);
            var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
            var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
            var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
            if (hours < "10") {
                hours = "0" + hours;
            }
            if (minutes < "10") {
                minutes = "0" + minutes;
            }
            if (seconds < "10") {
                seconds = "0" + seconds;
            }
            $("#days").html(days + "<span>Days</span>");
            $("#hours").html(hours + "<span>Hours</span>");
            $("#minutes").html(minutes + "<span>Minutes</span>");
            $("#seconds").html(seconds + "<span>Seconds</span>");
        }
        setInterval(function() {
            makeTimer();
        }, 1000);
        
        // Preloader
        jQuery(window).on('load', function() {
            $('.preloader').fadeOut();
        });
    });
}(jQuery));