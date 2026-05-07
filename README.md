# Node.js Notes API

A simple Notes API built using Node.js and Express with a basic frontend served using static HTML files.  
It demonstrates CRUD-style communication between frontend and backend using REST APIs.

## Project Structure

project/
|
├── app.js


## Features

- Add new notes from UI
- View all saved notes
- REST API using Express
- Static frontend served from /public
- Fetch API used for client-server communication

## How It Works

### Add Note (index.html)
- User enters text in input field
- Sends POST request to /notes
- Backend stores the note

### View Notes (notes.html)
- Sends GET request to /notes on page load
- Receives JSON response from backend
- Displays notes in a list

## API Endpoints

| Method | Endpoint | Description     |
|--------|----------|-----------------|
| GET    | /notes   | Fetch all notes |
| POST   | /notes   | Add a new note  |

## Tech Stack

- Node.js
- Express.js
- HTML
- JavaScript
- Fetch API

## Run the Project

npm install  
node app.js  

Open in browser:
http://localhost:3000

## Learning Outcomes

- REST API basics
- Frontend and backend communication
- Express routing
- Static file serving
- DOM manipulation

## Future Improvements

- Add delete/edit notes
- Store notes in database (MongoDB or SQLite)
- Add timestamps
- Improve UI design
- Add input validation
