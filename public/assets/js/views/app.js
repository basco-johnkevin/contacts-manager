var App = App || {};

(function($) {

    $(function() {

        App.AppView = Backbone.View.extend({

            id: 'home',

            template: $("#home-template").html(),

            events: {
                "click #submit-btn" : "addContact"
            },

            initialize: function () {
                 _.bindAll(this, 'render', 'addContact');

                this.listenTo(this.collection, 'add', this.updateContactList);
                this.listenTo(this.collection, 'destroy', this.test);

                this.subViews = [];
            },

            test: function () {
                console.log('test');
                console.log('length of collection' + this.collection.length);
                this.updateContactList();
                // this.collection.remove()
            },

            render: function () {
                var template = _.template(this.template);
                this.$el.append(template);

                var self = this;

                this.collection.fetch({

                    wait: true,

                    success: function (model, response) {

                        // show each result in the console for debugging
                        // var i = 0;
                        // while ( i < model.models.length ) {
                        //     console.log(model.models[i].toJSON());
                        //     i++;
                        // }

                        var ContactsLen = model.length;

                        for (var i = 0; i < ContactsLen; i++) {

                            var contactView = new App.ContactView({
                                model: model.models[i]
                            });

                            self.subViews.push(contactView);

                            $('#contact-list-table', this.el).append(contactView.render().el);  

                        }
                    }

                }); 

                return this;
            },

            onClose: function () {
                console.log('closing App.AppView...');
                this.stopListening();
            },

            addContact: function () {
                // console.log('add contact');

                var self = this;

                var contact = new App.Contact();

                var contactDetails = {
                    name: $('#add-contact-form-con form #name').val(),
                    email: $('#add-contact-form-con form #email').val()
                };

                contact.save(contactDetails, {

                    success: function (model, response) {
                        console.log('saving successful');
             
                        self.collection.add(model);
                        // console.log('length of collection' + self.collection.length);
                    }

                });     

                return false;
            },

            updateContactList: function () {

                var self = this;

                // close sub views
                var i = 0;
                while ( i < this.subViews.length ) {
                    console.log('closing sub views of App.AppView');
                    this.subViews[i].close();
                    i++;
                }

                // update contact list view w/ updating collection data from the server
                this.collection.fetch({

                    success: function (model, response) {

                        var ContactsLen = model.length;

                        for (var i = 0; i < ContactsLen; i++) {

                            var contactView = new App.ContactView({
                                model: model.models[i]
                            });

                            self.subViews.push(contactView);

                            $('#contact-list-table', this.el).append(contactView.render().el);  

                        }
                    }

                }); 

                // update contact list view w/o updating collection data from the server
                // for (var i = 0; i < this.collection.models.length; i++) {
                //     var contactView = new App.ContactView({
                //         model: this.collection.models[i]
                //     });

                //     this.subViews.push(contactView);

                //     $('#contact-list-table', this.el).append(contactView.render().el);  
                // }

            }

        });

    });

}(jQuery));