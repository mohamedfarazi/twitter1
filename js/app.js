App = Ember.Application.create();

//Redirecting the index page to the tweets page.
App.IndexRoute = Ember.Route.extend({
  beforeModel: function() {
    this.transitionTo('tweets');
  }
});

//Mapping out the resources/routes needed for the app.
App.Router.map(function() {
	this.resource('about');
	this.resource('tweets', function(){
		this.resource('tweet', {path: ':tweet_id'});
	});

})

//Route returning a model of an object tweets.
App.TweetsRoute = Ember.Route.extend({
	model: function() {
		return tweets;
	}
});

//This allows us to refresh the page while viewing a tweet and still load it without problems.
App.TweetRoute = Ember.Route.extend({
	model: function(params){
		return tweets.findBy('id', params.tweet_id);
	}
});

//Handlebar helper to format dates- first arguement ('format-fate' is the name of the helper)
Ember.Handlebars.helper('format-date', function(date){
	return moment(date).fromNow();
});


//Pretending this is a JSON object coming from Twitter's API.
var tweets = [{
	id: '1',
	name: 'Mo',
	user: '@mfarazi',
	date: new Date(2014,02,24,9,30,0),
	body: "Are the requirements right? @grahammccarthy @i_am_brennan @warrentanner",
	pic: 'https://pbs.twimg.com/profile_images/1426815605/DSC_0672_bigger.jpg',
	mentions: ['@grahammccarth', '@i_am_brennan', '@warrentanner'],
	rt: '3',
	fav: '1'
},
{
	id: '2',
	name: 'Graham McCarthy',
	user: '@grahammccarthy',
	date: new Date(2014,02,24,9,45,0),
	body: "@mfarazi It's cool, we'll go easy on you this time.",
	pic: 'https://pbs.twimg.com/profile_images/1601475953/grahamcharlie_bigger.png',
	mentions: ['@mfarazi'],
	rt: '3',
	fav: '1'
},
{
	id: '3',
	name: 'Brennan McEachran',
	user: '@i_am_brennan',
	date: new Date(2014,02,24,10,13,0),
	body: "@mfarazi too busy in Cuba lalalalalalalala",
	pic: 'https://pbs.twimg.com/profile_images/3263507600/d497899f581f69473e5526112b009170_bigger.png',
	mentions: ['@mfarazi'],
	rt: '3',
	fav: '2'
},
{
	id: '4',
	name: 'Warren Tanner',
	user: '@warrentanner',
	date: new Date(2014,02,24,12,12,0),
	body: "@i_am_brennan Such Cuba. Much amaze. So sun.",
	pic: 'https://pbs.twimg.com/profile_images/1225066706/WhereTheWarrenThingsAre_bigger.jpg',
	mentions: ['@i_am_brennan'],
	rt: '3',
	fav: '5'
},
{
	id: '5',
	name: 'Sovereign',
	user: '@sovereignmasseffect',
	date: new Date(2014,02,24,00,00,0),
	body: "ASSUMING DIRECT CONTROL",
	pic: 'http://img2.wikia.nocookie.net/__cb20120402214915/masseffect/images/8/84/Sovereign_Codex_Image.jpg',
	mentions: [''],
	rt: '3',
	fav: '99'
}];