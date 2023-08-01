const express = require("express");
const router = express.Router();
const News = require("../Models/News"); 
const Agencies = require("../Models/Agencies"); 



router.get("/allNews", async (req, res) => {
  try {
    // Fetch all news items
    const newsItems = await News.find();

    res.json(newsItems);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/:agencyName", async (req, res,)=>{
try{
  
  const agencyName = req.params.agencyName;

  const agency = await Agencies.findOne({ publisher: agencyName });
  
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


});


//get method   response  all news [{}]

module.exports = router;
