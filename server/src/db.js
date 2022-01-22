const mongoose = require("mongoose");
const URI =
  "mongodb+srv://mat:fury8gb@cluster0.fpnkj.mongodb.net/ecommerce?retryWrites=true&w=majority";

const connectDb = () => {
  mongoose.connect(URI, {
    useNewUrlParser: true,
  });
  mongoose.connection.on("open", () => {
    console.log("Base de datos conectada con exito!!");
  });

  mongoose.connection.on("error", () => {
    console.log("Error al conectarse a la base de datos!!");
  });
};

module.exports = connectDb;
