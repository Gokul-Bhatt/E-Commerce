const express = require("express");
const User = require("../models/user_model");
const Cuser = require("../models/contact_model")


const home = async(req,res)=>{
    try {
        res.status(200).send("using the controolers...")
    } catch (error) {
        console.log(error)
    }
};

const register = async(req, res)=>{
    try {
        console.log(req.body)
        const { username, email, phone , password } = req.body;
        const userexist = await User.findOne({email});
        if(userexist){
            res.status(400).json({msg: "email already exist"})
            process.exit(0)
        }
        const userCreated = await User.create({username, email, phone, password})
        res.status(201).json({msg: userCreated,token: await userCreated.generateToken(),userId: userCreated._id.toString(),});
    } catch(error) {
        res.status(500).json("error")
    }
};

const contact = async(req, res)=>{
    try {
        const {username,email, message } = req.body;
        const userCreated = await Cuser.create({username, email, message});
        res.status(200).send({msg: userCreated, token: await userCreated.generateToken(), userId: userCreated._id.toString(),})
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = {home,register,contact};