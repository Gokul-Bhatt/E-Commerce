const express = require("express");
const User = require("../models/user_model")

const home = async(req,res)=>{
    try {
        res.status(200).send("using the controolers...")
    } catch (error) {
        console.log(error)
    }
};

const register = async(req, res)=>{
    try {
        // console.log("this is register")
        console.log(req.body)
        const { username, email, phone , password } = req.body;
        const userexist = await User.findOne({email});
        if(userexist){
            res.status(400).json({msg: "email already exist"})
        }
        const userCreated = await User.create({username, email, phone, password})
        res.status(201).json({msg: userCreated,token: await userCreated.generateToken(),userId: userCreated._id.toString(),});
    } catch (error) {
        res.status(500).send("error")
    }
};

module.exports = {home,register};