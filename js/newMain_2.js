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


    window.template = function(id){
        return _.template( $('#' + id).html() );
    };

    App.Router = Backbone.Router.extend({
       routes: {
            ''                   : 'index',
            'page/:id/asdf'      : 'page',
//           'page/id/*adf'     : 'page',
            'search/:query'      : 'search',
            '*other'             : 'default'

       },

       index: function(){
           console.log("Hello");
       },

       page: function(){
           console.log("Hello bro!");
       },

       search: function(){

       },

       default: function(){
           alert("404");
       }
    });

    new App.Router();

    Backbone.history.start();
})();
