const mongoose = require('mongoose');

const connection = require('../DB/db.connection');

const postSchema = new mongoose.Schema({
    postTitle:{
        type : String,
        requird:true
    },
    description:{
        type : String,
        requird:true
    }
},
{
    timestamps:true
});

const postmodel = mongoose.model('post',postSchema);

module.exports = postmodel;