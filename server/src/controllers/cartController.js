const Container = require("../models/daos/CartDaoMongo");
const cart = new Container();
const { getUser } = require("./userController");
const { sendMessageToUser } = require("../utils/mailer");

const moment = require("moment");

const setCart = async (req, res) => {
  const buyer = await getUser(req.body.id);

  let cartFront = req.body.cart;
  let date = moment().format("MMMM Do YYYY, h:mm:ss a");

  const products = [
    {
      products: cartFront,
      timestamp: date,
      buyer,
    },
  ];
  const itemInCart = await cart.save(products);

  sendMessageToUser(buyer, cartFront);

  res.status(200);
  res.json(itemInCart);
};

const getCart = async (req, res) => {
  const getCart = await cart.getAll();
  res.status(200);
  res.json(getCart);
};

const deleteCart = async (req, res) => {
  const deleteCart = await cart.deleteAll();
  res.status(200);
  res.json(deleteCart);
};

const updateCart = async (req, res) => {
  let idCart = req.params.id;
  let { name, description, code, photo, price, stock } = req.body;
  let date = moment().format("MMMM Do YYYY, h:mm:ss a");
  const productInCart = {
    id,
    timestamp: date,
    producto: {
      name,
      description,
      code,
      photo,
      price,
      stock,
    },
  };
  const updated = await cart.update(idCart, productInCart);
  res.json(updated);
};

module.exports = { setCart, getCart, deleteCart, updateCart };
