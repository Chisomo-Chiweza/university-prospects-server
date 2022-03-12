// Server dependecies
const express = require('express');

const app = express();


app.get('/', (request, resource) => {
    resource.send('University Prospects Server')
})

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`University prospects listening on port ${PORT}`)
})