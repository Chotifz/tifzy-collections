const express = require("express");
const {
  getFilteredProducts,
  getProductDetails,
} = require("../../controllers/shop/products-controller");

const router = express.Router();

router.get("/", getFilteredProducts);
router.get("/:id", getProductDetails);

module.exports = router;
