console.log('javascript working in main.js');

var app = app || {};

(function($) {

    $(function() {

        console.log('jquery working in main.js');

        //var contactList = new app.Contacts();

        //console.log(app.Contacts);

        // create instance of master view
        new app.AppView({ model: app.Contacts });
        //new app.AppView();
  	});

} (jQuery));