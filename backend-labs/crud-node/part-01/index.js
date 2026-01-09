// Loads config from the .env file.
// PORT number is defined here.
require("dotenv").config();

const express = require("express");
const app = express();

// const PORT = 3000;

// Reads the port number from the .env file.
// If PORT doesn't exist, then the assigned port will be 3001.
const PORT = process.env.PORT || 3001;

// Define a route.
app.get("/", (req, res) => {
    res.send("Hello, world!");
});

app.listen(PORT, ()=> console.log(`Server running on port:${PORT}`));