const express = require("express");
const { Router } = express;
const router = new Router();
const moment = require("moment");
const Container = require("../daos/CartDaoMongo");
const cart = new Container();
const nodemailer = require("nodemailer");
const Container1 = require("../daos/userDaosMongo");
const user = new Container1();

router.post("/", async (req, res) => {
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
  async function sendMail(userInfo, infoProducts) {
    const mail = "c6plaeaopf3eec3n@ethereal.email";
    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      auth: {
        user: mail,
        pass: "etNwyEKCAkaB8w2zzz",
      },
    });
    const mailOptions = {
      from: "techmerch",
      to: mail,
      subject: `nuevo pedido de ${buyer[0].mail}-${buyer[0].username}`,
      html: `<h1>${buyer[0].username} ${buyer[0].surname}</h1> 
					<p>Sus pedidos son: ${buyer[0].name} ${buyer[0].price}`,
    };
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        res.status(505).json("hubo un error");
      } else {
        res.status(200).json("todo ok");
      }
    });
  }
  await sendMail(infoUser, cartFront);
  res.json(itemInCart);
});
router.get("/", async (req, res) => {
  const getCart = await cart.getAll();
  res.json(getCart);
});
router.delete("/:id", async (req, res) => {
  let id = req.params.id;
  const getId = await cart.getById(id);
  res.json(getId);
});
router.put("/:id", async (req, res) => {
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
  const updated = await cart.update(idCart);
  res.json(updated);
});
module.exports = router;
