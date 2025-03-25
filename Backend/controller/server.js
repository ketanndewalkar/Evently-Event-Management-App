require('dotenv').config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose_connect = require("../mongodb/db");
const cookieparser = require("cookie-parser");
const router = require("../routes/router");
const multer = require('multer');


mongoose_connect();
app.use(cookieparser());
app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173", // Change to your frontend domain
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],  // Allowed methods
    credentials: true, // 🔥 Required to allow cookies
}));
app.use(express.urlencoded({extended:true}));


app.use("/",router);



app.get("/",(req,res)=>{
    res.json({
        message:"hello"
    });
})

app.listen(3000,()=>{
    console.log("listening on port 3000");
})

 