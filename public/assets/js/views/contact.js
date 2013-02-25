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

                var self = this;

                this.$el.html( this.template( this.model.toJSON() ) );

                // bind editable to the name column
                this.$el.find('.name-edit').editable(function(value, settings) { 
                    
                    self.model.save({ name: value, field: 'name' }, {

                    wait: true,

                    success: function (model, response) {
                        console.log('update successful');
             
                    }

                });     

                    return(value);

                }, { 
                        cssclass : 'editable'
                        // type    : 'textarea',
                        // submit  : 'OK',
                });

                // bind editable to the email column
                this.$el.find('.email-edit').editable(function(value, settings) { 
                    
                    self.model.save({ email: value, field: 'email' }, {

                    
                   
                    wait: true,

                    url: 'tesdasdasdasdsat',

                    success: function (model, response) {
                        console.log('update successful');
             
                    }

                });     

                    return(value);

                }, { 
                        cssclass : 'editable'
                        // type    : 'textarea',
                        // submit  : 'OK',
                });

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
