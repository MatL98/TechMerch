const ContainerMongo = require("../../containers/ContainerMongo")

class ProductosDaoMongo extends ContainerMongo {

    constructor() {
        super('productos', {
        name: { type: String, required: true },
        price: { type: Number, required: true },
        description: {type: String, required: true},
        code: {type: Number, required: true},
        photo: { type: String, required: true },
        stock: {type: Number, required: true}
        })
    }
}

module.exports = ProductosDaoMongo;
