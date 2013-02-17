console.log('javascript working in main.js');

var app = app || {};

(function($) {

    $(function() {

        console.log('jquery working in main.js');

        // create instance of master view
        new app.AppView();

  });

} (jQuery));