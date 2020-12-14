const express = require("express");
const mongoose = require("mongoose");

const mongoURI = "mongodb://localhost:27017/mapty";

const schema = new mongoose.Schema({
  title: String,
  description: String,
  coords: [Number],
});

mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("connection established with mongodb server online");
  })
  .catch((err) => {
    console.log("error while connection", err);
  });

const mapModel = mongoose.model("mappoints", schema);

exports.mapModel = mapModel;
