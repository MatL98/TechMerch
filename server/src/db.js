const mongoose = require("mongoose")
const  URI = "mongodb+srv://mat:fury8gb@cluster0.fpnkj.mongodb.net/ecommerce?retryWrites=true&w=majority"

const connectDb = async ()=>{
    await mongoose.connect(URI,{
        useNewUrlParser: true
    })
    console.log("db connected");
}

module.exports = connectDb