App = Ember.Application.create();

App.Router.map(function() {
	this.resource('tweets');
	this.resource('about');
})