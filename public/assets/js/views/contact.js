var App = App || {};

(function($) {

    $(function() {

        'use strict';

        App.ContactView = Backbone.View.extend({
             
            tagName: 'tr', // name of (orphan) root tag in this.el

            template: _.template( $('#contact-template').html() ),

            events: {
                "click .delete-btn" : "deleteContact"
            },

            initialize: function () {
                _.bindAll(this, 'render'); // every function that uses 'this' as the current object should be in here
                
            },

            render: function () {
                this.$el.html( this.template( this.model.toJSON() ) );
                return this; // for chainable calls, like .render().el
            },

            onClose: function () {
                console.log('closing App.ContactView...');
                this.stopListening();
            },

            deleteContact: function () {
                console.log('deleting contact...');

                var self = this;

                // delete the contact record in the database
                this.model.destroy({

                    wait: true,

                    success: function (model, response) {
                        if (response.failed === 'true') {
                            console.log('failed deleting the contact record in the database');
                        } else {
                            // window.App.router.currentView.collection.remove(model);
                            // console.log(window.App.router.currentView.collection);
                            self.close();
                        }
                    }

                });

                return false;
            }

        });

    });

}(jQuery));
