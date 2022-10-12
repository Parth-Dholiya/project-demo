const express = require("express");
var router = express.Router();
var { createUser, loginUser } = require('../Controller/Usercontroller')

// create User 
router.post('/',createUser);
router.post('/login',loginUser);

module.exports = router;