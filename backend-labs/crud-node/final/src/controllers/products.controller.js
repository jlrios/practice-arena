const querystring = require("querystring");

const listProcuts = (req, res) => {
    const query = querystring.stringify(req.query);

    fetch("https://fakestoreapi.com/products?" + query)
        .then((res) => res.json())
        .then((products) => res.send(products));
}

const showProduct = (req, res) => {
    fetch("https://fakestoreapi.com/products/" + req.params.id)
        .then((res) => res.json())
        .then((product) => res.send(product));
}

module.exports = {
    listProcuts,
    showProduct
}