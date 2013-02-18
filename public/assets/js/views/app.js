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
                // this.listenTo(app.Contacts, 'add', this.appendItem);
                this.listenTo(app.Contacts, 'add', this.render);

                this.render();
                // this.renderTodoList();
            },

            render: function () {
                // console.log(this);

                // save the header row and headings row in the table before clearing the contents of the table
                // we will be using this later
                var contactListTableHeaderRow = $('#contact-list-table #contact-list-table-header-row').detach();
                var contactListTableHeadingsRow = $('#contact-list-table #contact-list-table-headings-row').detach();

                // clear the contents if the table
                $('#contact-list-table').empty();

                console.log(this.model.models.length);

                // fetch all the contacts from the server
                this.model.fetch({

                    success: function (model, response) {
                        //console.log(model.models[0].toJSON());
                        //console.log(response);   
                        // console.log(model.length);
                       
                        // focus the name field
                        $('#add-contact-form #name').focus();

                        $('#contact-list-table').append(contactListTableHeaderRow);
                        $('#contact-list-table').append(contactListTableHeadingsRow);

                        var contactsListLength = model.length;

                        for (var i = 0; i < contactsListLength; i++) {
                            // $('.thumbnails', this.el).append(new WineListItemView({model: wines[i]}).render().el);

                            var contactView = new app.ContactView({
                                model: model.models[i]
                            });

                            $('#contact-list-table').append(contactView.render().el);  

                        }

                        //console.log(contactView.render());
                        // console.log(contactView.render().el);
                        // $('#contact-list-table').append(contactView.render().el);   
                        // $('#contact-list-table').append(contactView.render().el);

                    },

                    error: function () {
                        console.log('failed fetching the contacts from the server');
                    },

                });

               var tmpl = _.template(this.template);
               this.$el.html(tmpl);
            },

            addContact: function() {
                console.log('adding a new contact');

                // disable submit button
                $('#add-contact-form #submit-btn').attr("disabled", "disabled");

                var contact = new app.Contact();

                var contactDetails = {
                    name: $('#add-contact-form #name').val(),
                    email: $('#add-contact-form #email').val()
                };

                // this will throw validation errors and stop saving of the new contact
                contact.on("invalid", function(model, error) {
                    alert(error);

                    // enable submit button
                    $('#add-contact-form #submit-btn').removeAttr("disabled");
                });

                contact.save(contactDetails, {

                    success: function (model, response) {
                        console.log('saving successful');
                        console.log(model);
                        console.log(response);

                        // add in contacts list collection
                        // this.contacts.add(model);
                        app.Contacts.add(model);

                        // clear input fields
                        $('#add-contact-form #name').val('');
                        $('#add-contact-form #email').val('');

                        // enable submit button
                        $('#add-contact-form #submit-btn').removeAttr("disabled");
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
            // appendItem: function (item) {
            //     console.log('appending a new contact in the contact list');
            //     // $('body').append('ahaha');

            //     var contactView = new app.ContactView({
            //         model: item
            //     });

            //     console.log(contactView.render().el);

            //     $('#contact-list-table').append(contactView.render().el);      
            // },

        });

  });

} (jQuery));