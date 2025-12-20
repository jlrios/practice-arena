require("dotenv").config();

const express = require("express");
const app = express();

const mainRouter = require("./src/routes/main.router");

const PORT = process.env.PORT || 3000;

app.use(mainRouter);
app.use("/products", require("./src/routes/products.router"));

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});