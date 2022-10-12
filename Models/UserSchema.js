const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        requird:true
    },
    middlename: {
        type: String,
        requird:true
    },
    lastname: {
        type: String,
        requird:true
    },
    username: {
        type: String,
        requird:true
    },
    gender: {
        type: String,
        requird:true,
        enum: ['male','female']
    }, 
    age: {
        type: Number,String,
        requird:true
    },
    mobaileno: {
        type: Number,String,
        requird:true
    },
    email: {
        type: String,
        requird:true
    },
    password: {
        type: String,Number,
        requird:true
    },
    isactive: {
        type: Boolean,
        default:false
    }
},  
{
    timestamps:true
});

const User = mongoose.model('User', userSchema)

module.exports = User;