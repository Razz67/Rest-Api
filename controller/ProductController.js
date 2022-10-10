const Product = require("../models/ProductsModel");


// ROUTE    GET /products     (index)
const findAllProducts = (req, res) => {
	Product.find({}, (err, foundProducts) => {
		if (err) {
			res.status(400).json(err);
		} else {
			res.status(200).render("products/Index", { products: foundProducts });
		}
	});
};

// ROUTE    Get /products/new    (new)
const showNewView = (req, res) => {
	res.render("products/New");
};

// ROUTE    DELETE /products/:id    (destroy)
const deleteOneProduct = (req, res) => {
	Product.findByIdAndDelete(req.params.id, (err, deleteProduct) => {
		if (err) {
			res.status(400).json(err);
		} else {
			res.status(200).redirect("/products");
		}
	});
};

// ROUTE    Put /products/:id    (update)
const updateOneProduct = async (req, res) => {
	const product = await Product.findById(req.params.id);
		if (!product) {
			return res.status(500).json({
				success: false,
				message: "Product not found",
			})
		} 
		product = await Product.findByIdAndUpdate(req.params.id, req.body, {
				new: true,
				runValidators: true,
				useUnified: false,
		})
	};


// ROUTE    POST /products    (create)
const createNewProduct = (req, res) => {
	
	Product.create(req.body, (err, createdproducts) => {
		if (err) {
			res.status(400).json(err);
		} else {
			res.status(200).redirect("/products");
		}
	});
};


// ROUTE      GET /products/:id/edit     (edit)
const showEditView = (req, res) => {
	Product.findById(req.params.id, (err, foundProduct) => {
		if (err) {
			res.status(400).json(err);
		} else {
			res.status(200).render("products/Edit", { log: foundProduct });
		}
	});
};

// ROUTE    Get /products/:id    (show)
const showOneProduct = (req, res) => {
	Product.findById(req.params.id, (err, foundProduct) => {
		if (err) {
			res.status(400).json(err);
		} else {
			res.status(200).render("products/Show", { log: foundProduct });
		}
	});
};



module.exports = {
	findAllProducts,
	showNewView,
	createNewProduct,
	showOneProduct,
	showEditView,
	updateOneProduct,
	deleteOneProduct,
};
