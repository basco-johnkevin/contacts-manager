var App = App || {};

(function($) {

    $(function() {

    	// add close function to all views
    	Backbone.View.prototype.close = function(){

		  	this.remove();
		  	this.unbind();

		  	if (this.onClose){
			    this.onClose();
			}

		}

		// main router
        App.Router = Backbone.Router.extend({

		    routes: {
		        "" : "contacts",
		        "test" : "contacts"
		    },

		    contacts: function () {

		    	var contacts = new App.Contacts();

		  		var appView = new App.AppView({ collection: contacts });
		  		
		  		this.showView(appView);

		  		// $('#add-contact-form-con').html(app.MainView.render().$el);

		    },

		    // handles showing views and disposal
		    showView: function (view) {

			    if (this.currentView) {
				    this.currentView.close();
				}
				 
		    	this.currentView = view;
			    this.currentView.render();
			 
			    $("#main-content").html(this.currentView.el);

			}
 
		});

       	App.router = new App.Router();
		Backbone.history.start();

		console.log(window.App.router);

  	});

} (jQuery));