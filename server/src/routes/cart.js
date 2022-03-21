const express = require("express");
const { Router } = express;
const router = new Router();
const {
  setCart,
  getCart,
  deleteCart,
  updateCart,
} = require("../controllers/cartController");

require("dotenv").config();
const { verifyToken } = require("../middleware/authJwt");

router.post("/", verifyToken, setCart);
router.get("/", verifyToken, getCart);
router.delete("/", verifyToken, deleteCart);
router.put("/:id", verifyToken, updateCart);
module.exports = router;
