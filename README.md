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
| User        | PUT          | /api/users          |   {
    "id": 1,
    "firstName": "Jordan",
    "lastName": "Painter",
    "email": "jordanpainter22@gmail.com",
    "dailyLogEntries": [
        {
            "id": 1,
            "date": "2022-01-09T23:59:00"
        }
    ]
}          | Update  |
| User        | POST         | /api/users          |             | Create  |
| User        | DELETE       | /api/users          |             | Update  |
| User        | POST         | /api/users/{userId} |             | Update  |

## Technologies Used

## Lessons Learned
