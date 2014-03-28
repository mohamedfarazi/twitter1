App = Ember.Application.create();

//View used to render the input field and associate it to loading the controller.
App.SearchTextField = Em.TextField.extend({
  insertNewline: function(){
    App.tweetsController.loadTweets();
}
});

//Controller that creates the get request to the rails server.
App.tweetsController = Em.ArrayController.create({
  username: '',
  loadTweets: function() {
    var me = this;
    var username = me.get("username");
    if ( username ) {
      var url = 'http://tranquil-tor-7506.herokuapp.com/tweets/'
          url += me.get("username") + '.json';

			$.getJSON(url,function(data){
			    me.set('content', data);

}).fail(function(jqxhr){
   alert("That username is invalid");
});;
}
}
});

//Redirecting the index page to the tweets page.
App.IndexRoute = Ember.Route.extend({
  beforeModel: function() {
    this.transitionTo('tweets');
 }
});

//Textfield search for the app.
App.SearchTextField = Em.TextField.extend({
    insertNewline: function(){
      App.tweetsController.loadTweets();
}
});

//Mapping out the resources needed for the app.
App.Router.map(function() {
	this.resource('about');
	this.resource('tweets');
})


//Handlebar helper to format dates- first arguement ('format-fate' is the name of the helper).
Ember.Handlebars.helper('format-date', function(date){
	return moment(date).fromNow();
});

//jQuery for switching Tweets CSS to block.
jQuery(document).ready(function($) {
	$( "button" ).click(function() {
   $(".hidden").css("display", "block")
});
	$(".ember-text-field").keypress(function(e) {
    if(e.which == 13) {
      $(".hidden").css("display", "block");
}
});

});

