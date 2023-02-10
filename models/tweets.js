const mongoose = require("mongoose");

const tweetSchema = mongoose.Schema({
  content: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "users" }],
  createdAt: Date,
});

const Tweet = mongoose.model("tweets", tweetSchema);

module.exports = Tweet;
