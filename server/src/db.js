const mongoose = require("mongoose");
require("dotenv").config();
const envConfig = require("./utils/config")


const connectDb = async () => {
  const connection = envConfig.db
  try {
    mongoose.connect(connection, {
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
