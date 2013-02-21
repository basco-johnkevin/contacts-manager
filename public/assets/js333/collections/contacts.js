var app = app || {};

(function($) {

    $(function() {

        	app.ContactsCollection = Backbone.Collection.extend({
        	
			model: app.ContactModel,

			url: 'contacts/',

		});

		// instance of collection
        //app.Contacts = new ContactList();

  });

} (jQuery));

