const Product = require('../models/productsModel');


// Get all products (index)
exports.getAllProducts = async (req, res, next) => {
    try {
        const products = await Product.find();
        res.status(200).json({
            success: true,
            count: products.length,
            products,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
        });
    }
};


// New Route



// Delete Route



// Update route


// Create new product
exports.createProduct = async (req, res, next) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).json({
            success: true,
            product,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
        });
    }
};


// Edit Route


