const ContainerMongo = require("../../controllers/containers/ContainerMongo");
const {cartCollection, CartSchema} = require("../CartSchema")


class CarritosDaoMongo extends ContainerMongo {
  constructor() {
    super(cartCollection, CartSchema)
  }

  /* async save(cart = {products: []}){
        return super.save(cart)
    } */
}
module.exports = CarritosDaoMongo;


