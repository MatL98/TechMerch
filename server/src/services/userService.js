const ContainerDaos = require("../models/daos/factoryDaos");

const users = ContainerDaos.users;

const getAllUser = async () => {
  try {
    const response = await users.getAll();
    return response;
  } catch (error) {
    throw Error(error);
  }
}; 
const getUserById = async (id) => {
  console.log(id);
  try {
    const response = await users.getById(id);
		console.log(response);
    return response;
  } catch (error) {
    throw Error(error);
  }
};
const saveUser = async (user) => {
  try {
    const response = await users.save(user)
    return response;
  } catch (error) {
    throw Error(error);
  }
}; 
module.exports = {
  getAllUser,
  getUserById,
  saveUser
};