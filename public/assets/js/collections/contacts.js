console.log('javascript working in collections/contacts.js');

var app = app || {};

(function($) {

    $(function() {

        console.log('jquery working in collections/contacts.js');

        var ContactList = Backbone.Collection.extend({
			model: app.Contact,

			url: 'contacts/',

		});

		// instance of collection
        app.Contacts = new ContactList();

  });

} (jQuery));

