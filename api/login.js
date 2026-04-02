/* ============================================================
   api/login.js — Vercel Serverless Function
   POST /api/login
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
export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST')   return res.status(405).json({ error: 'Method not allowed' });

  try {
    await connectDB();

    const { email, password } = req.body;

    if (!email || !password)
      return res.status(400).json({ error: 'Please fill in all fields.' });

    const user = await User.findOne({ email: email.toLowerCase().trim() });
    if (!user || !(await bcrypt.compare(password, user.password)))
      return res.status(401).json({ error: 'Invalid email or password.' });

    // Update login metadata
    user.lastLogin  = new Date();
    user.loginCount = (user.loginCount || 0) + 1;
    await user.save();

    console.log(`[LOGIN] ${user.email} | login #${user.loginCount} | ${new Date().toISOString()}`);
    return res.json({ success: true, user: { name: user.name, email: user.email } });

  } catch (err) {
    console.error('[LOGIN ERROR]', err.message);
    return res.status(500).json({ error: 'Server error. Please try again.' });
  }
}
