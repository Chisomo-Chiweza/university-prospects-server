// Import dependencies
const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const { PrismaClient } = require("@prisma/client");


// Define the Express app
var app = express();
// Define prisma client
const prisma = new PrismaClient();

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



// Define the API routes
// Home
app.get("/", cors(), (request, resource) => {
    resource.send("University Prospects API");
})

// Get all universities
app.get('/universities', async (request, resource) => {
    const universities = await prisma.universities.findMany();
    resource.send(universities);
})

// Get all faculties
app.get('/faculties', async (request, resource) => {
    const faculties = await prisma.faculties.findMany();
    resource.send(faculties);
})

// Get all programmes
app.get('/programmes', async (request, resource) => {
    const programmes = await prisma.programmes.findMany();
    resource.send(programmes);
})

app.listen(process.env.PORT || 3001, () => {
    console.log("Server is running on port 3001");
})



