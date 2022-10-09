const Product = require("../models/productsModel");

// Route GET/products (index)
const getAllProducts = (req, res) => {
	Product.find({}, (err, foundProducts) => {
		if (err) {
			res.status(400).json(err);
		} else {
			res.status(200).render( "products/index", { products: foundProducts });
		}
	});
};

// Route GET /products/new   (new)
const createProduct = (req, res) => {
	Product.create(req.body, (err, createdProduct) => {
		if (err) {
			res.status(400).json(err);
		} else {
			res.status(200).redirect("/products");
		}
	});
};

// Delete Route
const deleteProduct = (req, res) => {
    Product.findByIdAndDelete(req.params.id, (err, deletedProduct) => {
        if (err) {
            res.status(400).json(err);
        } else {
            res.status(200).redirect("/products");
        }
    });
};

// Update route
const updateProduct = (req, res) => {
    Product.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedProduct) => {
        if (err) {
            res.status(400).json(err);
        } else {
            res.status(200).redirect(`/products/${updatedProduct._id}`);
        }
    });
};


// Route    (create)
const getOneProduct = (req, res) => {
    Product.findById(req.params.id, (err, createdProduct) => {
        if (err) {
            res.status(400).json(err);
        } else {
            res.status(200).redirect("/products");
        }
    });
};


// Edit Route
const editProduct = (req, res) => {
    Product.findById(req.params.id, (err, foundProduct) => {
        if (err) {
            res.status(400).json(err);
        } else {
            res.status(200).render("products/edit", { product: foundProduct });
        }
    });
};

// Show Route
const showProduct = (req, res) => {
    Product.findById(req.params.id, (err, foundProduct) => {
        if (err) {
            res.status(400).json(err);
        } else {
            res.status(200).render("products/show", { product: foundProduct });
        }
    });
};


module.exports = {
	getAllProducts,
	createProduct,
	deleteProduct,
	updateProduct,
	getOneProduct,
    editProduct,
    showProduct
};
