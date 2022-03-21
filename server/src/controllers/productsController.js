const Container = require("../models/daos/ProductsDaoMongo");
const products = new Container();

const getProducts = async (req, res) => {
  const getProd = await products.getAll();
  res.status(200).json(getProd);
};

const getProductById = async (req, res) => {
  let id = req.params.id;
  const getProduct = await products.getById(id);
  res.send(200).json({ product: getProduct });
};

const setProducts = async (req, res) => {
  let { name, description, code, photo, price, stock } = req.body;
  const obj = {
    name,
    description,
    code,
    photo,
    price,
    stock,
  };
  const save = await products.save(obj);

  res.status(201).send(save);
};

const updateProduct = async (req, res) => {
  let id = req.params.id;
  const newUpdate = req.body;
  const updateProduct = await products.update(id, newUpdate);
  res.status(201).send(updateProduct);
};

const deleteProducts = async (req, res) => {
  let id = req.params.id;
  const deleted = await products.deleteById(id);
  res.send(deleted);
};

module.exports = {
  getProducts,
  getProductById,
  setProducts,
  updateProduct,
  deleteProducts,
};
