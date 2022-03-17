const express = require("express");
const { Router } = express;
const router = new Router();
const moment = require("moment");
const Container = require("../controllers/daos/CartDaoMongo");
const cart = new Container();
const Container1 = require("../controllers/daos/userDaosMongo");
const user = new Container1();
require("dotenv").config();
const {verifyToken} = require("../middleware/authJwt")
const {sendMessageToUser} = require("../utils/mailer")



router.post("/",verifyToken, async (req, res) => {
  const mailUser = req.body.mail;
  const infoUser = await user.getAll();
  const buyer = infoUser.filter((usr) => {
    return `"${usr.mail}"` === mailUser;
  });
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

  await sendMessageToUser(buyer, cartFront);

  res.json(itemInCart);
});
router.get("/",verifyToken ,async (req, res) => {
  const getCart = await cart.getAll();
  res.json(getCart);
});
router.delete("/:id",verifyToken ,async (req, res) => {
  let id = req.params.id;
  const getId = await cart.getById(id);
  res.json(getId);
});
router.put("/:id",verifyToken ,async (req, res) => {
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
  const updated = await cart.update(idCart, productInCart );
  res.json(updated);
});
module.exports = router;
