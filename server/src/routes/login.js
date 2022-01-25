const express = require("express");
const { Router } = express;
const router = new Router();
const passport = require("passport");
const nodemailer = require("nodemailer");

router.post("/login", (req, res, next) => {
  passport.authenticate("local-login", (err, user) => {
    if (err) throw err;
    if (!user) {
      res.json("invalid");
    } else {
      req.logIn(user, (err) => {
        res.json(user.mail);
      });
    }
  })(req, res, next);
});
router.post("/signUp", (req, res, next) => {
  const usr = req.body;
  const mail = "c6plaeaopf3eec3n@ethereal.email";
  passport.authenticate("local-signUp", (err, user) => {
    if (err) throw err;
    if (!user) {
      res.json("no");
    } else {
      req.logIn(user, (err) => {
        res.json(user);
      });
    }
  })(req, res, next);
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
    subject: "nuevo registro en TechMerch",
    html: `<h1>Bienvenido ${usr.username} ${usr.surname}</h1> <p>Direccion: ${usr.direction}</p> 
        <p>Edad: ${usr.age}</p> <p>phone: ${usr.phone}</p><p>Foto: ${usr.img}</p>`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.status(505).json("hubo un error");
    } else {
      res.status(200).json("todo ok");
    }
  });
});

module.exports = router;
