const express = require("express");
const {
  fetchCartItems,
  addToCart,
  updateCartItemQty,
  deleteCartItem,
} = require("../../controllers/shop/cart-controller");
const router = express.Router();

router.post("/add", addToCart);
router.get("/:userId", fetchCartItems);
router.patch("/update-cart", updateCartItemQty);
router.delete("/:userId/:productId", deleteCartItem);

module.exports = router;
