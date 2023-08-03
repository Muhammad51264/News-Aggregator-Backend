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

router.get("/:agencyID", async (req, res) => {
  try {
    const agencyID = req.params.agencyID;

    const agency = await Agencies.findOne({ _id: agencyID });

    if (!agency) {
      return res.status(404).json({ error: "Agency not found" });
    }
    const newsItems = await News.find({ publisher: agency.publisher });
    res.json(newsItems);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//get method   response  all news [{}]

module.exports = router;
