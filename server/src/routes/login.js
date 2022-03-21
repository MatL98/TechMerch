const express = require("express");
const { Router } = express;
const router = new Router();
const { authLogin, authSignUp } = require("../controllers/loginController");

router.post("/login", authLogin);
router.post("/signUp", authSignUp);

module.exports = router;
