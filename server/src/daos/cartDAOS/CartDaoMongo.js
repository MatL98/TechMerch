const  ContainerMongo = require('../../containers/ContainerMongo')

class CarritosDaoMongo extends ContainerMongo{
    constructor(){
        super('cart', {
            products: {type: Array, required: true}
        })
    }

}
module.exports = CarritosDaoMongo
