const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../Models/Users");
const dotenv = require("dotenv");
dotenv.config({ path: "../config.env" });
const router = express.Router();


// Route for user registration
router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if the username or email already exists
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      return res
        .status(409)
        .json({ message: "Username or email already in use." });
    }

    // Create a new user instance and save it to the database
    const newUser = new User({
      username,
      email,
      password,
    });
    await newUser.save();

    return res.status(201).json({ message: "User registered successfully." });
  } catch (error) {
    console.error("Error during user registration:", error);
    res
      .status(500)
      .json({ message: "An error occurred during user registration." });
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