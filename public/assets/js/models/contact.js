var App = App || {};

(function($) {

    $(function() {

        App.Contact = Backbone.Model.extend({

            defaults: {
                name: '',
                email: ''
            },

            urlRoot: 'contacts/',

            // custom urls
            methodUrl:  function(method) {
                if(method == "delete") {
                    return "contacts/" + this.attributes.id;
                } else if (method == "update") {
                    return "contacts/" + this.attributes.id;
                } else if (method == "create") {
                    return "contacts/";
                } 
                return false;
            },

            // override the default backbone.sync for this model to use the custom urls defined in the methodUrl above
            sync: function(method, model, options) {
                if (model.methodUrl && model.methodUrl(method.toLowerCase())) {
                    options = options || {};
                    options.url = model.methodUrl(method.toLowerCase());
                }
                Backbone.sync(method, model, options);
            }

            // validate: function (attrs, options) {
            //     // validate data here
            //     if (attrs.name === '' || attrs.email === '') {
            //         return "name or email cant be empty";
            //     }

            // },

        });

  });

} (jQuery));