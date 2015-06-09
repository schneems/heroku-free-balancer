# Heroku Free Balancer

Since July 2015 Heroku will introduce their new pricing system which forces free apps to sleep min. six hours a day.

With this project you can easily surpass this restriction by using three heroku apps:
- Just use one paid dyno that is always up to act as a load balancer. Now you can add as many apps that will be always up, because the same code runs on two identical heroku apps.
- Heroku Free Balancer will forward requests in the morning to your first heroku app and in the afternoon to your second heroku app.

## Installation

1. Create two free heroku apps and install your application on it.
	- Deploy exactly the same version of your app, api or website to both heroku apps.
	- If you are using a database, connect the second heroku app to the first heroku apps database. [HowTo](http://stackoverflow.com/questions/5981508/share-database-between-2-apps-in-heroku)
2. Clone this project. Add your two servers to config.json under their application key.
	You can even add more apps ...
	- Example:
	```json
	{
		"app1": [
			"http://a-i-t-1.herokuapp.com",
			"http://a-i-t-2.herokuapp.com"
		],
		"app2": [
			"http://www.google.com",
			"http://www.apple.com"
		]
	}
	```

In this example, your apps will be accessible via this pattern, e.g.:

	<YOUR_HEROKU_BALANCER_APP_URL>/app1/<REGULAR_ROUTE_APP1>
	<YOUR_HEROKU_BALANCER_APP_URL>/app2/<REGULAR_ROUTE_APP2>

3. Create a heroku app that will be always on and never sleeps and install this project on it.

## Usage

Once you have followed the installation steps, you are ready to go!

## Notes

- This project needs to run on min. 7$ (or traditional) dyno. Hence it should never sleep.
- You can add as many apps as you want, but only two child servers are supported right now.
- This project may violate the TOS of Heroku, hence use at your own risk!

## Contributing

You are very welcome to share, recommend and even contribute to this project.

As always:
1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D
