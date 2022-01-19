const  ContainerMongo = require('../../containers/ContainerMongo')

class CarritosDaoMongo extends ContainerMongo{
    constructor(){
        super('carritos', {
            products: {type: [], required: true}
        })
    }

    async save(cart = {products: []}){
        return super.save(cart)
    }
}
module.exports = CarritosDaoMongo
