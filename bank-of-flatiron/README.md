# React Week 1 Code Challenge

# Getting Started

Make sure to have th following on your computer:
1. A computer that runs on either of the following; (Windows 7+, Linux, Mac OS)
2. Nodejs 18.0

# Instructions
For this project, we’ll be building out a React application that displays a list of your recent bank transactions, among other features.

Part of what this code challenge is testing is your ability to follow given instructions. While you will definitely have a significant amount of freedom in how you implement the features, be sure to carefully read the directions for setting up the application.

# Requirements
For this project, you must:
Fetch data from a local server running JSON DB server.

# Project Setup & Pre-requisite Data
In your project directory, create a db.json file and use this dataLinks to an external site. for your server DB.

Run this command to get the backend started:
json-server --watch db.json

Test your server by visiting this route in the browser:
http://localhost:8001/transactions


# Endpoints
The base URL for your backend is: http://localhost:8001

# Core Deliverables
As a user, I should be able to:

See a table of the transactions.

Fill out and submit the form to add a new transaction. This should add the new transaction to the table as well as post the new transaction to the backend API for persistence.

Filter transactions by typing into the search bar. Only transactions with a description matching the search term should be shown in the transactions table.

# Endpoints for Core Deliverables
GET /transactions
Example Response:

[
  {
    "id": 1,
    "date": "2019-12-01",
    "description": "Paycheck from Bob's Burgers",
    "category": "Income",
    "amount": 1000
  },
  {
    "id": 2,
    "date": "2019-12-01",
    "description": "South by Southwest Quinoa Bowl at Fresh & Co",
    "category": "Food",
    "amount": -10.55
  }
]
POST /transactions
Required Headers:

{
  "Content-Type": "application/json"
}
Request Object:

{
  "date": "string",
  "description": "string",
  "category": "string",
  "amount": number
}
Example Response:

{
  "id": 1,
  "date": "2019-12-01",
  "description": "Paycheck from Bob's Burgers",
  "category": "Income",
  "amount": 1000
}


# Authors
This project was contributed to by:
- [Mark Wanjau](https://github.com/Afrikan-Son)

# License
The project is licensed under ISC.