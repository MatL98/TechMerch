let productDao
let cartDao


switch (process.env.PERS) {
    case 'json':
        const { default: productDaoFS } = await import('./productsDAOS/ProductosFS')
        const { default: CartDaoFS } = await import('./cartDAOS/CartDaoFS')

        productDao = new productDaoFS()
        cartDao = new CartDaoFS()
        break
    case 'firebase':
        const { default: ProductDaoFirebase } = await import('./productsDAOS/ProductDaoFirebase')
        const { default: CartDaoFirebase } = await import('./cartDAOS/CartDaosFirebase')

        productDao = new ProductDaoFirebase()
        cartDao = new CartDaoFirebase()
        break
    case 'mongo':
        const { default: productDaoMongo } = await import('./productsDAOS/ProductsDaoMongo')
        const { default: cartDaoMongo } = await import('./cartDAOS/CartDaoMongo')

        productDao = new productDaoMongo()
        cartDao = new cartDaoMongo()
        break
}