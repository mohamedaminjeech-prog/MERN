const express = require("express");
const app = express();

// require dotenv config
require("dotenv").config();

// middlewares
app.use(express.json());
const cors = require("cors");
app.use(cors());

// require PORT
const PORT = process.env.PORT || 5001;

// listen to PORT
app.listen(PORT, (error) => {
  error
    ? console.log("Error listening to PORT", error)
    : console.log(`Server is running on http://localhost:${PORT}`);
});

// HEALTH SERVER
app.get("/", (req, res) => {
  res.send("API is Working Good!");
});

// require connectDB
const connectDB = require("./config/connectDB");
connectDB();
app.use("/api/games", require("./routes/gameroutes"));
app.use("/api/ps", require("./routes/psroutes"));
app.use("/api/auth", require("./routes/authroutes"));
