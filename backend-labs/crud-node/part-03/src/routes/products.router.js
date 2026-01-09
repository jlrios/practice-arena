const express = require("express");
const router = express.Router();

const controller = require("../controllers/products.controller");

router.get("/", controller.productList);
router.get("/:id", controller.product);

module.exports = router;