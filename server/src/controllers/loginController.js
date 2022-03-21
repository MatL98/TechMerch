const passport = require("passport");
const nodemailer = require("nodemailer");
const authLogin = (req, res, next) => {
  passport.authenticate("local-login", (err, user) => {
    if (err) throw err;
    if (!user) {
      res.json("invalid");
    } else {
      req.logIn(user, (err) => {
        res.json({ dataUser: user.mail, token: user.token, idUser: user._id });
      });
    }
  })(req, res, next);
};

const authSignUp = (req, res, next) => {
  const usr = req.body;
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
      user: process.env.NODEMAILER_USER,
      pass: process.env.NODEMAILER_PASS,
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
};

module.exports = { authLogin, authSignUp };
