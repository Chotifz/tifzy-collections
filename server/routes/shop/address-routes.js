const express = require("express");
const {
  addAddress,
  editAddress,
  deleteAddress,
  fetchAllAddress,
} = require("../../controllers/shop/address-controller");

const router = express.Router();

router.post("/add", addAddress);
router.put("/update", editAddress);
router.delete("/delete/:userId/:addressId", deleteAddress);
router.get("/get/:userId", fetchAllAddress);

module.exports = router;
