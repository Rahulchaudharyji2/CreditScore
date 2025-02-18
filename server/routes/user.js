const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const router = express.Router();

// Register a new user
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "User already exists" });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error registering user" });
  }
});

// Login user
router.post("/login", async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // Debugging: Log incoming email and password
      console.log("Received email:", email);
      console.log("Received password:", password);
  
      const user = await User.findOne({ email });
  
      // Debugging: Log the user found in the database
      if (!user) {
        console.log("User not found in database");
        return res.status(400).json({ message: "User not found" });
      }
  
      console.log("User found:", user);
  
      const isMatch = await bcrypt.compare(password, user.password);
  
      // Debugging: Log if password match
      if (!isMatch) {
        console.log("Password mismatch for user:", email);
        return res.status(400).json({ message: "Invalid credentials" });
      }
  
      console.log("Password matched");
  
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
      res.json({
        token,
        user: { id: user._id, name: user.name, email: user.email, creditScore: user.creditScore },
      });
    } catch (error) {
      console.error("Error during login:", error);
      res.status(500).json({ error: "Error logging in" });
    }
  });
  

module.exports = router;