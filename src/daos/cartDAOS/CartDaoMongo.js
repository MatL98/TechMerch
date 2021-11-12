import ContainerMongo from '../../containers/ContainerMongo'

class CarritosDaoMongo extends ContainerMongo{
    constructor(){
        super('carritos', {
            productos: {type: [], required: true}
        })
    }

    async save(cart = {productos: []}){
        return super.save(cart)
    }
}
export default ContainerMongo
