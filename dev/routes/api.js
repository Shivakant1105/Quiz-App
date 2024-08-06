// Packages
const express = require("express");

// Router
const router = express.Router();

// Controller
const test = require("../controller/test");

// Base Route
router.get("/", (req, res) => res.send("Welcome to API Routes"));

router.post("/create/test", test.newTest);

router.get("/get/tests", test.getTest);

router.post("/result/test", test.testResult);

router.get("/get/results", test.getResult);

// Exporting Module
module.exports = router;
