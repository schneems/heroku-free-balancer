# Heroku Free Balancer

Since July 2015 Heroku will introduce their new pricing system which forces free apps to sleep 6 hours a day. With this project you can easily surpass this restriction by using three heroku apps.

## Installation

1) Create two free heroku apps and install your application on it.
2) Add your two servers to config.json under their application key.
Example:
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
In this example, your apps will be accessible via this pattern, e.g.: `<ADDRESS TO HEROKU BALANCER APP>/app1/<REGULAR ROUTE>`
3) Create another 7$ heroku app and install this project on it.

## Usage

- This project needs to run on min. 7$ (or traditional) dyno. Hence it should never sleep.
- You can add as many apps as you want, but only two child servers are supported right now.

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D
