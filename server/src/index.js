const express = require("express");
const routerProducts = require("./routes/products");
const routerCart = require("./routes/cart");
const routerLogin = require("./routes/login");
const routerUser = require("./routes/infoUser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const cors = require("cors");
const passport = require("passport");
const db = require("./db")

const app = express();
require("dotenv").config()
require("./utils/auth")

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser(process.env.SECRET));
app.use(
  session({
    secret: process.env.SECRET,
    resave: true,
    saveUninitialized: true,
    cookie:{maxAge: 100000}
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(cors());

app.use("/auth", routerLogin);
app.use("/api/products", routerProducts);
app.use("/api/cart", routerCart);
app.use("/api/profile", routerUser);


//DB Connection
db()

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`Server on port ${PORT} is running`);
});

