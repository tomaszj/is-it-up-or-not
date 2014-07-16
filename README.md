# Is It Up or Not?

Simple app to monitor a status of environments. Allows to set them "Up" and "Down" and to provide a reason why it's down.

## Deployment

App can be deployed simply to Heroku. Run `git push heroku master` and then `heroku run rake db:migrate && heroku run rake db:seed`.

After that, you'll need to set environment variables. Right now, SECRET_KEY_BASE is needed:

    $ heroku config:set SECRET_KEY_BASE=YOUR_VERY_LONG_RANDOM_HEX_SECRET

## Development

### Pre-requisites

For local tests, please change the ruby version in Gemfile to whatever your system uses, or install respective version using tool like rbenv.

### Environment

In *root* folder, run:

    $ bundle install --without production && bundle exec rake db:migrate
    # If you want to pre-load the data:
    $ bundle exec rake db:seed

In *frontend_app* folder:

    $ npm install

### Development workflow

This app is split into two parts:

* Backend, which is a Rails API providing flags.
* Frontend JS app which uses AngularJS and Lineman for development workflow. Frontend app is stored in *frontend_app* folder.

To run the app, run two processes:

    # In root folder:
    $ bundle exec rails server

    # In frontend_app folder:
    $ lineman grunt pages && lineman run

This will run a backend server on port 3000 and JS server on port 8000.
Application can be accessed using localhost:8000. JS server proxies all API requests to port 3000, preventing CORS problems.

### Ready for production

Once happy with your changes, you need some work to prepare all CSS/JS files ready for production. To do this:

    # In frontend_app folder:
    $ lineman build

    # In root folder:
    $ bundle exec rake assets:precompile

This compiles minified JS and CSS files. The latter puts this in Rails assets folder. Thanks to the extra step, there's
no need for NodeJS environment on Heroku.

## Known problems

Sometimes lineman stops working complaining about bower:install step failing. Running `bower update` seems to resolve the issue. Credit to @petems.

`lineman grunt pages` needs to be ran everytime the generated html gets deleted. I don't know the reason why it's not generated, but this way it works as expected.

