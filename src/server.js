// Adding .env file - npm i dotenv.
require ("dotenv").config();

// Connects the database.
require("./db/connection");

// To import Express module and create and Express application - npm i express.
const express = require("express");

// To prevent the cross-origin error. The error was due to 2 servers trying to access the same port 3000(FE) and port 5001(BE).
const cors = require("cors");

// Imports movieRouter
const movieRouter = require("../movies/routes")

// So we can use the server.
const app = express();

// Sets up middleware.
app.use(express.json());

// app.use(cors()).
app.use(cors());

// So we can use the movieRouter.
app.use(movieRouter) 

// Listening to the server on port 5001
app.listen(5001, () => console.log("Server is listening"));


