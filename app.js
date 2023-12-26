// Basic Lib Import
const express = require("express");
const router = require("./src/routes/api");
const app = new express();

// Security Middleware Lib Import
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const expressMongoSanitize = require("express-mongo-sanitize");
const hpp = require("hpp");
const cors = require("cors");

// Database Lib Import
const mongoose = require("mongoose");

// Security Middleware Implement
app.use(cors());
app.use(helmet());
app.use(expressMongoSanitize());
app.use(hpp());

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" }));

// Request Rate Limit
const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 3000 });
app.use(limiter);

// Mongo DB Database Connection
let URI =
  "mongodb+srv://supu345:user123@cluster0.fcgjuvw.mongodb.net/MernEcommerc?retryWrites=true&w=majority";
let OPTION = { user: "supu345", pass: "user123", autoIndex: true };
mongoose.connect(URI, OPTION);

// Routing Implement
app.use("/api/v1", router);

// Undefined Route Implement
app.use("*", (req, res) => {
  res.status(404).json({ status: "fail", data: "Not Found" });
});

module.exports = app;
