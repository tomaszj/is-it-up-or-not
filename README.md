# Is It Up or Not?

Simple app to monitor a status of environments. Allows to set them "Up" and "Down" and to provide a reason why it's down.

## Deployment

App can be deployed straight to Heroku. Standard `git push heroku master` and then `heroku run rake db:migrate && heroku run rake db:seed` should suffice.

## Development

### Environment

In *root* folder, run:

    $ bundle install && rake db:migrate
    # If you want to pre-load the data:
    $ rake db:seed

In *frontend_app* folder:

    $ npm install

### Workflow

This app is split into two parts:

* Backend, which is a Rails API providing flags.
* Frontend JS app which uses AngularJS and Lineman for development workflow. Frontend app is stored in *frontend_app* folder.

To run the app, run two processes:

    # In root folder:
    $ bundle exec rails server 

    # In frontend_app folder:
    $ lineman run

This will run a backend server on port 3000 and JS server on port 8000.
Application can be accessed using localhost:8000. JS server proxies all API requests to port 3000, preventing CORS problems.

### Ready for production

Once happy with your changes, you need some work to prepare all CSS/JS files ready for production. To do this:

    # In frontend_app folder:
    $ lineman build

    # In root folder:
    $ rake assets:precompile

This compiles minified JS and CSS files. The latter puts this in Rails assets folder. Thanks to the extra step, there's
no need for NodeJS environment on Heroku.

