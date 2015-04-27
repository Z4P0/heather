(function (window, document, undefined) {
    'use strict';

    window.heather = {
        tag: 'heather.',
        init: function() {
            console.log(this.tag);

            function update_header() {
            }

            // var $heather_image = $('#heather-image');
            var $h1 = $('#h1');

            // $h1.css('background', 'tomato');
            // setup the header thing
            $('.overview p').each(function (i, p) {
                var $p  = $(p);
                $p.mouseover(function (event) {
                    // console.log($h1);
                    // console.log($p.attr('data-image-filename'));
                    // $heather_image.attr('src', $p.attr('data-image-filename'));
                    $h1.css('background', $p.attr('data-image-filename'));
                    $h1.attr('style', 'background-image: url('+$p.attr('data-image-filename')+');');
                    // $h1.css({
                    //     'background-image': $p.attr('data-image-filename')
                    // });
                });
            });
        }
    };

    $(document).ready(function () {
        $(document).foundation();
        heather.init();
    });

}(window, window.document));
