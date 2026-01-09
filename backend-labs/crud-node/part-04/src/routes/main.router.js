const express = require("express");
const router = express.Router();

// Import controller.
const controller = require("../controllers/main.controller");

router.get("/", controller.index);

module.exports = router;