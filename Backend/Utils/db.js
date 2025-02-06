const mongoose = require("mongoose");

const URI = "";

const connectDb = async()=>{
    try {
        await mongoose.connect(URI);
        console.log("db connected")
    } catch (error) {
        console.error("db connection fail")
        process.exit(0)
    }
}
module.exports = connectDb;