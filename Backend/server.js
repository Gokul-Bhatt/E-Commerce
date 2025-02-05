const express = require("express");
const app = express();
const authroute = require("./router/auth_router")


// app.get("/", (req, res)=>{
//     res.status(200).send("server is working")
// });
// const PORT = 3000;
// app.listen(PORT,()=>{
//     console.log(`server is running on ${PORT}`)
// })

app.use("/",authroute);

const PORT = 5000;

app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})