var App = App || {};

(function($) {

    $(function() {

        	App.Contacts = Backbone.Collection.extend({
        	
			model: App.Contact,

			url: 'contacts/'

		});
  });

} (jQuery));

