const  ContainerMongo = require("../../containers/ContainerMongo");

class UserDaoMongo extends ContainerMongo {

    constructor() {
        super('users', {
        mail: { type: String, required: true },
        password: { type: String, required: true },
        username: { type: String, required: true },
        surname: {type: String, required: true},
        direction: {type: String, required: true},
        age: { type: Number, required: true },
        phone: {type: Number, required: true},
        photo: { type: String, required: true }
        })
    }
}

module.exports = UserDaoMongo
