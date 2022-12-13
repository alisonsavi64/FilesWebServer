require('dotenv').config();
const express = require('express');
const app = express();
const masterPath = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors({ origin: '*' }));

app.use(bodyParser.urlencoded({	extended: true }));
app.use(bodyParser.json());

const ShowFilesRoute = require('./controllers/showFilesToDownload');

app.use('/', ShowFilesRoute);

app.listen(process.env.PORT, () => {console.log(`Server is up on port: ${process.env.PORT}`)})