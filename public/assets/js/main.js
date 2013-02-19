console.log('javascript working in main.js');

var app = app || {};

var appView;

(function($) {

    $(function() {

        console.log('jquery working in main.js');

        //var contactList = new app.Contacts();

        //console.log(app.Contacts);

        // create instance of master view
        //new app.AppView({ model: app.Contacts });
       
        var AppRouter = Backbone.Router.extend({

		    routes: {
		        "" : "contacts",
		        "contacts/page/:page"	: "contacts",
		    },

		    initialize: function () {
		        console.log(' router working');
		      	// console.log(app);
		        // new app.AppView({ model: app.Contacts })
		    },

		    contacts: function (page) {
		    	//console.log(this);
		    	//console.log(app);
		    	// console.log('current page' + page);

		    	var page = page ? parseInt(page, 10) : 1;
		    	//console.log(p);

		    	//app.AppView.undelegateEvents();

                //app.AppView.remove();

                // manually clean the view first if it exists before creating a new one,
                // to avoid events being duplicated since backbone keeps a ghost view.
                // old views are not automatically destroyed, so we will destroy it manually
                if (appView) {
		    		appView.clean();
		    	}
                
		    	appView = new app.AppView({ model: app.Contacts, page: page });
		   
		    },

		});


        router = new AppRouter();

        // since I tied the views, models and collections in the variable app,
        // then I should inject it to the router
       	router = new AppRouter(app);
		Backbone.history.start();

  	});

} (jQuery));