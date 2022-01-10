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
| DailyLogEntries        | GET         | /api/DailyLogEntries |             | List  |

## Technologies Used

## Lessons Learned
