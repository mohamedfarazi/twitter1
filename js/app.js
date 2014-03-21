App = Ember.Application.create();

App.Router.map(function() {
	this.resource('tweets', function(){
		this.resource('tweet', {path: ':tweet_id'});
	});
	this.resource('about');
})

App.TweetsRoute = Ember.Route.extend({
	model: function() {
		return tweets;
	}
});


var tweets = [{
	id: '1',
	user: 'Mo',
	date: new Date('12-12-2013'),
	body: "Check it out, I'm doing this tweeting thing that's the hype now",
	pic: 'http://soapboxhq.com/wp-content/themes/hitsend/img/soapbox_logo.png'
},
{
	id: '2',
	user: 'Mo',
	date: new Date('01-01-2014'),
	body: "amagaaad guiiiseee, it's the new year!!!111one!!",
	pic: 'http://soapboxhq.com/wp-content/themes/hitsend/img/soapbox_logo.png'
},
{
	id: '3',
	user: 'Mo',
	date: new Date('12-12-2013'),
	body: "Check it out, I'm doing this tweeting thing that's the hype now",
	pic: 'http://soapboxhq.com/wp-content/themes/hitsend/img/soapbox_logo.png'
},
{
	id: '4',
	user: 'Mo',
	date: new Date('12-12-2013'),
	body: "Check it out, I'm doing this tweeting thing that's the hype now",
	pic: 'http://soapboxhq.com/wp-content/themes/hitsend/img/soapbox_logo.png'
},
{
	id: '5',
	user: 'Mo',
	date: new Date('12-12-2013'),
	body: "Check it out, I'm doing this tweeting thing that's the hype now",
	pic: 'http://soapboxhq.com/wp-content/themes/hitsend/img/soapbox_logo.png'
}];