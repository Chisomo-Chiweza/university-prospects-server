const http = require('http');
const express = require('express');

const app = express()
const PORT = process.env.PORT || 3001;

app.get('/', (request, resource) => {
    resource.send('University Prospects Server')
})

app.listen(PORT, () => {
    console.log(`University prospects listening on port ${PORT}`)
})