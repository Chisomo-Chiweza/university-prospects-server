// Server dependecies
import express from "express";

// Define our express app and prisma orm
const app = express();

// Home
app.get('/', async (request, resource) => {
    resource.send('University Prospects')
})

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`University prospects listening on port ${PORT}`)
})