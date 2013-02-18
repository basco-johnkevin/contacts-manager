var app = app || {};

$(function( $ ) {
    'use strict';

    app.ContactView = Backbone.View.extend({
         
        tagName: 'tr', // name of (orphan) root tag in this.el

        template: _.template( $('#contact-template').html() ),

        // Delegated events for creating new items, and clearing completed ones.
        events: {
            'click .delete-btn': 'deleteContact',
        },

        initialize: function(){
            _.bindAll(this, 'render'); // every function that uses 'this' as the current object should be in here
            
        },

        render: function(){
            // $(this.el).html('<span>' + this.model.get('name') + '</span>');
            this.$el.html( this.template( this.model.toJSON() ) );
            return this; // for chainable calls, like .render().el
        },

        deleteContact: function () {
            console.log('deleting a contact');

            // save the reference of this (the current contact view) to variable self
            // since we will use it inside callbacks
            var self = this;

            // delete the contact record in the database
            this.model.destroy({

                success: function (model, response) {

                    console.log(response);

                    if (response.failed === 'true') {
                        console.log('failed deleting the contact record in the database');
                    } else {
                        console.log(this);
                        console.log(self);
                        // remove this view/item from the DOM
                        self.remove(); 
                    }

                },

                error: function () {
                    console.log('failed deleting the contact record. Please contact administrator');
                },

            });

            
        },

    });

});
