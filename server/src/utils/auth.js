const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const Container = require("../daos/userDao/userDaosMongo")
const user = new Container();
const encrypt = require("./encrypt");


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

      const result = await user.getAll();
      const usr = result.filter((us)=> us.mail === mail)
      if (usr) {
        const user = usr[0];
        console.log(user);
        const pass = await encrypt.comparePassword(password, user.password);
        if (pass) {
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
      const result = await user.save(newUser);
      newUser.id = result[0];
      return done(null, newUser);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const usr = await bank.getUser(id);
  done(null, usr);
});
