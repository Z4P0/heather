(function (window, document, undefined) {
    'use strict';

    window.heather = {
        tag: 'heather.',
        init: function() {
            console.log(this.tag);
        }
    };

    $(document).ready(function () {
        $(document).foundation();
        heather.init();
    });

}(window, window.document));
