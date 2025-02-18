const express = require("express");
const router = express.Router();
const axios = require("axios");

// Function to generate mock credit score
const generateCreditScore = () => {
  const score = Math.floor(Math.random() * (850 - 300 + 1)) + 300;
  return {
    creditScore: score,
    riskLevel: classifyRiskLevel(score),
    recommendations: getRecommendations(score),
  };
};

// Classify risk level
const classifyRiskLevel = (score) => {
  if (score >= 750) return "Low";
  if (score >= 650) return "Medium";
  return "High";
};

// AI-based recommendations (rule-based logic)
const getRecommendations = (score) => {
  if (score >= 750) return ["Maintain low credit utilization.", "Make on-time payments."];
  if (score >= 650) return ["Avoid taking multiple loans.", "Pay credit card bills on time."];
  return ["Prioritize paying bills on time.", "Work on settling past dues."];
};

// API to fetch credit score
router.get("/fetch-credit-score", (req, res) => {
  const mockData = generateCreditScore();
  res.json(mockData);
});

// API to connect Flask ML model for credit simulation
router.post("/simulate-credit-score", async (req, res) => {
  try {
    const response = await axios.post("https://creditscoremlmodel.onrender.com/predict-score", req.body);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Error connecting to ML API" });
  }
});

module.exports = router;
