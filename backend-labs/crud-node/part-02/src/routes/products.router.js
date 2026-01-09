const express = require("express");
const router = express.Router();

const querystring = require("querystring");

router.get("/", (req, res) => {
    console.log(req.query); // Prints an object: { limit: '7', sort: 'desc' }.

    const query = querystring.stringify(req.query);

    console.log(query); // Prints a text: limit=7&sort=desc.
        
    fetch("https://fakestoreapi.com/products?" + query) 
        .then(res => res.json())
        .then(data => res.json(data));
});

router.get("/:id", (req, res) => {
    fetch("https://fakestoreapi.com/products/" + req.params.id)
        .then(res => res.json())
        .then(data => res.json(data));
});

module.exports = router;