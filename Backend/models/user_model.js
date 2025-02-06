// const { default: mongoose } = require("mongoose")
const { default: mongoose } = require("mongoose")
const mmongoos = require("mongoose")
// const { type } = require("os")

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true,
    },
    phone:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true,
    },
    isAdmin:{
        type:Boolean,
        require:false,
    },
})

const User = new mongoose.model("User",userSchema);
module.exports = User;