console.log('javascript working in collections/contacts.js');

var app = app || {};

(function($) {

    $(function() {

        console.log('jquery working in collections/contacts.js');

        var ContactList = Backbone.Collection.extend({
			model: app.Contact,

			url: 'contacts/',

			initialize: function () {
				//_.bindAll(this, 'notice');
				//console.log(this);
				//console.log('dasdasdasdasdas');
				//this.model.on('destroy', this.notice, this)
				//console.log(this.model + 'model object baby');

			},

			notice: function () {
				//alert('a model has been removed');
			},

		});

		// instance of collection
        app.Contacts = new ContactList();

  });

} (jQuery));

