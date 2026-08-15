// require mongoose
const mongoose = require("mongoose");

// require schema
const Schema = mongoose.Schema;

// create carSchema
const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    phone: Number,
    password: {
      type: String,
      required: true,
      minLength: 6,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
  },
  { timestamps: true, collection: "users" },
);

// export model
module.exports = User = mongoose.model("user", userSchema);
