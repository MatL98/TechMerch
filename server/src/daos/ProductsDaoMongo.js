const ContainerMongo = require("../containers/ContainerMongo")

class ProductosDaoMongo extends ContainerMongo {

    constructor() {
        super('productos')
    }
}

module.exports = ProductosDaoMongo;
