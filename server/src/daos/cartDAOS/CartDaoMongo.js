const ContainerMongo = require("../../containers/ContainerMongo");

class CarritosDaoMongo extends ContainerMongo {
  constructor() {
    super("cart", {
      products: { type: Array, required: true },
    });
  }
  /* async save(cart = {products: []}){
        return super.save(cart)
    } */
}
module.exports = CarritosDaoMongo;
