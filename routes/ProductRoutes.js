const express = require("express");
const router = express.Router();
const Product = require("../models/ProductsModel");

// Get back all the products (Index)
router.get("/", async (req, res) => {
	try {
		const products = await Product.find();
		res.json(products);
	} catch (err) {
		res.json({ message: err });
	}
});

// Add New a product  (New)
router.post("/", async (req, res) => {
    const product = new Product({
        title: req.body.title,
        description: req.body.description,
    });
    try {
        const savedProduct = await product.save();
        res.json(savedProduct);
    } catch (err) {
        res.json({ message: err });
    }
});

// Delete one product  (Destroy)
router.delete("/:productID", async (req, res) => {
	try {
		const removedProduct = await Product.remove({ _id: req.params.productID });
		res.json(removedProduct);
	} catch (err) {
		res.json({ message: err });
	}
});

// Update one product
router.patch("/:productID", async (req, res) => {
	try {
		const updateProduct = await Product.updateOne(
			{ _id: req.params.productID },
			{ $set: { title: req.body.title } }
		);
		res.json(updateProduct);
	} catch (err) {
		res.json({ message: err });
	}
});

// Get one product (Show)
router.get("/:productID", async (req, res) => {
	try {
		const product = await Product.findById(req.params.productID);
		res.json(product);
	} catch (err) {
		res.json({ message: err });
	}
});


module.exports = router;
