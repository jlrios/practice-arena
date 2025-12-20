const express = require("express");
const router = express.Router();

const controller = require("../controllers/products.controller");

router.get("/", controller.listProcuts);
router.get("/:id", controller.showProduct);

module.exports = router;