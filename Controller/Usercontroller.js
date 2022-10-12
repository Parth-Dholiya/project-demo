var express = require('express');
var bcrypt = require("bcrypt");
var jwt = require('jsonwebtoken');


//Models
const User = require('../Models/UserSchema');

const createUser = async(req,res) => {
      try {
       
        const {firstname, middlename, lastname, username, gender, age, mobaileno, email, password} = req.body;
        if(!firstname || !middlename || !lastname || !username || !gender || !age || !mobaileno || !email || !password){
                 return res.status(404).json({
                error: "Please Enter All Field..!"
            });
        };
        const emailexit = await User.findOne({ email: email });
        if (emailexit) {
          return res.status(404).json({ message: "Email Already Exist" });
        }
        var hash =bcrypt.hashSync(password,10);
    
        const data = await User({
            firstname: firstname,
            middlename: middlename,
            lastname: lastname,
            username: username,
            gender: gender,
            age: age,
            mobaileno: mobaileno,
            email: email,
            password: hash
        }); 
        await data.save();
            return res.status(200).json({ message: "User Created Succesfully..!" }); 
               
        }catch (error) {
            console.log(error);
                return  res.status(400).json({ error: "Something went wrong..!" });
    }  
};       

   
const loginUser = async (req,res) => {

    try {
        const {username, password} = req.body;
        if (!username || !password) {
        return res.status(422).json({ message: "Please Enter all the field" });
      }
      const userData = await User.findOne({ username: username });
      if (!userData) {
        return res.status(404).json({ message: "Username is incorrect...!" });
      }
      const userCompare = await bcrypt.compare(req.body.Password, userData.password);
      if (!userCompare) {
        return res.status(404).json({ message: "Password is incorrect...! " });
      }

      const token = jwt.sign({ _id: userData._id }, "jwtScrectkey");
      await userData.save();
        return res.status(200).json({
      message: "User login succesfully...!",
      token: token
    });

  } catch (error) {
     return res.status(404).json({ error: "There was an error" });
  }
};

module.exports = { createUser , loginUser};
