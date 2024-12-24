const express = require("express");
const router = express.Router();
const {
  addAddress,
  editAddress,
  deleteAddress,
  fetchAllAddress,
} = require("../../controllers/shop/address-controller");

router.post("/add", addAddress);
router.put("/update/:userId/:addressId", editAddress);
router.delete("/delete/:userId/:addressId", deleteAddress);
router.get("/get/:userId", fetchAllAddress);

module.exports = router;
