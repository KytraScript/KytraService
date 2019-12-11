const mongoose = require('mongoose');

const ProductsSchema = new mongoose.Schema({
    primaryKey: {
      type: Number,
      required: true
    },
    name: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    price: {
        type: String,
    },
    stock: {
        type: Number,
    },
    group: {
        type: String,
        trim: true,
    },
});

const Products = mongoose.model("Products", ProductsSchema);
module.exports = Products;