const React = require("react");
const DefaultLayout = require("../layouts/DefaultLayout");

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

				Name: <input type="text" name="name" placeholder="name" />
					<br />
					<br />

					Description:{" "}
					<input type="text" name="description" placeholder="description" />
					<br />
					<br />

					Price: <input type="number" name="price" placeholder="price" />
					<br />
					<br />
					Discount: <input type="number" name="discount" placeholder="discount" />
					<br />
					<br />
					color: <input type="text" name="color" placeholder="color" />
					<br />
					<br />
					Size: <input type="text" name="size" placeholder="size" />
					<br />
					<br />

					Rating: <input type="number" name="rating" placeholder="rating" />
					<br />
					<br />

					Image: <input type="text" name="image" placeholder="new image url" />
					<br />
					<br />
					
					Category: <input type="text" name="category" placeholder="category" />
					<br />
					<br />

					Stock: <input type="number" name="stock" placeholder="stock" /> 
					<br />
					<br />

					Number Of Reviews: <input type="number" name="numberOfReviews" placeholder="number Of Reviews" />
					<br />
					<br />

					Reviews: <input type="text" name="reviews" placeholder="reviews" />
					<br />
					<br />

					User: <input type="text" name="user" placeholder="user" />
					<br />
					<br />

					Date created: <input type="text" name="dateCreated" placeholder="Date Created" />
					<br />
					<br />
					<a className="nav" href={`/new/`}>
						Add A Product
					</a>
				</form>
                </div>
			 </DefaultLayout>
		);
	}
}

module.exports = New;
