
import ContainerFirebase from "../../containers/ContainerFirebase"

class ProductDaoFirebase extends ContainerFirebase{

    constructor() {
        super('productos')
    }
}

export default ProductDaoFirebase
