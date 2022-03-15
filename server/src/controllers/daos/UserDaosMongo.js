const  ContainerMongo = require("../containers/ContainerMongo");

class UserDaoMongo extends ContainerMongo {

    constructor() {
        super('users')
    }
}

module.exports = UserDaoMongo
