const ContainerMongo = require("../containers/containerMongo")

class ProductosDaoMongo extends ContainerMongo {

    constructor() {
        super('productos')
    }
}

module.exports = ProductosDaoMongo;
