const { getUserById } = require("../services/userService");
const { sendMessageToUser } = require("../utils/mailer");
const { getAllCart, saveCart, dltCart, updtCart } = require("../services/cartServices");


const moment = require("moment");

const setCart = async (req, res) => {
  const buyer = await getUserById(req.body.id)

  let cartFront = req.body.cart;
  let date = moment().format("MMMM Do YYYY, h:mm:ss a");

  const products = [
    {
      products: cartFront,
      timestamp: date,
      buyer,
    },
  ];
  const itemInCart = await saveCart(products)

  sendMessageToUser(buyer, cartFront);

  res.status(200).json(itemInCart);
};

const getCart = async (req, res) => {
  const getCart = await getAllCart()
  res.status(200).json(getCart);
};

const deleteCart = async (req, res) => {
  const deleteCart = await dltCart()
  res.status(200).json(deleteCart);
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
  const updated = await updtCart(idCart, productInCart)
  res.status(200).json(updated);
};

module.exports = { setCart, getCart, deleteCart, updateCart };
