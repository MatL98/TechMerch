const { Schema, model } = require("mongoose");

const usersCollection = "users";

const UsersSchema = new Schema({
  mail: { type: String, required: true },
  password: { type: String, required: true },
  username: { type: String, required: true },
  surname: { type: String, required: true },
  direction: { type: String, required: true },
  age: { type: Number, required: true },
  phone: { type: Number, required: true },
  photo: { type: String, required: true },
});

module.exports = model(usersCollection, UsersSchema);
