let port 
let db


const env = process.env.NODE_ENV

switch (env) {
    case 'development':
        port = 3001
        db = "mongodb://127.0.0.1:27017/ecommerce"
        break;
    case 'production':
        port = 3001
        db = process.env.MONGODB_URI
        break;

    default:
        port = 3001
        db = "mongodb://127.0.0.1:27017/ecommerce"
        break;
}
module.exports = {port, db}