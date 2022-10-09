const React = require("react");
const DefaultLayout = require("../layouts/DefaultLayout");

class Edit extends React.Component {
	render() {
		let { product } = this.props;

		return (
			<DefaultLayout title="edit a product" productGroup="shoes">
				<h1>Edit Page</h1>
				<form action={`/products/${product._id}?_method=PUT`} method="POST">
					Name: <input type="text" name="name" defaultValue={product.name} />
                    <br />
                    Description: <input type="text" name="description" defaultValue={product.description} />
                    <br />
                    Price: <input type="text" name="price" defaultValue={product.price} />
                    <br />
                    Offer Price: <input type="text" name="offerPrice" defaultValue={product.offerPrice} />
                    <br />
                    Color: <input type="text" name="color" defaultValue={product.color} />
                    <br />
                    Size: <input type="text" name="size" defaultValue={product.size} />
                    <br />
                    Ratings: <input type="number" name="ratings" defaultValue={product.ratings} />
                    <br />

                    {/* UPLOAD IMAGES */}
                    <form group action="/upload" method="POST" enctype="multipart/form-data">
                    <fieldset>
                        <legend>Add Image</legend>
                        ID: <input type="text" name="public_id" />
                        <br />
                        URL: <input type="file" name="url" />
                        <br />
                        <input type="submit" value="Add Image" />
                    </fieldset>
                    </form>
                    <br />
                    Category: <input type="text" name="category" defaultValue={product.category} />
                    <br />
                    Stock: <input type="number" name="stock" defaultValue={product.stock} />
                    <br />
                    Number of Reviews: <input type="number" name="numOfReviews" defaultValue={product.numOfReviews} />
                    <br />
                    <form group action="/upload" method="POST" enctype="multipart/form-data">
                    <fieldset>
                        <legend>Add Review</legend>
                        UserID: <input type="ObjectID" name="user" />

                        <br />
                        userName: <input type="text" name="userName" />
                        <br />
                        Rating: <input type="number" name="rating" />
                        <br />
                        Comment: <input type="text" name="comment" />
                        <br />
                        Time: <input type="date" name="time" />
                        </fieldset>
                        <br />
                        User: <input type="text" name="user" defaultValue={product.user} />
                        <br />
                        Created At: <input type="date" name="createdAt" defaultValue={product.createdAt} />
                    </form>
                    <br />
                    <input type="submit" value="Edit Product" />
                </form>
            </DefaultLayout>
        );
    }
}
                        
module.exports = Edit;
