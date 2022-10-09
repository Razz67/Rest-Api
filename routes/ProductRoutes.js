const express = require("express");
const router = express.Router();


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

// Show one product (new)
router.get("/:productID", showProduct);

// Delete one product  (Destroy)
router.delete("/:productID", deleteProduct);

// Update one product
router.put("/:productID", updateProduct);


// Add New a product  (create)
router.post("/", createProduct);

// Edit one product (Edit)
router.get("/:productID/edit", editProduct);


// Get one product (Show)
router.get("/:productID", getOneProduct);

module.exports = router;
