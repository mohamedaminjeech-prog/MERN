const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    photo: {
      type: String,
      required: true,
    },
  },
  {
    collection: "games",
    timestamps: true,
  },
);

module.exports = game = mongoose.model("game", gameSchema);
