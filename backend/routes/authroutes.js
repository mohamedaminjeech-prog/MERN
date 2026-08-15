// require express
const express = require("express");
const {
  test,
  register,
  login,
  updateUser,
} = require("../controllers/authcontrollers");
const { registerValidation, validator } = require("../middlewares/validator");
const isAuth = require("../middlewares/isAuth");

// require router
const Router = express.Router();

// auth test route
Router.get("/test", test);

// auth register route
Router.post("/register", registerValidation(), validator, register);

// auth login route
Router.post("/login", login);

Router.put("/updateUser/:id",updateUser);

// current user controller
Router.get("/current", isAuth, (req, res) => {
  res.send({ user: req.user, message: "Current user fetched successfully" });
});

// export Router
module.exports = Router;
