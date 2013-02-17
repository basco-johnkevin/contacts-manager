var app = app || {};

$(function( $ ) {
    'use strict';

    app.ContactView = Backbone.View.extend({
         
        tagName: 'li', // name of (orphan) root tag in this.el

        initialize: function(){
            _.bindAll(this, 'render'); // every function that uses 'this' as the current object should be in here
        },

        render: function(){
            $(this.el).html('<span>' + this.model.get('name') + '</span>');
            return this; // for chainable calls, like .render().el
        }

    });

});
