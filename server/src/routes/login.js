const express = require("express");
const { Router } = express;
const router = new Router();
const passport = require("passport");

	
router.post("/login", (req, res, next) => {
  passport.authenticate("local-login", (err, user) => {
    if (err) throw err;
    if (!user) {
      res.json("invalid");
    } else {
      req.logIn(user, (err) => {
        console.log(user.mail);
        res.json(user.mail);
      });
    }
  })(req, res, next);
});

router.post("/signUp", (req, res, next) => {
  passport.authenticate("local-signUp", (err, user) => {
    if (err) throw err;
    if (!user) {
      res.json("no");
    } else {
      req.logIn(user, (err) => {
        res.json("ok");
      });
    }
  })(req, res, next);
});

module.exports = router;
