const { getAllProducts, getProduct, saveProduct, updtProduct, deleteProduct } = require("../services/productService")

const getProducts = async (req, res) => {
  const getProds = await getAllProducts()
  res.status(200).json(getProds);
};

const getProductById = async (req, res) => {
  let id = req.params.id;
  const dataProduct = await getProduct(id)
  res.send(200).json({ product: dataProduct });
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
  const save = await saveProduct(obj)
  res.status(201).send(save);
};

const updateProduct = async (req, res) => {
  let id = req.params.id;
  const newUpdate = req.body;
  const updateProduct = await updtProduct(id, newUpdate)
  res.status(201).send(updateProduct);
};

const deleteProducts = async (req, res) => {
  let id = req.params.id;
  const deleted = await deleteProduct(id)
  res.status(200).send(deleted);
};

module.exports = {
  getProducts,
  getProductById,
  setProducts,
  updateProduct,
  deleteProducts,
};
