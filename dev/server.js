// Packages
const cors = require("cors");
const path = require("path");
const env = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

env.config(); // Environment Configuration

process.env.Path = __dirname; // Storing Directory Path in Environment

const app = express(); // Express App

// Connecting to MongoDB through Mongoose
mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useUnifiedTopology", true);
const uri = process.env.SERVER_DB_URI;
mongoose.connect(uri, function (err) {
  if (err) {
    console.log("Error: " + err);
  } else {
    console.log("Database Connected Successfully");
  }
});
mongoose.Promise = global.Promise;

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors()); // Cors Middleware

// To Serve Static Files
app.use(express.static("views"));
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.get("/", (req, res) => res.send("Base Route"));

// API Routes
const routes = require("./routes/api");
app.use("/api", routes);

// Serve Build Files
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

// Error Handling
app.use(function (err, req, res, next) {
  res.status(422).send(err.message);
});

// Listening
app.listen(process.env.PORT, () => console.log(`Server Running`));
