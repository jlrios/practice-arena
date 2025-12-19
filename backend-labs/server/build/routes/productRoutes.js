"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class ProductRoutes {
    router = (0, express_1.Router)();
    constructor() {
        this.config();
    }
    config() {
        this.router.get('/', (req, res) => res.send('Products...'));
    }
}
const productRoutes = new ProductRoutes();
exports.default = productRoutes.router;
//# sourceMappingURL=productRoutes.js.map