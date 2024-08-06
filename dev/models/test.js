// Packages
const mongoose = require("mongoose");

// Test Schema
const testSchema = new mongoose.Schema({
  id: {
    type: "Number",
  },
  name: {
    type: "String",
  },
  description: {
    type: "String",
  },
  questions: [
    {
      name: {
        type: "String",
      },
      options: [
        {
          name: {
            type: "String",
          },
          isAnswer: {
            type: "Boolean",
          },
        },
      ],
      questionType: {
        name: {
          type: "String",
        },
        isActive: {
          type: "Boolean",
        },
      },
    },
  ],
});

module.exports = mongoose.model("Test", testSchema);
