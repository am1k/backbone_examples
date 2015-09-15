/**
 * Created by v.bogoroditskiy on 9/11/2015.
 */

(function() {
    window.App = {
        Models: {},
        Views: {},
        Collections: {}
    };
//хэлпер шаблона
    window.template = function (id) {
        return _.template($('#' + id).html());
    };

    App.Models.Person = Backbone.Model.extend({
        defaults: {
            name: 'Alex',
            age: 18,
            job: 'Developer'
        }
    });

    var person = new App.Models.Person();


    App.Collections.People = Backbone.Collection.extend({
        model: App.Models.Person
    });

    App.Views.People = Backbone.View.extend({
        tagName: 'ul',

        initialize: function () {
        },

        render: function () {
            this.collection.each(function (person) {
                var personView = new App.Views.Person({model: person});

                this.$el.append(personView.render().el);
            }, this);

            return this;
        }
    });


    App.Views.Person = Backbone.View.extend({
        tagName: 'li',

        template: template('template'),

        initialize: function () {
            this.render();
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));

            return this;
        }

    });

    var peopleCollection = new App.Collections.People([
        {
            name: 'Петр',
            age: 20,
            job: 'Таксист'
        },
        {
            name: 'Олег',
            age: 24,
            job: 'Менеджер'
        },
        {
            name: 'Анна',
            age: 18,
            job: 'Студентка'
        }
    ]);

    var peopleView = new App.Views.People({collection: peopleCollection});

    $(document.body).append(peopleView.render().el);

}());