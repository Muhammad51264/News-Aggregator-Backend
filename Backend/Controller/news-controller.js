const express = require("express");
const router = express.Router();


router.get("/", function(req, res,){
    res.send("hi");
})


//get method   response  all news [{}]


module.exports = router;
