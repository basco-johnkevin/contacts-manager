var app = app || {};

(function($) {

    $(function() {

        var ContactList = Backbone.Collection.extend({
        	
			model: app.Contact,

			url: 'contacts/',

		});

		// instance of collection
        app.Contacts = new ContactList();

  });

} (jQuery));

