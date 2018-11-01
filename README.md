## Main libraries and tools used

##### Authentification
- Devise

##### Emails delivery
 - Mailtrap (dev)
 - Sendgrid (prod)

##### Database
- PostgreSQL
- Redis

##### Background jobs processing
- Sidekiq

##### Testing and Continous Integration
- RSpec
- CircleCI

##### Frontend
- Bootstrap 4

## Run the app in Development
### Setup
##### 1. Install dependencies
`bundle install`

##### 2. Initialize db
`bundle exec rake db:create && bundle exe rake db:migrate`

##### 3. Environment variables
Use Figaro to generate a file for configuration values and add it to .gitignore :
`bundle exec figaro install`

##### 4. Mailtrap
Get mailtrap credentials from the chosen inbox (https://mailtrap.io/inboxes).
Add them to development environment variables in `config/application.yml`:
```yml
development:
  MAILTRAP_USERNAME: "424242424242424242"
  MAILTRAP_PASSWORD: "424242424242424242"
```

### Run the app
##### 1. Launch redis
`redis-server`

##### 2. Launch sidekiq
`sidekiq -q default -q mailers`

##### 3. Launch web server
`rails s`


## Run the app in Production
### Setup
##### 1. Heroku
Create a new pipeline linked to the GitHub repo.
Add these addons for each app:
- Heroku Postgres
- Heroku Redis
- Sendgrid

Setup autodeploy in staging.

##### 2. Environment variables
Add the `HOSTNAME` environment variable in staging and production and set its value to the app hostname, *e.g. `durev-template.herokuapp.com`*.
(It is used in the mailer config, in order to get the correct domain for the emails links URL)

##### 3. CircleCI
Add the project to CircleCI.

##### 4. Deploy
Manually deploy from staging to production :rocket:
