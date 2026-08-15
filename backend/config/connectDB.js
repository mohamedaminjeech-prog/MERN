const mongoose = require("mongoose");
const dns = require("dns");
dns.setServers(["1.1.1.1", "8.8.8.8"]);
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log("Connected to mongoDB successfully!");
  } catch (error) {
    console.log("Error connecting to MongoDB", error);
  }
};

// export connectDB fn
module.exports = connectDB;
