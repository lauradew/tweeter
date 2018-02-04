"use strict";

// Basic express setup:

require('dotenv').config();
const PORT          = 8080;
const express       = require("express");
const bodyParser    = require("body-parser");
const app           = express();

const nodeSass      = require("node-sass-middleware");
const path          = require("path");

// app.use(nodeSass({
//   src: path.join(__dirname, 'sass'),
//   dest: path.join(__dirname, 'public'),
//   debug: true;
//   outputStyle: 'compressed'
// }));


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// The in-memory database of tweets. It's a basic object with an array in it.
const MongoClient = require("mongodb").MongoClient;
const MONGODB_URI = process.env.MONGODB_URI;
// const db = MongoClient;

MongoClient.connect(MONGODB_URI, (err, db) => {
  if (err) {
    console.error(`Failed to connect: ${MONGODB_URI}`);
    throw err;
  }
  console.log(`Connected to mongodb: ${MONGODB_URI}`);
  const DataHelpers = require("./lib/data-helpers.js")(db);
  const tweetsRoutes = require("./routes/tweets")(DataHelpers);
  app.use("/tweets", tweetsRoutes);
});



app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});
