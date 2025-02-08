require('dotenv').config();
const express = require("express");
const app = express();
const authroute = require("./router/auth_router")
const connectDb = require("./Utils/db")


app.use("/",authroute);

const PORT = 5000;
app.use(express.json());
connectDb().then(()=>{
app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})
});