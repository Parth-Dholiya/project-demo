const express = require('express');
// var bodyParser=require('body-parser');
const { DB }  = require('./DB/db.connection'); 

// routes
const User = require('./Routes/User');
const post = require('./Routes/post');

// express server
var app = express();

const PORT = process.env.PORT || 3000
app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())


// routes
app.use('/user',User);
app.use('/post',post);

app.listen(PORT,()=> {
    console.log("Server running successfully...!:",PORT);
})