const ContainerMongo = require("../containers/containerMongo");

class CarritosDaoMongo extends ContainerMongo {
  constructor() {
    super("cart")
  }

  /* async save(cart = {products: []}){
        return super.save(cart)
    } */
}
module.exports = CarritosDaoMongo;
