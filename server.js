const express = require('express');
const methodOverride = require('method-override');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
require('dotenv/config');

// Import Routes
const postsRoute = require('./routes/PostsRoute');
const productsRoute = require('./routes/ProductRoutes');

// setup our view engine
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(methodOverride('_method'));
app.use("/posts", postsRoute);
app.use("/products", productsRoute);

// Connect to DB
mongoose.connect(process.env.MONGO_DB, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true }, () => {
    console.log('Connected to DB');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
