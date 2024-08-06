// Database Model
const test = require("../models/test");
const result = require("../models/result");

// Create Test
const createTest = async (req, res) => {
  await test.create(req.body, (err, data) => {
    if (err) {
      console.log("Error occured", err);
    } else {
      res.status(200).json({ message: "Test Created Successfully" });
    }
  });
};

// Retrieve Tests
const retrieveTests = async (req, res) => {
  await test.findOne({}, (err, test) => {
    if (err) {
      console.log("Error occured", err);
    } else {
      res.status(200).json(test);
    }
  });
};

// Save Result
const saveResult = async (req, res) => {
  await result.create(req.body, (err, data) => {
    if (err) {
      console.log("Error Occured", err);
    } else {
      res.status(201).json({ message: "Result Saved Successfully" });
    }
  });
};

// Retrieve Results
const retrieveResult = async (req, res) => {
  await result.find({}, (err, result) => {
    if (err) {
      console.log("Error occured", err);
    } else {
      res.status(200).json(result);
    }
  });
};

module.exports = {
  newTest: createTest,
  getTest: retrieveTests,
  testResult: saveResult,
  getResult: retrieveResult,
};
