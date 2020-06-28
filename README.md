# node-react

Simple project using 
- Node with express backend 
- React frontend
- Docker for dev environment
- CircleCI to run tests on pull requests

# install 
- after cloning, run `npm install` in `app` and `api` directories
- run `docker-compose build` in project directory

# starting the app
- run `docker-compose up` in project directory

default ports are : 
- 8080 for the app
- 3000 for the api
- 27017 for the database

To see if everything is working properly, go to `localhost:8080`

You should see the default React homepage, as well as
- `API is working properly` if the API is correctly configured
- `Connected to Database` if the database is correctly configured
