const ContainerDao = require("../models/daos/factoryDaos");
const products = ContainerDao.products;

const getAllProducts = async () => {
  try {
    const response = await products.getAll();
    return response;
  } catch (error) {
    throw Error(error);
  }
};
const getProduct = async (id) => {
  try {
    const response = await products.getById(id)
    return response;
  } catch (error) {
    throw Error(error);
  }
};
const saveProduct = async (product) => {
  try {
    const response = await products.save(product)
    return response;
  } catch (error) {
    throw Error(error);
  }
};
const updtProduct = async (id, newUpdate) => {
  try {
    const response = await products.update(id, newUpdate);
    return response;
  } catch (error) {
    throw Error(error);
  }
};
const deleteProduct = async (id) => {
  try {
    const response = await products.deleteById(id)
    return response;
  } catch (error) {
    throw Error(error);
  }
};

module.exports = {
	getAllProducts,
	getProduct,
	saveProduct,
	updtProduct,
	deleteProduct
}