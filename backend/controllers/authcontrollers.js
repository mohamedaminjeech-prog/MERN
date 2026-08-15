const User = require("../models/user");

// require bcrypt for password hashing
const bcrypt = require("bcrypt");

// require jwt
const jwt = require("jsonwebtoken");

// auth test controller
exports.test = async (req, res) => {
  try {
    return res
      .status(200)
      .send({ message: "Test auth Controller working good!" });
  } catch (error) {
    return res.status(500).send({ message: "Test error", error: error });
  }
};

// register controller
exports.register = async (req, res) => {
  try {
    const { email } = req.body;
    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return res
        .status(400)
        .send({ message: "Email already used", email: email });
    }

    const newUser = new User(req.body);

    // hash password

    const salt = 10;

    const hashedPassword = await bcrypt.hash(newUser.password, salt);

    newUser.password = hashedPassword;

    await newUser.save();

    // Generate JWT token
    const token = jwt.sign(
      {
        id: newUser._id,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        email: newUser.email,
      },
      process.env.SECRET_KEY,
      { expiresIn: "7d" },
    );

    res
      .status(201)
      .send({ message: "User registered succ", token: token, user: newUser });
  } catch (error) {
    return res.status(500).send({ message: "Register error", error: error });
  }
};

// login controller
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      return res.status(400).send({ message: "Email not found", email: email });
    }

    const comparedPassword = await bcrypt.compare(
      password,
      existingUser.password,
    );

    if (!comparedPassword) {
      return res.status(400).send({ message: "Password invalid" });
    }

    // Generate JWT token
    const token = jwt.sign(
      {
        id: existingUser._id,
        firstName: existingUser.firstName,
        lastName: existingUser.lastName,
        email: existingUser.email,
      },
      process.env.SECRET_KEY,
      { expiresIn: "7d" },
    );

    res.status(201).send({
      message: "User loggedIn succ",
      token: token,
      user: existingUser,
    });
  } catch (error) {
    return res.status(500).send({ message: "Login error", error: error });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = { ...req.body };

    // Hash password if it's being updated
    if (updateData.password) {
      const salt = 10;
      updateData.password = await bcrypt.hash(updateData.password, salt);
    }

    const foundUser = await User.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    });

    if (!foundUser) {
      return res.status(404).send({ message: "User not found" });
    }

    return res.status(200).send({
      message: "User updated successfully",
      user: foundUser,
    });
  } catch (error) {
    console.error("Update User Error:", error);
    return res.status(500).send({
      message: "Error in updating user by id controller",
      error: error.message,
    });
  }
};
