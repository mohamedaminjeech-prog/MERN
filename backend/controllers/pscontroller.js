const ps = require("../models/ps");

// ps test controller
exports.test = async (req, res) => {
  try {
    return res
      .status(200)
      .send({ message: "Test ps Controller working good!" });
  } catch (error) {
    return res.status(500).send({ message: "Error in test ps controller", error: error });
  }
};

// add ps controller
exports.addPs = async (req, res) => {
  try {
    const newPs = new ps(req.body);
    await newPs.save();
    return res.status(201).send({ message: "Add ps successfully", ps: newPs });
  } catch (error) {
    return res
      .status(500)
      .send({ message: "Error in add ps controller", error: error });
  }
};

// get all ps controller
exports.getPs = async (req, res) => {
  try {
    const { title } = req.query;
    if (title) {
      const ps = await ps.find({ title: new RegExp(title, "i") });
      return res.status(200).send({
        message: "Ps found successfully with query",
        count: ps.length,
        ps: ps,
      });
    }
    const foundPs = await ps.find();
    return res.status(200).send({
      message: "Getting ps successfully",
      count: foundPs.length,
      ps: foundPs,
    });
  } catch (error) {
    return res
      .status(500)
      .send({ message: "Error in getting ps controller", error: error });
  }
};

// get ps by id controller
exports.getPsById = async (req, res) => {
  try {
    const { id } = req.params;
    const foundPs = await ps.findById(id);
    if (!foundPs) {
      return res.status(404).send({ message: "Ps not found" });
    }
    return res
      .status(200)
      .send({ message: "Getting ps by id successfully", ps: foundPs });
  } catch (error) {
    return res
      .status(500)
      .send({ message: "Error in getting ps by id controller", error: error });
  }
};

// delete ps by id controller
exports.deletePsById = async (req, res) => {
  try {
    const { id } = req.params;
    const foundPs = await ps.findByIdAndDelete(id);
    if (!foundPs) {
      return res.status(404).send({ message: "Ps not found" });
    }
    return res
      .status(200)
      .send({ message: "Ps deleted successfully", ps: foundPs });
  } catch (error) {
    return res.status(500).send({
      message: "Error in deleting ps by id controller",
      error: error,
    });
  }
};

// update ps by id controller
exports.updatePs = async (req, res) => {
  try {
    const { id } = req.params;
    const foundPs = await ps.findByIdAndUpdate(id, req.body, {
      returnDocument: "after",
    });
    if (!foundPs) {
      return res.status(404).send({ message: "Ps not found" });
    }
    return res
      .status(200)
      .send({ message: "Ps updated successfully", ps: foundPs });
  } catch (error) {
    return res.status(500).send({
      message: "Error in updating ps by id controller",
      error: error,
    });
  }
};
