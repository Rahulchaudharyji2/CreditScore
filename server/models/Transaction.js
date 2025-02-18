const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Links to User model
  date: { type: Date, default: Date.now },  // Transaction date
  type: { type: String, required: true },   // e.g., "Credit Card Payment", "Loan EMI"
  amount: { type: Number, required: true }, // Transaction amount
  status: { type: String, enum: ["Paid on Time", "Late Payment", "Pending"], required: true }
});

module.exports = mongoose.model("Transaction", TransactionSchema);
