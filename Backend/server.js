//Import Modules
const express = require("express");
const cors=require("cors");
const helmet = require("helmet");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");



const app = express();
app.use(cors());
app.use(helmet());
app.use(express.json());







app.listen(8080, () => {
    console.log("Server listening on port 8080");
})