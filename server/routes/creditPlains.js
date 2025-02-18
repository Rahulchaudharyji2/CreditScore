const express = require("express");
const router = express.Router();

// AI-based personalized credit plan generator
const generatePersonalizedPlan = (creditScore) => {
  if (creditScore >= 750) return ["Maintain on-time payments", "Keep utilization low"];
  if (creditScore >= 650) return ["Reduce credit utilization", "Avoid applying for multiple loans"];
  return ["Pay off outstanding debts", "Avoid late payments", "Consider credit counseling"];
};

// API to fetch personalized plan based on credit score
router.post("/personalized-plan", (req, res) => {
  const { creditScore } = req.body;
  if (!creditScore) return res.status(400).json({ error: "Credit score is required" });

  const plan = generatePersonalizedPlan(creditScore);
  res.json({ personalizedPlan: plan });
});

module.exports = router;
