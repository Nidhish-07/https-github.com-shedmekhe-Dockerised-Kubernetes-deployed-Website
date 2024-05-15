const express = require('express');
const bodyParser = require('body-parser');
const formRouter = express.Router();
const path = require('path');
const home_path = path.join(__dirname, 'views/HomePage');
const app = express();

// Apply body-parser middleware to parse request bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, './public/')));
app.set("view engine", "hbs");
app.set("views", home_path);

formRouter.route('/')
    .get((req, res) => {
        res.render("form");
    });

// Mount the formRouter middleware
app.use('/', formRouter);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
