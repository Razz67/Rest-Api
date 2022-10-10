const express = require("express");
const router = express.Router();

const {
	findAllProducts,
	showNewView,
	deleteOneProduct,
	updateOneProduct,
	createNewProduct,
	showEditView,
	showOneProduct,
} = require("../controller/ProductController");

// Setup "index" routes
router.get("/", findAllProducts);

// Setup "new" route
router.get("/new", showNewView);

// Setup "destroy" route
router.delete("/:id", deleteOneProduct);

// Setup "update" route
router.put("/:id", updateOneProduct);

// Setup "create" route
router.post("/", createNewProduct);

// Setup "edit" route
router.get("/:id/edit", showEditView);

// Setup "show" route
router.get("/:id", showOneProduct);

module.exports = router;
