const ContainerMongo = require("../../controllers/containers/ContainerMongo")
const {productsCollection, ProductsSchema} = require("../ProductSchema")

class ProductosDaoMongo extends ContainerMongo {
    constructor() {
        super(productsCollection, ProductsSchema)
    }
}

module.exports = ProductosDaoMongo;
