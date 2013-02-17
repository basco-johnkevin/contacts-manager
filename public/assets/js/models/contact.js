console.log('javascript working in models/contact.js');

var app = app || {};

(function($) {

    $(function() {

        console.log('jquery working in models/contact.js');

        app.Contact = Backbone.Model.extend({

            defaults: {
                name: '',
                email: ''
            },

            urlRoot: 'contacts/',

            validate: function (attrs, options) {
                // validate data here
                if (attrs.name === '' || attrs.email === '') {
                    return "name or email cant be empty";
                }

            },

        });

  });

} (jQuery));