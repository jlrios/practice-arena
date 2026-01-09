// Loads config from the .env file.
// PORT number is defined here.
require("dotenv").config();

const express = require("express");
const app = express();

const mainRouter = require("./src/routes/main.router");

// const PORT = 3000;

// Reads the port number from the .env file.
// If PORT doesn't exist, then the assigned port will be 3001.
const PORT = process.env.PORT || 3001;

// Define a route.
/* App.get("/", (req, res) => {
    res.send("Hello world!");
}); */

app.use(mainRouter);
app.use("/products", require("./src/routes/products.router"));

app.listen(PORT, ()=> console.log(`Server running on port:${PORT}`));