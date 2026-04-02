/* ============================================================
   api/signup.js — Vercel Serverless Function
   POST /api/signup
============================================================ */
const mongoose = require('mongoose');
const bcrypt   = require('bcryptjs');

/* ── MongoDB connection (reused across warm invocations) ── */
let isConnected = false;

async function connectDB() {
  if (isConnected) return;
  await mongoose.connect(process.env.MONGO_URI);
  isConnected = true;
}

/* ── User Schema ─────────────────────────────────────────── */
const userSchema = new mongoose.Schema({
  name:       { type: String,  required: true,  trim: true },
  email:      { type: String,  required: true,  unique: true, lowercase: true, trim: true },
  password:   { type: String,  required: true },
  createdAt:  { type: Date,    default: Date.now },
  lastLogin:  { type: Date },
  loginCount: { type: Number,  default: 0 },
});

const User = mongoose.models.User || mongoose.model('User', userSchema);

/* ── Handler ─────────────────────────────────────────────── */
module.exports = async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST')   return res.status(405).json({ error: 'Method not allowed' });

  try {
    await connectDB();

    const { name, email, password } = req.body;

    // Validation
    if (!name || !email || !password)
      return res.status(400).json({ error: 'Please fill in all fields.' });
    if (password.length < 6)
      return res.status(400).json({ error: 'Password must be at least 6 characters.' });
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      return res.status(400).json({ error: 'Please enter a valid email address.' });

    // Duplicate check
    const existing = await User.findOne({ email: email.toLowerCase() });
    if (existing)
      return res.status(409).json({ error: 'An account with this email already exists.' });

    // Hash & save
    const hashed = await bcrypt.hash(password, 10);
    const user   = await new User({
      name:     name.trim(),
      email:    email.toLowerCase().trim(),
      password: hashed,
    }).save();

    console.log(`[SIGNUP] ${user.email} | ${new Date().toISOString()}`);
    return res.status(201).json({ success: true, user: { name: user.name, email: user.email } });

  } catch (err) {
    console.error('[SIGNUP ERROR]', err.message);
    return res.status(500).json({ error: 'Server error. Please try again.' });
  }
}
