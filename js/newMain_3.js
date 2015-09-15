/**
 * Created by v.bogoroditskiy on 9/15/2015.
 */

(function(){

    window.App = {
        Views: {},
        Models: {},
        Collections: {},
        Router: {}
    };

    var vent = _.extend({}, Backbone.Events);

    App.Views.SpecialTask = Backbone.View.extend({
        initialize: function(){
            vent.on('specialTasks:show', this.show, this)
        },
        show: function(id){
            console.log('Show tasks with id: ' + id);
        }
    });

    window.template = function(id){
        return _.template( $('#' + id).html() );
    };

    App.Router = Backbone.Router.extend({
        routes: {
            ''                   : 'start',
            'specialTasks/:id'   : 'showSpecialTasks'
        },

        start: function(){
            console.log('Main page');
        },
        showSpecialTasks: function(id){
            vent.trigger('specialTasks:show', id);
        }
    });

    new App.Views.SpecialTask();

    new App.Router();

    Backbone.history.start();
})();
