const express = require("express");
const router = express.Router();
const {
  getFilteredProducts,
  getProductDetails,
} = require("../../controllers/shop/products-controller");

router.get("/", getFilteredProducts);
router.get("/:id", getProductDetails);

module.exports = router;
