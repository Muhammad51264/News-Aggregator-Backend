//Import Modules
const express = require("express");
const cors=require("cors");
const helmet = require("helmet");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({path : "./config.env"});
const DB = process.env.DATABASE

mongoose.connect(DB).then(()=>{
    console.log("Database connected");
}).catch(err => {console.log(err)});

const app = express();
app.use(cors());
app.use(helmet());
app.use(express.json());











app.listen(8080, () => {
    console.log("Server listening on port 8080");
})