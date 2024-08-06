// Packages
const mongoose = require("mongoose");

// Result Schema
const ResultSchema = new mongoose.Schema({
  id: {
    type: Number,
  },
  name: {
    type: String,
  },
  result: {
    type: Number,
  },
  duration: {
    type: String,
  },
  date: {
    type: Date,
  },
});

module.exports = mongoose.model("Result", ResultSchema);
