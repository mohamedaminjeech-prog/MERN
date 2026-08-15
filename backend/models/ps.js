const mongoose = require("mongoose");

const psSchema = new mongoose.Schema(
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
    collection: "ps",
    timestamps: true,
  },
);

module.exports = ps = mongoose.model("ps", psSchema);
