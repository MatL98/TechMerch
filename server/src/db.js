const mongoose = require("mongoose");
require("dotenv").config();

const connectDb = () => {
  mongoose.connect(process.env.MONGODB_URI, {
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
