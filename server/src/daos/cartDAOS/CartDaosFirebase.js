import ContainerFirebase from "../../containers/ContainerFirebase"

class CartDaoFirebase extends ContainerFirebase {

    constructor() {
        super('carrito')
    }

    async save(carrito = { productos: [] }) {
        return super.save(carrito)
    }
}

export default CartDaoFirebase
