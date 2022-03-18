const  ContainerMongo = require("../../controllers/containers/ContainerMongo");
const {usersCollection, UsersSchema} = require("../UserSchema")

class UserDaoMongo extends ContainerMongo {

    constructor() {
        super(usersCollection, UsersSchema)
    }
}

module.exports = UserDaoMongo
