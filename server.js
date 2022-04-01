// Import dependencies
const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");


// Define the Express app
var app = express();

// Use helmet to enhance API security
app.use(helmet())

// Use body-parser to parse JSON bodies into JS objects
app.use(bodyparser.json());

// Use morgan to log HTTP requests
app.use(morgan("combined"));

// Enable CORS for university prospects requests
app.use(cors({
    origin: ["https://www.universityprospects.co/", "http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
}));


// Prisma database




// Endpoints

// Home
app.get("/", cors(), (request, resource) => {
    resource.send("University Prospects API");
})

app.listen(process.env.PORT || 3001, () => {
    console.log("Server is running on port 3001");
})



