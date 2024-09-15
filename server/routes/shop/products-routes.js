const express = require("express");
const {
  getFilteredProducts,
} = require("../../controllers/shop/products-controller");

const router = express.Router();

router.get("/", getFilteredProducts);

module.exports = router;
