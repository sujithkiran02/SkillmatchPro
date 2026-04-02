const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const path = require("path");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Connect MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected ✅"))
  .catch(err => console.log(err));

// User Schema (Synced with api/ functions)
const userSchema = new mongoose.Schema({
  name:       { type: String,  required: true,  trim: true },
  email:      { type: String,  required: true,  unique: true, lowercase: true, trim: true },
  password:   { type: String,  required: true },
  createdAt:  { type: Date,    default: Date.now },
  lastLogin:  { type: Date },
  loginCount: { type: Number,  default: 0 },
});

const User = mongoose.model("User", userSchema);

// ✅ SIGNUP
app.post("/api/signup", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    if (!name || !email || !password)
      return res.status(400).json({ error: 'Please fill in all fields.' });
    if (password.length < 6)
      return res.status(400).json({ error: 'Password must be at least 6 characters.' });
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      return res.status(400).json({ error: 'Please enter a valid email address.' });

    const existing = await User.findOne({ email: email.toLowerCase() });
    if (existing) {
      return res.status(409).json({ error: "An account with this email already exists." });
    }

    const hashed = await bcrypt.hash(password, 10);

    const user = new User({
      name: name.trim(),
      email: email.toLowerCase().trim(),
      password: hashed
    });

    await user.save();
    
    console.log(`[SIGNUP] ${user.email} | ${new Date().toISOString()}`);
    res.status(201).json({
      success: true,
      user: { name: user.name, email: user.email }
    });

  } catch (err) {
    console.error('[SIGNUP ERROR]', err.message);
    res.status(500).json({ error: "Server error. Please try again." });
  }
});

// ✅ LOGIN
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password)
      return res.status(400).json({ error: 'Please fill in all fields.' });

    const user = await User.findOne({ email: email.toLowerCase().trim() });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: "Invalid email or password." });
    }

    // Update login metadata
    user.lastLogin  = new Date();
    user.loginCount = (user.loginCount || 0) + 1;
    await user.save();

    console.log(`[LOGIN] ${user.email} | login #${user.loginCount} | ${new Date().toISOString()}`);
    res.json({
      success: true,
      user: { name: user.name, email: user.email }
    });

  } catch (err) {
    console.error('[LOGIN ERROR]', err.message);
    res.status(500).json({ error: "Server error. Please try again." });
  }
});

// Fallback to serve index.html for single page app routing
app.use((req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

// Start server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});