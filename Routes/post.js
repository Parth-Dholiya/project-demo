const express = require('express');
const router = express.Router();
const multer = require("multer");
const path = require('path')
const {fs}= require('fs');
const {addpost, update, Delete, myPost} = require('../Controller/Postcontroller');

//multer

const upload = multer({
    storage: multer.diskStorage({
        destination: function(req, file, cb){
            cb(null, "Uploads/post");
        },
        filename: function(req, file, cb){
            cb(null, Date.now() + path.extname(file.originalname));
        }
    })
}).single('user_file');

// create User 
router.post('/createpost',upload, addpost)
router.patch('/updatepost/:id',update)
router.delete('/deletepost/:id',Delete)
router.get('/mypost', myPost)

module.exports = router;