const {Schema, model} = require("mongoose");

const cartCollection = 'cart'

const CartSchema = new Schema({
    products: { type: Array, required: true }
})

module.exports = model(cartCollection, CartSchema)