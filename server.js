const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

//Body Parser 
app.use(bodyParser.json());

// DB Config 
const db = require('./config/keys').mongoURI;

// Connect DB
mongoose
.connect(db)
.then(() => console.log('SUKSES!! Connected...'))
.catch(err => console.log(err));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`SUKSES!! Server started on port ${port}`));