const express = require("express");
const router = express.Router();

// Mock function to simulate fetching live credit scores
const fetchLiveCreditScore = () => {
  return {
    creditScore: Math.floor(Math.random() * (850 - 300 + 1)) + 300, // Random score
    lastUpdated: new Date().toLocaleString(),
    agency: "Experian"
  };
};

// API to fetch live credit score
router.get("/live-credit-score", (req, res) => {
  const mockData = fetchLiveCreditScore();
  res.json(mockData);
});

module.exports = router;
