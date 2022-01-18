import ContainerFS from "../../containers/ContainerFS"

class ProductosDaoFS extends ContainerFS {

    constructor() {
        super('product.json')
    }
}

export default ProductosDaoFS