var app = app || {};

(function($) {

    $(function() {

        	app.AppRouter = Backbone.Router.extend({

		    routes: {
		        "" : "contacts",
		       	"contacts/page/:page"	: "contacts",
		    },

		    initialize: function () {
		    	
		    },

		    contacts: function (page) {

		    	var page = page ? parseInt(page, 10) : 1;

                // manually clean the view first if it exists before creating a new one,
                // to avoid events being duplicated since backbone keeps a ghost view.
                // old views are not automatically destroyed, so we will destroy it manually
                // by calling close function
       //          if (appView) {
		    	// 	 appView.close();
		    	// 	//$('appView.el').empty();
		    	// 	//appView.remove();
		    	// }
                
               // console.log(appView);

		    	var contacts = new app.ContactsCollection();

		    	if (app.MainView) {
		    		app.MainView.remove();
		    	};

		  		app.MainView = new app.AppView({ model: contacts, page: page });
		  		$('#add-contact-form-con').html(app.MainView.render().$el);
		   
		    },

		});

       	// router = new AppRouter();

        // since I tied the views, models and collections in the variable app,
        // then I should inject it to the router
       	router = new app.AppRouter();
		Backbone.history.start();

  	});

} (jQuery));