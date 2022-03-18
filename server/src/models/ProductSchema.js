const { Schema } = require("mongoose");

const productsCollection = "products";

const ProductsSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  code: { type: Number, required: true },
  photo: { type: String, required: true },
  stock: { type: Number, required: true },
});

exports.productsCollection = productsCollection
exports.ProductsSchema = ProductsSchema


