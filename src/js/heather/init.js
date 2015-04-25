(function (window, document, undefined) {
    'use strict';

    window.heather = {
        tag: 'heather.',
        init: function() {
            console.log(this.tag);

            function update_header() {
            }

            // setup the header thing
            $('.overview p').each(function (i, p) {
                var $p  = $(p);
                $p.hover(function (event) {
                    console.log($p.attr('data-image-filename'));
                });
            });
        }
    };

    $(document).ready(function () {
        $(document).foundation();
        heather.init();
    });

}(window, window.document));
