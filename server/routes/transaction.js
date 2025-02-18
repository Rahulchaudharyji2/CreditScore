const express = require("express");
const router = express.Router();
const Transaction = require("../models/Transaction");

// ✅ Fetch user transactions (GET)
router.get("/transactions/:userId", async (req, res) => {
  try {
    const transactions = await Transaction.find({ userId: req.params.userId }).sort({ date: -1 });
    res.json(transactions);
  } catch (error) {
    res.status(500).json({ error: "Error fetching transactions" });
  }
});

// ✅ Add a new transaction (POST)
router.post("/transactions", async (req, res) => {
  try {
    const newTransaction = new Transaction(req.body);
    await newTransaction.save();
    res.status(201).json({ message: "Transaction added", transaction: newTransaction });
  } catch (error) {
    res.status(500).json({ error: "Error adding transaction" });
  }
});

// ✅ Delete a transaction (DELETE)
router.delete("/transactions/:id", async (req, res) => {
  try {
    await Transaction.findByIdAndDelete(req.params.id);
    res.json({ message: "Transaction deleted" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting transaction" });
  }
});

module.exports = router;
