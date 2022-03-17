const mongoose = require("mongoose");
require("dotenv").config();

const connectDb = async () => {
  try {
    mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
    });
    mongoose.connection.on("open", () => {
      console.log("Base de datos conectada con exito!!");
    });
  } catch (error) {
    mongoose.connection.on("error", (error) => {
      console.log("Error al conectarse a la base de datos!!");
    });
  }
};

const disconnectDb = async () => {
  try {
    return await mongoose.disconnect();
  } catch (error) {
    console.log("Error al desconectarse de datos");
  }
};

module.exports = { connectDb, disconnectDb };
