const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
require('dotenv/config');


// Import Routes
const postsRoute = require('./routes/PostsRoute');
const productsRoute = require('./routes/ProductRoutes');


// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use("/posts", postsRoute);
app.use("/products", productsRoute);


// Routes
app.get('/', (req, res) => {
    res.send('We are on home');
});

// Connect to DB
mongoose.connect(process.env.MONGO_DB, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true }, () => {
    console.log('Connected to DB');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
