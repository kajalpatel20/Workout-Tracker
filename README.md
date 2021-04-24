# Workout Tracker

An App to track workouts, build with MongoDB with help of MongoDb Atlas connected a database to deployed Heroku web page.

## User Story

* As a user, I want to be able to view create and track daily workouts. I want to be able to log multiple exercises in a workout on a given day. I should also be able to track the name, type, weight, sets, reps, and duration of exercise. If the exercise is a cardio exercise, I should be able to track my distance traveled.

## Business Context

A consumer will reach their fitness goals more quickly when they track their workout progress.


## Description

 App allows user to keep track of their workout exercises by let them create, add to it and store their workouts. Users can choose between cardio or resistence workout training and specific execise types with in this. The dashboard page also offers a chart based summary of their weekly workouts.

## Table of Contents:

* [Usage](#usage)
* [Installation](#installation)
* [Deployment](deployment)
* [License](#license)
* [Questions](questions)


## Usage:

When the user loads the page, they should be given the option to create a new workout or continue with their last workout.

![Workout-Tracker](./public/images/NewWorkout.png)

The user should be able to:
Add exercises to the most recent workout plan.

![Workout-Tracker](./public/images/LastWorkout.png)

  * View the combined weight of multiple exercises from the past seven workouts on the page.

![Workout-Tracker](./public/images/AddExercise.png)

  * View the total duration of each workout from the past seven workouts on the page.

![Workout-Tracker](./public/images/Dashboard.png)

## Installation:

Look into using a MongoDB aggregate function to dynamically add up and return the total duration for each workout. Check out the [MongoDB documentation on the $addFields](https://docs.mongodb.com/manual/reference/operator/aggregation/addFields/), the [MongoDB documentation on the $sum operator](https://docs.mongodb.com/manual/reference/operator/aggregation/sum/), and the [Mongoose documentation on aggregate functions](https://mongoosejs.com/docs/api.html#aggregate_Aggregate) to learn how it can be accomplished.

To deploy an application with a MongoDB database to Heroku, you'll need to set up a MongoDB Atlas account and connect a database from there to your application. Be sure to use the following guides for support:

  * [Set Up MongoDB Atlas](../04-Important/MongoAtlas-Setup.md)

  * [Deploy with Heroku and MongoDB Atlas](../04-Important/MongoAtlas-Deploy.md)

### Deployment: 


* The URL of the functional, deployed application.

https://kajal-workout-tracker.herokuapp.com/

* The URL of the GitHub repository, with a unique name and a readme describing the project: 

https://github.com/kajalpatel20/Workout-Tracker


## License:
 APACHE 2.0

  [![Github License](https://img.shields.io/badge/license-APACHE 2.0-blue.svg)]
## Questions:

The repo for this project can be found here

https://github.com/kajalpatel20/Workout-Tracker

For any questions or to report issues, email me at: kajalpatel20@gmail.com