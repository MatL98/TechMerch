let productsDao
let cartDao
let usersDao
let chatsDao

let contenedor = 'mongoDb'
switch (contenedor) {
    case 'local':
        //const ProductsDaoLocal = require("")
        //const CartDaoLocal = require("")

        productsDao = new ProductsDaoLocal()
        cartDao = new CartDaoLocal()
        break
    case 'mongoDb':
        const ProductsDaoMongoDb = require("./ProductsDaoMongo")
        const CartDaoMongoDb = require("./CartDaoMongo")
        const UsersDaoMongoDb = require ("./UserDaosMongo")
        //const ChatsDaoMongoDb = require ("")

        productsDao = new ProductsDaoMongoDb();
        cartDao = new CartDaoMongoDb();
        usersDao = new UsersDaoMongoDb();
        //chatsDao = new ChatsDaoMongoDb();
        break
}

exports.cart = cartDao;
exports.products = productsDao;
exports.users = usersDao;
//exports.chats = chatsDao;