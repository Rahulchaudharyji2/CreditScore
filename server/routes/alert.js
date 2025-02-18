const express = require("express");
const router = express.Router();

// Mock alerts data
const generateAlerts = () => [
  { id: 1, type: "fraud", message: "Suspicious transaction detected (₹50,000 withdrawal).", date: new Date().toLocaleString() },
  { id: 2, type: "score_change", message: "Your credit score dropped by 15 points.", date: new Date().toLocaleString() },
  { id: 3, type: "payment_due", message: "Upcoming EMI payment due in 3 days!", date: new Date().toLocaleString() },
];

// API to fetch alerts
router.get("/alerts", (req, res) => {
  res.json(generateAlerts());
});

module.exports = router;
