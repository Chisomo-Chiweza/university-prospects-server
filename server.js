// Server dependecies
import express from "express";
import { PrismaClient } from '@prisma/client';

// Define our express app and prisma orm
const prisma = new PrismaClient()
const app = express();

// Home
app.get('/', async (request, resource) => {
    resource.send('University Prospects')
})

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`University prospects listening on port ${PORT}`)
})