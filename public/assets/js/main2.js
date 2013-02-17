(function($) {

    $(function() {

      // console.log($('.form-con'));
      // console.log($("#todo_form_template").html());

        var TodosModel = Backbone.Model.extend({
            defaults: {
                name: ""
            },
            urlRoot: 'todos/',
        });


        var TodosCollection = Backbone.Collection.extend({
            model: TodosModel
        });


        var TodoFormView = Backbone.View.extend({



            el: '.form-con',
            template: $("#todo_form_template").html(),
            events: {
              //'click #submit-btn': 'addTodo',
              'click #submit-btn': 'getTodos'
            },

            initialize: function () {
                 _.bindAll(this, 'render');
                console.log(this);
                this.render();

            },

            render: function () {
                console.log(this);
               var tmpl = _.template(this.template);
               this.$el.html(tmpl);
            },

            addTodo: function(item){
                console.log('adding todo item');
                var todo = new TodosModel({ name: "eat" });
                todo.save({
                    success: function(model, response) {
                        console.log(model);
                        console.log(response);
                    },
                });
                return false;
            },

            getTodos: function(item) {
                var todo = new TodosModel();
                todo.fetch({
                    success: function(model, response) {
                        console.log(response);
                    },
                });
                return false;
            },

        });

        //create instance of master view
        var app = new TodoFormView();

    });

} (jQuery));