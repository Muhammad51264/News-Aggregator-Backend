const express = require("express");
const router = express.Router();
const Agencies= require("../Models/Agencies");
const jwt = require("jsonwebtoken");
const News = require("../Models/News");

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























router.post("/post", async function(req, res){
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
