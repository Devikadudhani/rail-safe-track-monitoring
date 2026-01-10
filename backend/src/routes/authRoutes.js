const express = require("express");
const jwt = require("jsonwebtoken");

const router = express.Router();

const ROLES = {
  TRACK_MONITOR: process.env.TRACK_MONITOR_PASSWORD,
  TRAFFIC_CONTROL: process.env.TRAFFIC_CONTROL_PASSWORD,
  ENGINEERING_AUTHORITY: process.env.ENGINEERING_AUTHORITY_PASSWORD,
  CLEARANCE_AUTHORITY: process.env.CLEARANCE_AUTHORITY_PASSWORD,
};

router.post("/login", (req, res) => {
  const { role, password } = req.body;

  if (!role || !password) {
    return res.status(400).json({ message: "Role and password required" });
  }

  const expectedPassword = ROLES[role];

  if (!expectedPassword || password !== expectedPassword) {
    return res.status(401).json({ message: "Invalid role or password" });
  }

  const token = jwt.sign(
    { role },
    process.env.JWT_SECRET
  );

  res.json({
    message: "Login successful",
    token,
    role,
  });
});

module.exports = router;
