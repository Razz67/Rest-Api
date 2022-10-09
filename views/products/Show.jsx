const React = require("react");
// const DefaultLayout = require("../layouts/DefaultLayout");

// class component
class Show extends React.Component {
	render() {
		const { _id, title, description, category, price, image, instock } =
			this.props.products;

		return (
			// <DefaultLayout title="Show Page" productGroup="products">
				<div className="wrapper">
					<nav>
						<a href={"/products"}>Back to Products</a>
					</nav>
					<h1>Show Product</h1>
					<h3>{category}</h3>
					<img src={image} />
					<p>{`Product Description: ${description}`}</p>
					<p>{`Product Price: $${price.toFixed(2)}`}</p>
					<p>{instock ? "It is in stock!" : "It is NOT in stock!"}</p>

					<form action={`/products/${_id}?_method=DELETE`} method="POST">
						<input type="submit" value="Delete Product" />
						<br />
						<br />
						<a className="btn btn-primary" href={`/products/${_id}/edit`}>
							Back
						</a>
					</form>
				</div>
			// </DefaultLayout>
		);
	}
}

module.exports = Show;
