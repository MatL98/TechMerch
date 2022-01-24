const {Schema, model} = require("mongoose");

const cartCollection = 'cart'

const CartSchema = new Schema({
    products: { type: Array, required: true },
    timestamp: { type: String, required: true },
    buyer: { type: Object, required: true },
})

module.exports = model(cartCollection, CartSchema)