const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const Container = require("../daos/UserDaosMongo")
const user = new Container;
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
      console.log(result);
      newUser.id = result;
      return done(null, newUser);
    }
  )
);

passport.serializeUser((user, done) => {
  const id = user._id
  console.log(id);
  done(null, id);
});

passport.deserializeUser(async (id, done) => {
  const user = await bank.getUser(id);
  if (user) {
    done(null, user);
  }else{
    console.log(error);
  }
});
