import ContainerMongo from "../../containers/ContainerMongo"

class ProductosDaoMongo extends ContainerMongo {

    constructor() {
        super('productos', {
            name: { type: String, required: true },
            price: { type: Number, required: true },
            description: {type: String, required: true},
            code: {type: Number, required: true},
            thumbnail: { type: String, required: true },
            stock: {type: Number, required: true}
        })
    }
}

export default ProductosDaoMongo
