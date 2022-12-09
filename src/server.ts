require('dotenv').config()
const handleFiles = require('./handleFiles/handleFilesFunctions')
const express = require('express');
const app = express()


app.listen(process.env.PORT, () => {console.log(`Server is up on port: ${process.env.PORT}`)})



