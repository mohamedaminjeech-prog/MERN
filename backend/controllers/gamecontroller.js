const game = require("../models/game");
// game test controller
exports.test = async (req, res) => {
  try {
    return res
      .status(200)
      .send({ message: "Test game Controller working good!" });
  } catch (error) {
    return res.status(500).send({ message: "Error in test game controller", error: error });
  }
};

// add game controller
exports.addGame = async (req, res) => {
  try {
    const newGame = new game(req.body);
    await newGame.save();
    return res
      .status(201)
      .send({ message: "Add game successfully", game: newGame });
  } catch (error) {
    return res
      .status(500)
      .send({ message: "Error in add game controller", error: error });
  }
};

// get all games controller
exports.getGames = async (req, res) => {
  try {
    const { title } = req.query;
    if (title) {
      const games = await game.find({ title: new RegExp(title, "i") });
      return res
        .status(200)
        .send({
          message: "Games found successfully with query",
          count: games.length,
          games: games,
        });
    }
    const foundGames = await game.find();
    return res
      .status(200)
      .send({
        message: "Getting games successfully",
        count: foundGames.length,
        games: foundGames,
      });
  } catch (error) {
    return res
      .status(500)
      .send({ message: "Error in getting games controller", error: error });
  }
};

// get game by id controller
exports.getGameById = async (req, res) => {
  try {
    const { id } = req.params;
    const foundGame = await game.findById(id);
    if (!foundGame) {
      return res.status(404).send({ message: "Game not found" });
    }
    return res
      .status(200)
      .send({ message: "Getting game by id successfully", game: foundGame });
  } catch (error) {
    return res
      .status(500)
      .send({ message: "Error in getting game by id controller", error: error });
  }
};

// delete game by id controller
exports.deleteGameById = async (req, res) => {
  try {
    const { id } = req.params;
    const foundGame = await game.findByIdAndDelete(id);
    if (!foundGame) {
      return res.status(404).send({ message: "Game not found" });
    }
    return res
      .status(200)
      .send({ message: "Game deleted successfully", game: foundGame });
  } catch (error) {
    return res
      .status(500)
      .send({
        message: "Error in deleting game by id controller",
        error: error,
      });
  }
};

// update game by id controller
exports.updateGame = async (req, res) => {
  try {
    const { id } = req.params;
    const foundGame = await game.findByIdAndUpdate(id, req.body, {
      returnDocument: "after",
    });
    if (!foundGame) {
      return res.status(404).send({ message: "Game not found" });
    }
    return res
      .status(200)
      .send({ message: "Game updated successfully", game: foundGame });
  } catch (error) {
    return res
      .status(500)
      .send({
        message: "Error in updating game by id controller",
        error: error,
      });
  }
};
