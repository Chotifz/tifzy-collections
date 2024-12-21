const express = require("express");
const router = express.Router();

const { upload } = require("../../config/cloudinary");
const {
  handleImageupload,
  addProduct,
  editProduct,
  deleteProduct,
  fetchAllProduct,
} = require("../../controllers/admin/products.controller");

router.post("/upload-image", upload.single("my_file"), handleImageupload);
router.post("/add", addProduct);
router.patch("/edit/:id", editProduct);
router.delete("/delete/:id", deleteProduct);
router.get("/", fetchAllProduct);

module.exports = router;
