# EventTracker

## Overview

### REST API
Go to http://ec2:8080/
### HTML/JavaScript Front End

### Angular Front End

## REST API Reference
|Return Type  | HTTP Method  | URI                 | Request Body| Purpose |
|-------------|--------------|---------------------|-------------|---------|
|List/<User/> | GET          | /api/users/         |             | List    |
| User        | GET          | /api/users/{userId} |             | Retrieve|
| User        | PUT          | /api/users          | { "id": 1,  "firstName": "Jordan",  "lastName": "Painter","email": "jordanpainter22@gmail.com"} | Update  |
| User        | POST         | /api/users          |  { "firstName": "Joe",  "lastName": "panther","email": "panther@gmail.com"}           | Create  |
| User        | DELETE       | /api/users          | { "id": 3, "firstName": "Joe",  "lastName": "panther","email": "panther@gmail.com"}            | Delete  |
| DailyLogEntries        | GET         | /api/DailyLogEntries |             | List  |
| DailyLogEntries        | GET         | /api/DailyLogEntries/{logId} |             | Retrieve  |
| DailyLogEntries        | PUT         | /api/DailyLogEntries |    {  "id": 2,  "date": "2022-02-12T23:59:00"}         | Update  |
| DailyLogEntries        | POST        | /api/DailyLogEntries |  {"date": "2022-02-12T23:59:00"}           | Create  |
| DailyLogEntries        | DELETE      | /api/DailyLogEntries |   {  "id": 3,  "date": "2022-02-12T23:59:00"}          | Delete  |
| Workout        | GET         | /api/workouts |             | List  |
| Workout        | GET         | /api/workouts/{workId} |             | Retrieve  |
| Workout        | PUT         | /api/workouts |    {  "id": 2,  "startTime": "2022-02-11T10:59:00",  "endTime": "2022-02-11T11:59:00" }         | Update  |
| Workout        | POST         | /api/workouts |     { "startTime": "2022-02-11T10:59:00",  "endTime": "2022-02-11T11:59:00" }      | Create  |
| Workout        | DELETE         | /api/workouts |     {  "id": 3,  "startTime": "2022-02-11T10:59:00",  "endTime": "2022-02-11T11:59:00" }        | Delete  |
| WeightTraining        | GET         | /api/weighttrainings |             | List  |
| WeightTraining        | GET         | /api/weighttrainings/{weightTrainId} |             | Retrieve  |
| WeightTraining        | PUT         | /api/weighttrainings |  {  "id": 1,  "name": "Morning Lifts",  "repetitions": 6,  "sets": 4,  "weight": 84.5,  "scale": "kgs"}         | Update  |
| WeightTraining        | Post        | /api/weighttrainings |   { "name": "Morning Lifts",  "repetitions": 6,  "sets": 4,  "weight": 84.5,  "scale": "kgs"}          | Create  |
| WeightTraining        | DELETE      | /api/weighttrainings |    {  "id": 3,  "name": "Morning Lifts",  "repetitions": 6,  "sets": 4,  "weight": 84.5,  "scale": "kgs"}         | Delete  |
| WeightExcercise       | GET         | /api/weightexcercises |             | List  |
| WeightExcercise        | GET         | /api/weightexcercises/{weightExId} |             | Retrieve  |
| WeightExcercise         | PUT        | /api/weightexcercises |     {  "id": 1,  "name": "bench" }        | Update  |
| WeightExcercise         | POST         | /api/weightexcercises |    {   "name": "lunges" }         | Create  |
| WeightExcercise         | DELETE         | /api/weightexcercises |   {  "id": 4, "name": "lunges" }             | Delete  |
| CardioTraining       | GET         | /api/cardiotrainings |             | List  |
| CardioTraining        | GET         | /api/cardiotrainings/{cardioT} |             | Retrieve  |
| CardioTraining         | PUT        | /api/cardiotrainings |    {  "id": 1,  "name": "morning run",  "distance": 5.0,  "scale": "km" }         | Update  |
| CardioTraining         | POST         | /api/cardiotrainings |   {"name": "evening run",  "distance": 3.0,  "scale": "mi" }     | Create  |
| CardioTraining         | DELETE         | /api/cardiotrainings | {"id": 2, "name": "evening run",  "distance": 3.0,  "scale": "mi" }  | Delete  |
| CardioExcercise       | GET         | /api/cardioexcercises |             | List  |
| CardioExcercise        | GET         | /api/cardioexcercises/{cardioExId}|             | Retrieve  |
| CardioExcercise         | PUT        | /api/cardioexcercises | {  "id": 1,  "name": "Long distance" } | Update  |
| CardioExcercise         | POST         | /api/cardioexcercises | {  "name": "Up Hill Run" } | Create  |
| CardioExcercise         | DELETE         | /api/cardioexcercises |  { "id": 5, "name": "Up Hill Run" } | Delete  |
| Images       | GET         | /api/images |             | List  |
| Images        | GET         | /api/images/{imageId} |             | Retrieve  |
| Images         | PUT        | /api/images | {  "id": 1,  "title": "Test image Updated",  "description": "Test Image Description Updated",  "url": null }  | Update  |
| Images         | POST         | /api/images |  {  "title": "Test image second",  "description": "Test Image Description second",  "url": null }           | Create  |
| Images         | DELETE         | /api/images |  { "id": 2, "title": "Test image second",  "description": "Test Image Description second",  "url": null }            | Delete  |
| Video       | GET         | /api/videos |             | List  |
| Video        | GET         | /api/videos/{videoId} |             | Retrieve  |
| Video         | PUT        | /api/videos |  {  "id": 1,  "title": "video test Updated",  "description": "video testing description Updated",  "url": null }  | Update  |
| Video         | POST         | /api/videos | {  "title": "video test second",  "description": "video testing description second",  "url": null } | Create  |
| Video         | DELETE         | /api/videos |   { "id": 2, "title": "video test second",  "description": "video testing description second",  "url": null }          | Delete  |
## Technologies Used

## Lessons Learned
