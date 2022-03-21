const express = require("express");
const {
  getProducts,
  getProductById,
  setProducts,
  deleteProducts,
} = require("../controllers/productsController");
const { Router } = express;
const router = new Router();
const { verifyToken } = require("../middleware/authJwt");

router.get("/", verifyToken, getProducts);
router.get("/:id", verifyToken, getProductById);
router.post("/", setProducts, setProducts);
router.put("/:id", verifyToken, getProductById);
router.delete("/:id", deleteProducts);

module.exports = router;
