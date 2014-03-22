App = Ember.Application.create();

App.Router.map(function() {
	this.resource('about');
	this.resource('tweets', function(){
		this.resource('tweet', {path: ':tweet_id'});
	});

})

App.TweetsRoute = Ember.Route.extend({
	model: function() {
		return tweets;
	}
});

App.TweetRoute = Ember.Route.extend({
	model: function(params){
		return tweets.findBy('id', params.tweet_id);
	}
});


var tweets = [{
	id: '1',
	name: 'Mo',
	user: '@mfarazi',
	date: new Date('12-12-2013'),
	body: "Check it out, I'm doing this tweeting thing that's the hype now",
	pic: 'https://avatars1.githubusercontent.com/u/6137882?s=460',
	rt: '3',
	fav: '1'
},
{
	id: '2',
	name: 'Charlie',
	user: '@dayman',
	date: new Date('01-01-2014'),
	body: "Is your cat making TOO MUCH NOISE ALL THE TIME?",
	pic: 'http://www.blogcdn.com/www.mandatory.com/media/2013/02/cast-day.jpg',
	rt: '3',
	fav: '1'
},
{
	id: '3',
	name: 'Mac',
	user: '@fatmac',
	date: new Date('12-12-2013'),
	body: " I don't appreciate being paraphrased. Now, I choose my words very deliberately.",
	pic: 'http://www.blogcdn.com/www.mandatory.com/media/2013/02/cast-mcelhenney.jpg',
	rt: '3',
	fav: '1'
},
{
	id: '4',
	name: 'Dennis',
	user: '@dennisSystem',
	date: new Date('12-12-2013'),
	body: "If you're in my room, you're always being filmed.",
	pic: 'http://www.blogcdn.com/www.mandatory.com/media/2013/02/cast-howerton.jpg',
	rt: '3',
	fav: '1'
},
{
	id: '5',
	name: 'Frank',
	user: '@money',
	date: new Date('12-12-2013'),
	body: "You gotta pay the #troll toll, if you wanna get into that boy's soul",
	pic: 'http://www.blogcdn.com/www.mandatory.com/media/2013/02/cast-devito.jpg',
	rt: '3',
	fav: '1'
},
{
	id: '6',
	name: 'Sweet Dee',
	user: '@bird',
	date: new Date('12-12-2013'),
	body: "We're gonna get all in your face and point out your faults.",
	pic: 'http://www.blogcdn.com/www.mandatory.com/media/2013/02/cast-olson.jpg',
	rt: '3',
	fav: '1'
}];