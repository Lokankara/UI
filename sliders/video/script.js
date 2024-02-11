$(document).ready(function () {
    var videos = [
        '824804225',
        '824804225',
        '824804225',
        '824804225',
        '824804225',
        '824804225',
        '824804225',
        '824804225'
    ];

    var requests = videos.map(function (videoId) {
        return $.getJSON('https://vimeo.com/api/v2/video/' + videoId + '.json', function (data) {
            var videoThumb = data[0].thumbnail_medium;
            var videoItem = '<div><a data-fancybox="gallery" data-src="https://player.vimeo.com/video/'
                + videoId + '?autoplay=1" href="javascript:;"><img src="' 
                + videoThumb 
                + '" alt="Video Thumbnail"></a></div>';
            $('.slider').append(videoItem);
        });
    });

    $.when.apply($, requests).then(function () {
        $('.slider').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
        });
    });
});
