const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const items = require('./routes/api/items');



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

// Routes
app.use('/api/items', items);

// Serve static assets as if in prod
if(process.env.NODE_ENV === 'production'){
    //Set folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`SUKSES!! Server started on port ${port}`));