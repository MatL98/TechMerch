const express = require("express");
const { getUserById } = require("../controllers/userController");
const { Router } = express;
const router = new Router();

const { verifyToken } = require("../middleware/authJwt");

router.get("/:id", verifyToken, getUserById);

module.exports = router;
