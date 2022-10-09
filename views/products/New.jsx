const React = require("react");
// const DefaultLayout = require("../layouts/DefaultLayout");

class New extends React.Component {
	render() {
		return (
			<DefaultLayout className="wrapper" title="New Page">
            <div>
				<nav>
					<a href={"/products"}>Back to Products</a>
				</nav>
				<h1>Create New Product</h1>

				<form action="/products" method="POST">
					<img src="/images/shoe2.jpg" />
					<br />
					<br />
					Image: <input type="text" name="image" placeholder="new image url" />
					<br />
					<br />
					Title: <input type="text" name="title" placeholder="title" />
					<br />
					<br />
					Description:{" "}
					<input type="text" name="description" placeholder="description" />
					<br />
					<br />
					Quantity:{" "}
					<input type="number" name="quantity" placeholder="quantity" />
					<br />
					<br />
					In stock: {this.props.instock}
					<br />
					<br />
					Price: <input type="number" name="price" placeholder="price" />
					<br />
					<br />
					<a className="nav" href={`/new/`}>
						Add A Product
					</a>
					{/* <button type="submit" name="" value="Create Product">Create Product</button> */}
				</form>
                </div>
			 </DefaultLayout>
		);
	}
}

module.exports = New;
