const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const jwt = require("jsonwebtoken");
const encrypt = require("./encrypt");
const { getAllUser, getUserById, saveUser } = require("../services/userService");
require("dotenv").config();


passport.use(
  "local-login",
  new LocalStrategy(
    {
      usernameField: "username",
      passwordField: "password",
      passReqToCallback: true,
    },
    async (req, username, password, done) => {
      const { mail } = req.body;
      const result = await getAllUser();
      const usr = result.filter((us)=> us.mail === mail)
      if (usr) {
        const user = usr[0];
        const pass = await encrypt.comparePassword(password, user.password);
        if (pass) {
          let token = jwt.sign({ user }, process.env.SECRET, {
            expiresIn: "1h",
          });
          user.token = token;
          done(null, user);
        } else {
          done(null, false);
        }
      } else {
        return done(null, false);
      }
    }
  )
);

passport.use(
  "local-signUp",
  new LocalStrategy(
    {
      usernameField: "username",
      passwordField: "password",
      passReqToCallback: true,
    },
    async (req, username, password, done) => {
      const { mail, surname, direction, age, phone, photo } = req.body;
      const newUser = {
        mail,
        password,
        username,
        surname,
        direction,
        age,
        phone,
        photo
      };
      newUser.password = await encrypt.encryptPassword(password);
      const result = await saveUser(newUser)
      return done(null, result);
    }
  )
);

passport.serializeUser((user, done) => {
  const id = user._id.toString()
  done(null, id);
});

passport.deserializeUser(async (id, done) => {
  const usr = await getUserById(id);
  console.log(usr);
  if (usr) {
    done(null, usr);
  }else{
    console.log(error);
  }
});
