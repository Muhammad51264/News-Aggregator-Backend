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
router.post("/register", upload.single("img"), async function (req, res) {
  const agency = req.body;
  const uploadedImage = req.file;
  let imgURL = "";
  try {
    let foundAgency = await Agencies.findOne({
      $or: [{ publisher: agency.publisher }, { email: agency.email }],
    });
    if (foundAgency) {
      fs.unlinkSync(`Pictures/NewsPictures/${uploadedImage.filename}`);
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
        fs.unlinkSync(`Pictures/NewsPictures/${uploadedImage.filename}`);
      });
  } catch (err) {
    console.log(err);
    return res.json({ error: err });
  }
});

// login for agencies
router.post("/login", async function (req, res) {
  const { email, password } = req.body;
  try {
    const foundAgency = await Agencies.findOne({ email: email });
    if (!foundAgency) {
      return res.json({ status: "error", message: "Agency didn't exist!" });
    }
    const isPasswordValid = await bcrypt.compare(
      password,
      foundAgency.password
    );
    if (!isPasswordValid) {
      return res.json({
        status: "error",
        message: "Username or Password is not correct",
      });
    }

    const token = jwt.sign({ id: foundAgency._id }, process.env.JWT_SECRET);

    return res.json({ status: "success", token, adminID: foundAgency._id });
  } catch (err) {
    console.log(err);
    return res.json({ error: err });
  }
});

router.post("/add", upload.single("img"), async function (req, res) {
  const news = req.body;
  const uploadedImage = req.file;

  try {
    const foundNews = await News.findOne({ title: news.title });
    if (foundNews) {
      fs.unlinkSync(`Pictures/NewsPictures/${uploadedImage.filename}`);
      return res.json({ status: "error", error: "News already registered" });
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
        // console.log(imgURL);
        await News.create({
          category: news.category,
          title: news.title,
          publisher: news.publisher,
          img: result.url,
          date: news.date,
          desc: news.desc,
          comments: [],
        });
        fs.unlinkSync(`Pictures/NewsPictures/${uploadedImage.filename}.jpg`);
        console.log("news created successfully");
        const agencyNews = await News.find({ publisher: news.publisher });
        return res.json({ status: "success", allNews: agencyNews });
      })
      .catch((err) => {
        console.log("error", JSON.stringify(err, null, 2));
        fs.unlinkSync(`Pictures/NewsPictures/${uploadedImage.filename}`);
        res.json({ status: "error", error: "failed" });
      });
  } catch (err) {
    console.log(err);
    return res.json({ status: "error", error: err.message });
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

router.post("/edit/:id", upload.single("img"), async function (req, res) {
  const newsId = req.params.id;
  // console.log(newsId);
  const news = req.body;
  let updatedImg = req.file;
  console.log(newsId);
  console.log(updatedImg);
  console.log(news);

  try {
    const foundNews = await News.findOne({ _id: newsId });
    if (!foundNews) {
      if (updatedImg) {
        fs.unlinkSync(`Pictures/NewsPictures/${updatedImg.filename}`);
      }
      return res.json({ status: "error", error: "no news found" });
    }
    if (!updatedImg) {
      // fs.unlinkSync(`Pictures/NewsPictures/${updatedImg.filename}`);
      let user = await News.findOne({ _id: newsId });
      updatedImg = user.img;
      await News.updateOne(
        { _id: newsId },
        {
          category: news.category,
          title: news.title,
          desc: news.desc,
          img: updatedImg,
          date: news.date,
        }
      );
      console.log("news updated successfully");
      return res.json({ status: "success", message: "edited successfully" });
    } else {
      fs.renameSync(
        `Pictures/NewsPictures/${updatedImg.filename}`,
        `Pictures/NewsPictures/${updatedImg.filename}.jpg`
      );
      cloudinary.uploader
        .upload(`Pictures/NewsPictures/${updatedImg.filename}.jpg`, {
          resource_type: "image",
        })
        .then(async (result) => {
          console.log("success", JSON.stringify(result, null, 2));
          imgURL = result.url;
          // console.log(imgURL);
          fs.unlinkSync(`Pictures/NewsPictures/${updatedImg.filename}.jpg`);

          await News.updateOne(
            { _id: newsId },
            {
              category: news.category,
              title: news.title,
              desc: news.desc,
              img: imgURL,
              date: news.date,
            }
          );
          // fs.unlinkSync(`Pictures/NewsPictures/${uploadedImage.filename}.jpg`);
          return res.json({
            status: "Success",
            message: "edited successfully with image",
          });
        })
        .catch((err) => {
          console.log("failed");
          console.log("error", JSON.stringify(err, null, 2));
          fs.unlinkSync(`Pictures/NewsPictures/${uploadedImage.filename}`);
        });
    }
    await News.updateOne(
      { _id: newsId },
      {
        category: news.category,
        title: news.title,
        desc: news.desc,
        img: news.img,
        date: news.date,
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

    return res.json({
      status: "success",
      id: userId,
      username: foundUser.publisher,
    });
  } catch (err) {
    console.log(err);
    return res.json({ error: err, error: err.message });
  }
});

module.exports = router;
