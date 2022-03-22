const express = require("express");
const { getUser } = require("../controllers/userController");
const { Router } = express;
const router = new Router();

const { verifyToken } = require("../middleware/authJwt");

router.get("/:id", verifyToken, getUser);

module.exports = router;
