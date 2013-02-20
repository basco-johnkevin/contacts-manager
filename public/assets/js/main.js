var app = app || {};

var appView;

(function($) {

    $(function() {

        Backbone.View.prototype.close = function(){

	  	   // console.log('closing view...');

	  	    if ( this.beforeClose ) {
	  	    	// console.log('calling beforeClose function...');
			    this.beforeClose();
			}

            this.undelegateEvents();
            $(this.el).empty();

		}

        var AppRouter = Backbone.Router.extend({

		    routes: {
		        "" : "contacts",
		        "contacts/page/:page"	: "contacts",
		    },

		    contacts: function (page) {

		    	var page = page ? parseInt(page, 10) : 1;

                // manually clean the view first if it exists before creating a new one,
                // to avoid events being duplicated since backbone keeps a ghost view.
                // old views are not automatically destroyed, so we will destroy it manually
                // by calling close function
                if (appView) {
		    		 appView.close();
		    		//$('appView.el').empty();
		    		//appView.remove();
		    	}
                
                console.log(appView);

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