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

// Endpoints
app.get('/universities', async (request, resource) => {
    const universities = await prisma.university()
    resource.send(universities)
})

app.get('/faculties', async (request, resource) => {
    const faculties = await prisma.faculty()
    resource.send(universities)
})

app.get('/programs', async (request, resource) => {
    const programs = await prisma.program()
    resource.send(universities)
})

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`University prospects listening on port ${PORT}`)
})