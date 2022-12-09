require('dotenv').config();
const express = require('express');
const app = express();
const masterPath = require('path');
const cors = require('cors');

app.use(cors({ origin: '*' }));

const ShowFilesRoute = require('./controllers/showFilesToDownload');

app.use('/', ShowFilesRoute);

app.listen(process.env.PORT, () => {console.log(`Server is up on port: ${process.env.PORT}`)})



