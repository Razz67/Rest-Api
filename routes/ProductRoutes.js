const express = require("express");
const router = express.Router();
const Product = require("../models/ProductsModel");

// Bring in controllers
const {
	getAllProducts,
	createProduct,
	deleteProduct,
	updateProduct,
	getOneProduct,
	editProduct,
	showProduct,
} = require("../controller/ProductController");

// Get back all the products (Index)
router.get("/", getAllProducts);

// Add New a product  (New)
router.post("/", createProduct);

// Delete one product  (Destroy)
router.delete("/:productID", deleteProduct);

// Update one product
router.patch("/:productID", updateProduct);

// Get one product (Show)
router.get("/:productID", getOneProduct);

// Edit one product (Edit)
router.get("/:productID/edit", editProduct);

// Show one product (Show)
router.get("/:productID", showProduct);

module.exports = router;
