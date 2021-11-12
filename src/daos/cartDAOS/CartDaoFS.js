import ContainerFS from "../../containers/ContainerFS"

class CartDaoFS extends ContainerFS {

    constructor() {
        super('cart.json')
    }

    async save(carrito = { productos: [] }) {
        return super.save(carrito)
    }
}

export default CartDaoFS
