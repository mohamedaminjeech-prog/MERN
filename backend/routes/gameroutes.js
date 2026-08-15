const express = require("express");
const {
  test,
  addGame,
  getGameById,
  deleteGameById,
  updateGame,
  getGames,
} = require("../controllers/gamecontroller");

const router = express.Router();

router.get("/test", test);
router.post("/addGame", addGame);
router.get("/getGames", getGames);
router.get("/getGameById/:id", getGameById);
router.delete("/deleteGameById/:id", deleteGameById);
router.put("/updateGame/:id", updateGame);

module.exports = router;
