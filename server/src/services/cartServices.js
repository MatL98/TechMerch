const ContainerDao = require("../models/daos/factoryDaos");
const cart = ContainerDao.cart;

const getAllCart = async () => {
  try {
    const response = await cart.getAll();
    return response;
  } catch (error) {
    throw Error(error);
  }
};
const saveCart = async (infoCart) => {
  try {
    const response = await cart.save(infoCart)
    return response;
  } catch (error) {
    throw Error(error);
  }
};
const dltCart = async () => {
  try {
    const response = await cart.delete()
    return response;
  } catch (error) {
    throw Error(error);
  }
};
const updtCart = async (id, cartUpdate) => {
  try {
    const response = await cart.update(id, cartUpdate)
    return response;
  } catch (error) {
    throw Error(error);
  }
};




module.exports = {getAllCart, saveCart, dltCart, updtCart}
