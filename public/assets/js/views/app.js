console.log('javascript working in views/app.js');

var app = app || {};

(function($) {

    $(function() {

        console.log('jquery working in views/app.js');

        app.AppView = Backbone.View.extend({

            el: '#add-contact-form-con',

            template: $("#add_contact_form").html(),

            events: {
                'click #add-contact-form #submit-btn': 'addContact',
            },

            initialize: function () {
                 _.bindAll(this, 'render');
                // console.log(this);

                // listen to model events
                // app.Contacts.bind('add', this.appendItem); // collection event binder
                this.listenTo(app.Contacts, 'add', this.appendItem);

                this.render();
                // this.renderTodoList();
            },

            render: function () {
                // console.log(this);
               var tmpl = _.template(this.template);
               this.$el.html(tmpl);
            },

            addContact: function() {
                console.log('adding a new contact');

                var contact = new app.Contact();

                var contactDetails = {
                    name: $('#add-contact-form #name').val(),
                    email: $('#add-contact-form #email').val()
                };

                // this will throw validation errors and stop saving of the new contact
                contact.on("invalid", function(model, error) {
                    alert(error);
                });

                contact.save(contactDetails, {

                    success: function (model, response) {
                        console.log('saving successful');
                        console.log(model);
                        console.log(response);

                        // add in contacts list
                        // this.contacts.add(model);
                        app.Contacts.add(model);
                    },

                    error: function (model, response) {
                        console.log('saving error!');
                    },
                });

                // stop form from submitting
                return false;
            },

            // appends a new contact after saving, this is triggered by event add
            // when a new contact model is added to the contacts collection
            appendItem: function (item) {
                console.log('appending a new contact in the contact list');
                // $('body').append('ahaha');

                var contactView = new app.ContactView({
                    model: item
                });

                console.log(contactView.render().el);

                $('#contact-list-con').append(contactView.render().el);      
            },

        });

  });

} (jQuery));