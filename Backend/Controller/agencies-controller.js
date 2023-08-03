const express = require("express");
const router = express.Router();
const Agencies = require("../Models/Agencies");
const jwt = require("jsonwebtoken");
const News = require("../Models/News");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
const fs = require("fs");
dotenv.config({ path: "../config.env" });
const multer = require("multer");
const upload = multer({ dest: "Pictures/NewsPictures" });
// const cloudinary =require("../Pictures/cloudinary");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

//Get all Agencies
router.get("/allAgencies", async function (req, res) {
  try {
    const allAgencies = await Agencies.find();
    return res.json(allAgencies);
  } catch (err) {
    console.log(err);
    return res.json({ error: err });
  }
});

// register for agencies
router.post("/register", upload.single("img"), async function (req, res) {
  const agency = req.body;
  const uploadedImage = req.file;
  let imgURL = "";
  try {
    let foundAgency = await Agencies.findOne({
      $or: [{ publisher: agency.publisher }, { email: agency.email }],
    });
    if (foundAgency) {
      return res.json({ status: "error", Error: "Email already registered" });
    }

    fs.renameSync(
      `Pictures/NewsPictures/${uploadedImage.filename}`,
      `Pictures/NewsPictures/${uploadedImage.filename}.jpg`
    );
    cloudinary.uploader
      .upload(`Pictures/NewsPictures/${uploadedImage.filename}.jpg`, {
        resource_type: "image",
      })
      .then(async (result) => {
        console.log("success", JSON.stringify(result, null, 2));
        imgURL = result.url;
        // console.log(imgURL);
        fs.unlinkSync(`Pictures/NewsPictures/${uploadedImage.filename}.jpg`);
        await Agencies.create({
          publisher: agency.publisher,
          img: imgURL,
          email: agency.email,
          password: agency.password,
        });

        foundAgency = await Agencies.findOne({ email: agency.email });
        const token = jwt.sign({ id: foundAgency._id }, process.env.JWT_SECRET);
        console.log("agencies created successfully");
        console.log(token);

        // fs.unlinkSync(`Pictures/NewsPictures/${uploadedImage.filename}.jpg`);
        return res.json({ status: "Success", token });
      })
      .catch((err) => {
        console.log("failed");
        console.log("error", JSON.stringify(err, null, 2));
      });
    console.log(imgURL);
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

router.post("/edit/:id", async function (req, res) {
  const newsId = req.params.id;
  console.log(newsId);
  const news = req.body;
  try {
    const foundNews = await News.findOne({ _id: newsId });
    if (!foundNews) {
      return res.json({ Error: "no news found" });
    }

    await News.updateOne(
      { _id: newsId },
      {
        category: news.category,
        title: news.title,
        desc: news.desc,
        img: news.img,
      }
    );
    console.log("news updated successfully");
    return res.json({ status: "Success" });
  } catch (err) {
    console.log(err);
    return res.json({ error: err });
  }
});

router.post("/token", async (req, res) => {
  token = req.body.token;
  try {
    let decodedToken = await jwt.decode(token, process.env.JWT_SECRET);

    if (!decodedToken) {
      return res.json({ status: "error", error: "Invalid token" });
    }
    let userId = decodedToken.id;
    let foundUser = await Agencies.findOne({ _id: userId });

    if (!foundUser) {
      return res.json({ status: "error", error: "Invalid user" });
    }

    return res.json({ status: "success", id: userId });
  } catch (err) {
    console.log(err);
    return res.json({ error: err, error: err.message });
  }
});

module.exports = router;
