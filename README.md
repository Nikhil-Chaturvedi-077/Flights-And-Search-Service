# Welcome to Flights Service

## Project Setup 
## Project Setup

- clone the project on your local.
- Execute 'npm install' on the same path as of your root directory of the downloaded project.
-create a '.env' file in the root directory and add the following environment variable.
 - `PORT=3000`
 - Inside the `src/config` folder create a new file `config.json` and the add the following piece of json.

 ```
 {
  "development": {
    "username": "your_db_login_name",
    "password": "your_db_pass",
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }

} 

```
- once you have added your db config as listed above
,go to the src folder from your terminal and execute `npx sequelize db:create`.

## Data Base Design  
- Airpalne Table
- Flight
- Airport
- City

- A Flight belongs to an airpalne but one airpalne can be used in many flights.
- A city has many airports but one airport belongs to a city.
- One airport can have many flights, but a flight belongs to one airport.


