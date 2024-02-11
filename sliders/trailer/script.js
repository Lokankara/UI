$(document).ready(function() {

    // slick variables
    var sliderVideoList = $('.series-videos-carousel'),
        sliderLightboxList = $('.person-videos-carousel'),
        visibleVideoSlidesDesktop = 3,
        visibleLightboxSlides = 3,
        visibleSlidesMobile = 1;

      

    // video slider
    sliderVideoList.slick({
        infinite: false,
        draggable: false,
        swipeToSlide: true,
        slidesToShow: visibleVideoSlidesDesktop,
        slidesToScroll: visibleVideoSlidesDesktop,
        arrows: true,
        rows: 0,
        prevArrow: "<div class='slick-prev'><i class='fa fa-angle-left' aria-hidden='true'></i></div>",
        nextArrow: "<div class='slick-next'><i class='fa fa-angle-right' aria-hidden='true'></i></div>",
        responsive: [
            {
              breakpoint: 480,
              settings: {
                slidesToShow: visibleSlidesMobile,
                slidesToScroll: visibleSlidesMobile,
              }
            }
        ],
    });

    sliderVideoList.find('.slick-slide').addClass('visible'); // init all as visible



    // make all slides and images within slides equal height
    function videoSlidesHeight() {
        var videoSliderImgHeight = $('.single-video-item').outerHeight() - 5;

          // $('.single-video-item img').css({
          //       'height': videoSliderImgHeight,
          //       'object-fit': 'cover',
          //   });

        $('.series-videos-carousel .slick-prev, .series-videos-carousel .slick-next').css('height', videoSliderImgHeight);
    }

    videoSlidesHeight();
    $(window).resize(videoSlidesHeight);



    // toggle active for video slider
    $('.single-video-wrapper:first-of-type').addClass('active');

    $('.single-video-wrapper').on('click', function() {
        $('.single-video-wrapper').removeClass('active');
       $(this).addClass('active'); 
    });


    // episode button function
    function episodeBtn(description, button) {
        description.css({'display':'none'});
        button.on('click', function() {
            if( description.is(':visible') ) {
                description.slideUp();
                button.removeClass('expanded');
            } else {
                description.slideDown();  
                button.addClass('expanded');      
            }
        });
    }

    episodeBtn($('.episode-wrapper .episode-desc'), $('.episode-wrapper .episode-info-btn'));
    episodeBtn($('.lb-episode-info .episode-desc'), $('.lb-episode-info .episode-info-btn'));

    

    // sorting categories function
    // hides/shows videos based on category
    $('ul.series-categories-list li.video-cat').on('click', function() {
        if( !$(this).hasClass('active') ) {
            var categoryClass = $(this).attr('data-category');

            $('ul.series-categories-list li.video-cat').removeClass('active');
            $(this).addClass('active');

            if( $(this).data('category') === 'all-videos' ) {
                $('.single-video-wrapper').removeClass('visible').fadeOut('fast').promise().done(function() {
                    $('.single-video-wrapper').addClass('visible').fadeIn('fast');
                });
            } else {
                $('.single-video-wrapper').removeClass('visible').fadeOut('fast').promise().done(function() {
                    $('.single-video-wrapper[data-category*="' + categoryClass + '"]').addClass('visible').fadeIn('fast');
                });
            }

            sliderVideoList.slick('slickGoTo', 0);
        }
    });

    // grays out and disables slick arrows if user reaches the end
    // mainly used for category sorting since it will generate blank slides after sort
    sliderVideoList.on('afterChange',function(e, slick, currentSlide) {
        var currentSlideNumber = currentSlide + 1; // currentSlide starts at 0

        // returns all slides with 'visible' class in a new array
        var visibleSlides = slick.$slides.filter(function(idx, e) {
            return jQuery(e).hasClass('visible');
        }).length;

        console.log(visibleSlides);

        if( currentSlideNumber + visibleVideoSlidesDesktop > visibleSlides ) {
            // disable next button
            $('.series-videos-carousel .slick-arrow.slick-next').addClass('slick-disabled').unbind('click');
        } else {
            $('.series-videos-carousel .slick-arrow.slick-next').removeClass('slick-disabled').bind('click', function() {
                sliderVideoList.slick('slickNext');
            });
        }

        if( currentSlideNumber == 1 ) {
            // disable prev button
            $('.series-videos-carousel .slick-arrow.slick-prev').addClass('slick-disabled').unbind('click');
        } else {
            $('.series-videos-carousel .slick-arrow.slick-prev').removeClass('slick-disabled').bind('click', function() {
                sliderVideoList.slick('slickPrev');
            });
        }

        if( visibleSlides <= 3 ) {
            $('.series-videos-carousel .slick-arrow').fadeOut();
        } else {
            $('.series-videos-carousel .slick-arrow').fadeIn();
        }
    });
  
  
    $('.single-video-wrapper').on('click', function() {   
        var videoID = $(this).attr('data-youtube-id');

        $('.episode-wrapper .episode-item').html('<iframe src="https://www.youtube.com/embed/' + videoID + '?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>');
        $('.episode-wrapper .episode-item iframe')[0].src += "&autoplay=1&showinfo=0";

        $('html, body').animate({scrollTop: $('.episode-wrapper').offset().top}, 400);
    });
});