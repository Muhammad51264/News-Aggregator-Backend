const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../Models/Users");
const dotenv = require("dotenv");
dotenv.config({ path: "../config.env" });
const router = express.Router();


// Route for user registration


router.post("/register", async function (req, res) {
  const user = req.body;
  try {
    let foundUser = await User.findOne({
      $or: [{ username: user.username }, { email: user.email }],
    });
    if (foundUser) {
      return res.json({ status: "error", message: "Email already registered" });
    }

        await User.create({
          username: user.username,
          email: user.email,
          password: user.password,
        });

        foundUser = await User.findOne({ email: user.email });
        const token = jwt.sign({ id: foundUser._id }, process.env.JWT_SECRET);
        console.log("User created successfully");
        console.log(token);

        // fs.unlinkSync(`Pictures/NewsPictures/${uploadedImage.filename}.jpg`);
        return res.json({ status: "Success", token ,name: foundUser.username});

  } catch (err) {
    console.log(err);
    return res.json({ error: err });
  }
});

// Route for user login
router.post("/login", async function (req, res) {
  const { email, password } = req.body;
  try {
    const foundUser = await User.findOne({ email: email });
    if (!foundUser) {
      return res.json({ status: "error", message: "User didn't exist!" });
    }
    const isPasswordValid = await bcrypt.compare(
      password,
      foundUser.password
    );
    if (!isPasswordValid) {
      return res.json({
        status: "error",
        message: "Username or Password is not correct",
      });
    }

    const token = jwt.sign({ id: foundUser._id }, process.env.JWT_SECRET);

    return res.json({status:"success", token, userID: foundUser._id ,name: foundUser.username});
  } catch (err) {
    console.log(err);
    return res.json({ error: err });
  }
});




module.exports = router;