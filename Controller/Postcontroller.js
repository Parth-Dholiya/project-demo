const express = require("express");

//models 
const postmodel = require('../Models/PostSchema');



//====================Add Post=========================

const addpost = async (req,res) => {
    try {
        
        const {postTitle, description} = req.body;
        if(!postTitle || !description){
            return res.status(400).json({ error: "Please Enter the All Fields...!"});
        };
        const Post = await postmodel({
            postTitle: postTitle,
            description: description
        });

        await Post.save();
            return res.status(200).json({ message: "Post Created Succesfully..!" }); 

    } catch (error) {
        return  res.status(400).json({ error: "Something went wrong..!" });
    }
};

//===========================Update Post========================
const update = async (req, res) => {
    try {
        const id = req.params.id;
        postmodel
            .findOneAndUpdate({ _id: id })
            .then(() => {
               return res.status(200).send("Update Successfully...!");
            })
            .catch((err) => {
               return res.status(200).send("No updatepost found..!");
            });
    } catch (error) {
       return res.status(400).json({ error: "There is a problem updatepost...!" });
    }
};

//=====================Delete Post================================
const Delete =  async (req, res) => {
    try {
        const id = req.params.id;
        await postmodel
            .findByIdAndDelete(id)
            .then(() => {
                return res.status(200).send("Post was successfully deleted..!");
            })
            .catch((err) => {
                return res.status(400).json({ error: "Post was rejected.." });
            });
    } catch (error) {
        return res.status(200).json({ error: "There is some error...!"});
    }
};

//=============================My Post===================================

const myPost = async (req, res) => {
    try {
        const post = await postmodel.find({ id: _id });
        if (!post) {
            return res.status(400).send("Not post Found ");
        }
        res.send(post);
    } catch (error) {
        return res.status(400).send("Not post Found ");
    }
};


module.exports = {addpost, update, Delete, myPost };

