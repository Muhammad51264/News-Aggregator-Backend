const express = require("express");
const router = express.Router();
const Agencies= require("../Models/Agencies");
const jwt = require("jsonwebtoken");

<<<<<<< HEAD
router.get("/", function (req, res) {
  res.send("hi");
});
module.exports = router;
=======

//Get all Agencies
router.get("/", async function(req, res,){
    try {
    const allAgencies=await Agencies.find();
    return res.json(allAgencies);
    } catch(err){
        console.log(err);
        return res.json({"error": err});
    }
});

// register for agencies
router.post("/register", async function(req, res){
    const agency = req.body;
    try {
    const foundAgency=await Agencies.findOne({email : agency.email});
    if (foundAgency){
        return res.json({"Error": "Email already registered"});
    }
    await Agencies.create(agency);
    console.log("agencies created successfully");
    return res.json({"status": "Success"});
    } catch(err){
        console.log(err);
        return res.json({"error": err});
    }
});



module.exports = router;
>>>>>>> 7c3973f816bc2c79a7a3d4355cafdcae1bbad118
