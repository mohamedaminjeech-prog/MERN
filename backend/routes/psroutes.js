const express = require("express");
const { test, addPs, getPs, getPsById, deletePsById, updatePs } = require("../controllers/pscontroller");


const router = express.Router();

router.get("/test", test);
router.post("/addPs", addPs);
router.get("/getPs", getPs);
router.get("/getPsById/:id", getPsById);
router.delete("/deletePsById/:id", deletePsById);
router.put("/updatePs/:id", updatePs);

module.exports = router;
