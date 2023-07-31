const express = require("express");
const router = express.Router();
const Agencies = require("../Models/Agencies");
const jwt = require("jsonwebtoken");
const News = require("../Models/News");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
dotenv.config({ path: "../config.env" });

//Get all Agencies
router.get("/", async function (req, res) {
  try {
    const allAgencies = await Agencies.find();
    return res.json(allAgencies);
  } catch (err) {
    console.log(err);
    return res.json({ error: err });
  }
});

// register for agencies
router.post("/register", async function (req, res) {
  const agency = req.body;
  try {
    const foundAgency = await Agencies.findOne({
      $or: [{ publisher: agency.publisher }, { email: agency.email }],
    });
    if (foundAgency) {
      return res.json({ Error: "Email already registered" });
    }
    await Agencies.create(agency);
    console.log("agencies created successfully");
    return res.json({ status: "Success" });
  } catch (err) {
    console.log(err);
    return res.json({ error: err });
  }
});

// login for agencies
router.post("/login", async function (req, res) {
  const { email, password, userType } = req.body;
  try {
    const foundAgency = await Agencies.findOne({ email: email });
    if (!foundAgency) {
      return res.json({ message: "Agency didn't existi!" });
    }
    const isPasswordValid = await bcrypt.compare(
      password,
      foundAgency.password
    );
    if (!isPasswordValid) {
      return res.json({ message: "Username or Password is not correct" });
    }

    const token = jwt.sign({ id: foundAgency._id }, process.env.JWT_SECRET);

    return res.json({ token, adminID: foundAgency._id });
  } catch (err) {
    console.log(err);
    return res.json({ error: err });
  }
});

router.post("/add", async function (req, res) {
  const news = req.body;
  try {
    const foundNews = await News.findOne({ title: news.title });
    if (foundNews) {
      return res.json({ Error: "News already registered" });
    }
    await News.create(news);
    console.log("news created successfully");
    return res.json({ status: "Success" });
  } catch (err) {
    console.log(err);
    return res.json({ error: err });
  }
});

router.post("/delete/:id", async function (req, res) {
  const newsId = req.params.id;
  console.log(newsId);
  const news = req.body;
  try {
    const foundNews = await News.findOne({ _id: newsId });
    if (!foundNews) {
      return res.json({ Error: "no news found" });
    }

    await News.deleteOne({ _id: newsId });
    console.log("news deleted successfully");
    return res.json({ status: "Success" });
  } catch (err) {
    console.log(err);
    return res.json({ error: err });
  }
});

module.exports = router;
