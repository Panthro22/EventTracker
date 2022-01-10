# EventTracker

## Overview
This application is to now only help keep track of key data when working out, also provide images and videos of key point of forms to reduce injury to one self when working out. This will also ensure users are targeting the right muscles in the work out by showing the proper form needed to successfully workout.
### REST API
Go to http://3.13.211.197:8083/Fitness4Us/api/users
### HTML/JavaScript Front End
Go to http://3.13.211.197:8083/Fitness4Us/index.html 
### Angular Front End

## REST API Reference
|Return Type  | HTTP Method  | URI                 | Request Body| Purpose |
|-------------|--------------|---------------------|-------------|---------|
|List/<User/> | GET          | /api/users/         |             | List    |
| User        | GET          | /api/users/{userId} |             | Retrieve|
| User        | PUT          | /api/users          | { "id": 1,  "firstName": "Jordan",  "lastName": "Painter","email": "jordanpainter22@gmail.com"} | Update  |
| User        | POST         | /api/users          |  { "firstName": "Joe",  "lastName": "panther","email": "panther@gmail.com"}           | Create  |
| Void        | DELETE       | /api/users          | { "id": 3, "firstName": "Joe",  "lastName": "panther","email": "panther@gmail.com"}            | Delete  |
| List/<DailyLogEntries/>        | GET         | /api/DailyLogEntries |             | List  |
| DailyLogEntries        | GET         | /api/DailyLogEntries/{logId} |             | Retrieve  |
| DailyLogEntries        | PUT         | /api/DailyLogEntries |    {  "id": 2,  "date": "2022-02-12T23:59:00"}         | Update  |
| DailyLogEntries        | POST        | /api/DailyLogEntries |  {"date": "2022-02-12T23:59:00"}           | Create  |
| Void        | DELETE      | /api/DailyLogEntries |   {  "id": 3,  "date": "2022-02-12T23:59:00"}          | Delete  |
| List/<Workout/>        | GET         | /api/workouts |             | List  |
| Workout        | GET         | /api/workouts/{workId} |             | Retrieve  |
| Workout        | PUT         | /api/workouts |    {  "id": 2,  "startTime": "2022-02-11T10:59:00",  "endTime": "2022-02-11T11:59:00" }         | Update  |
| Workout        | POST         | /api/workouts |     { "startTime": "2022-02-11T10:59:00",  "endTime": "2022-02-11T11:59:00" }      | Create  |
| Void        | DELETE         | /api/workouts |     {  "id": 3,  "startTime": "2022-02-11T10:59:00",  "endTime": "2022-02-11T11:59:00" }        | Delete  |
| List/<WeightTraining/>        | GET         | /api/weighttrainings |             | List  |
| WeightTraining        | GET         | /api/weighttrainings/{weightTrainId} |             | Retrieve  |
| WeightTraining        | PUT         | /api/weighttrainings |  {  "id": 1,  "name": "Morning Lifts",  "repetitions": 6,  "sets": 4,  "weight": 84.5,  "scale": "kgs"}         | Update  |
| WeightTraining        | Post        | /api/weighttrainings |   { "name": "Morning Lifts",  "repetitions": 6,  "sets": 4,  "weight": 84.5,  "scale": "kgs"}          | Create  |
| Void        | DELETE      | /api/weighttrainings |    {  "id": 3,  "name": "Morning Lifts",  "repetitions": 6,  "sets": 4,  "weight": 84.5,  "scale": "kgs"}         | Delete  |
| List/<WeightExcercise/>       | GET         | /api/weightexcercises |             | List  |
| WeightExcercise        | GET         | /api/weightexcercises/{weightExId} |             | Retrieve  |
| WeightExcercise         | PUT        | /api/weightexcercises |     {  "id": 1,  "name": "bench" }        | Update  |
| WeightExcercise         | POST         | /api/weightexcercises |    {   "name": "lunges" }         | Create  |
| WeightExcercise         | DELETE         | /api/weightexcercises |   {  "id": 4, "name": "lunges" }             | Delete  |
| List/<CardioTraining/>       | GET         | /api/cardiotrainings |             | List  |
| CardioTraining        | GET         | /api/cardiotrainings/{cardioT} |             | Retrieve  |
| CardioTraining         | PUT        | /api/cardiotrainings |    {  "id": 1,  "name": "morning run",  "distance": 5.0,  "scale": "km" }         | Update  |
| CardioTraining         | POST         | /api/cardiotrainings |   {"name": "evening run",  "distance": 3.0,  "scale": "mi" }     | Create  |
| Void         | DELETE         | /api/cardiotrainings | {"id": 2, "name": "evening run",  "distance": 3.0,  "scale": "mi" }  | Delete  |
| List/<CardioExcercise/>       | GET         | /api/cardioexcercises |             | List  |
| CardioExcercise        | GET         | /api/cardioexcercises/{cardioExId}|             | Retrieve  |
| CardioExcercise         | PUT        | /api/cardioexcercises | {  "id": 1,  "name": "Long distance" } | Update  |
| CardioExcercise         | POST         | /api/cardioexcercises | {  "name": "Up Hill Run" } | Create  |
| Void         | DELETE         | /api/cardioexcercises |  { "id": 5, "name": "Up Hill Run" } | Delete  |
| List/<Images/>     | GET         | /api/images |             | List  |
| Images        | GET         | /api/images/{imageId} |             | Retrieve  |
| Images         | PUT        | /api/images | {  "id": 1,  "title": "Test image Updated",  "description": "Test Image Description Updated",  "url": null }  | Update  |
| Images         | POST         | /api/images |  {  "title": "Test image second",  "description": "Test Image Description second",  "url": null }           | Create  |
| Void         | DELETE         | /api/images |  { "id": 2, "title": "Test image second",  "description": "Test Image Description second",  "url": null }            | Delete  |
| List/<Video/>      | GET         | /api/videos |             | List  |
| Video        | GET         | /api/videos/{videoId} |             | Retrieve  |
| Video         | PUT        | /api/videos |  {  "id": 1,  "title": "video test Updated",  "description": "video testing description Updated",  "url": null }  | Update  |
| Video         | POST         | /api/videos | {  "title": "video test second",  "description": "video testing description second",  "url": null } | Create  |
| Void         | DELETE         | /api/videos |   { "id": 2, "title": "video test second",  "description": "video testing description second",  "url": null }          | Delete  |
## Technologies Used
+ Java
+ Spring Boot
+ Spring web services, JPA, JPQL
+ RESTful
+ Gradle
+ mySQL
+ mySQL workbench
+ Github
## Lessons Learned
Sometimes the simplest thing can become taxing, Better to allow the computer to handle repeating tasks. Code is read more often than written. Hunting for bugs that the computer can't point out is a challenge that we create for ourselves or others. One your foundation is built solid it is a lot easier to finish the project, otherwise you may find your self going over code that you thought was already good.
