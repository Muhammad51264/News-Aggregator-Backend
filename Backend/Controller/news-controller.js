const express = require("express");
const router = express.Router();

const News = require("../Models/News"); // Import the News model
const Agencies = require("../Models/Agencies"); // Import the Agencies model

router.get("/news/:agencyName", async (req, res,)=>{
try{
  const agencyName = req.params.agencyName;

  const agency = await Agencies.findOne({ name: agencyName });
  if (!agency) {
    return res.status(404).json({ error: "Agency not found" });
  }
  const newsItems = await News.find({ publisher: agencyName });
   res.json(newsItems);
}
  catch (err) {
  console.error(err);
  res.status(500).json({ error: "Internal Server Error" });
}

    // res.send("hi");

});


//get method   response  all news [{}]


module.exports = router;
