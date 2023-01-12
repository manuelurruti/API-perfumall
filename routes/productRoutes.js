const express = require("express");
const router = express.Router();
const userController = require("../controllers/productController");

router.get("/", userController.getAllProducts);
router.get("/:id", userController.getProduct);
router.get("/brands", userController.getAllBrands);

module.exports = router;
