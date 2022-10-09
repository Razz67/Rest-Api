const React = require("react");
const DefaultLayout = require("../layouts/DefaultLayout");

class Index extends React.Component {
	render() {
		const { products } = this.props;

		return (
			<DefaultLayout title="All product" foodGroup="products">
            <div title="All Products">
				<h1>Product Index Page</h1>
				<ul id="products-index">
					{products.map((products) => {
						return (
							<li key={products._id}>
								The <a href={`/products/${products._id}`}>{products.name}</a> is{" "}
								{products.color}.
							</li>
						);
					})}
				</ul>

				<nav>
					<a href="products/new">Create a new a product</a>
				</nav>
                </div>
			</DefaultLayout>
		);
	}
}

module.exports = Index;
