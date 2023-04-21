const mongoose = require("mongoose");

// --------- Url Schema ---------

const urlSchema = new mongoose.Schema({
  url: String,
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  originalUrl: { type: String, unique: true },
  createdAt: { type: String, default: Date.now() },
});

const Url = new mongoose.model("Url", urlSchema);

module.exports = Url;
