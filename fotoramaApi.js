function fotoramaApi(){
$('.fotorama').fotorama({
 width: '100%',
 maxwidth: '100%',
 ratio: 1600/950,
 maxheight: '100%',
 allowfullscreen: false,
 nav: 'thumbs',
 thumbwidth: 160,
 thumbheight: 100,
 fit: 'scaledown',
 thumbborderwidth: 4,
 thumbmargin: 10,
 thumbfit: 'contain',
 swipe: true,
 trackpad: true,
});
    if($('#aniimated-thumbnials').length) {
        var $lg = $('#aniimated-thumbnials');
        // 1. Initialize fotorama manually.
        var $fotoramaDiv = $('.fotorama').fotorama();
        // 2. Get the API object.
        var fotorama = $fotoramaDiv.data('fotorama');

        var total = fotorama.size;

        function fotoramaElementStatik(){
            $('.counter').html('<span class="current">'+(fotorama.activeIndex+1)+'</span> / <span class="total">'+total+'</span>');
            $('.fotorama__nav-wrap').append('<div class="foto__captions"><div class="in_cap">'+fotorama.activeFrame.caption+'<div></div>');
        }fotoramaElementStatik();

        function fotoramaElementEvent(){
            $('.counter').find('.current').text(fotorama.activeIndex+1);
            $('.fotorama__nav-wrap').find('.in_cap').text(fotorama.activeFrame.caption);
        }

        //fotorama
        //console.log(fotorama);

$('.fotorama').on('fotorama:show', function (e) {
					 e.preventDefault();
				     fotoramaElementEvent();
				 });

        $('.fotorama__arr').click(function(event) {
            event.preventDefault();
            fotoramaElementEvent();
        });

        $('.fotorama__stage__shaft').mouseup(function(event) {
            event.preventDefault();
            setTimeout(function(){
                fotoramaElementEvent();
            }, 250);
        });

        document.addEventListener('touchstart', function(event) {
            //event.preventDefault();
            event.stopPropagation();
            setTimeout(function(){
                fotoramaElementEvent();
            }, 250);
        }, false);

        function fototamaResOptions() {
            if ($(window).width() <= 768) {
                fotorama.setOptions({
                    ratio: 16/9,
                    captions: false,
                    thumbwidth: 100,
                    thumbheight: 70
                });
            } else {
                fotorama.setOptions({
                    ratio: 1600/550,
                    captions: true,
                    thumbwidth: 160,
                    thumbheight: 100
                });
            }
        }fototamaResOptions();

        window.addEventListener('resize', function () {
            fototamaResOptions();
        });

        $lg.lightGallery();
        $('.full_foto').click(function(event) {
            event.preventDefault();

            $('#aniimated-thumbnials a').trigger('click');

            $lg.data('lightGallery').slide(fotorama.activeIndex);
            $('.lg-thumb.lg-group .lg-thumb-item').removeClass('active');
            $('.lg-thumb.lg-group .lg-thumb-item').eq(fotorama.activeIndex).addClass('active');
        });
    }
} fotoramaApi();
