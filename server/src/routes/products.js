const express = require("express");
const { Router } = express;
const router = new Router();
const Container = require("../controllers/daos/ProductsDaoMongo");
const products = new Container;

router.get("/", async (req, res) => {
  const getProd = await products.getAll();
  res.json(getProd);
});
router.get("/:id", async (req, res) => {
  let id = req.params.id;
  const getId = await products.getById(id);
  res.send(`El producto con ${id} se encontro ${{ getId }}`);
});

router.post("/", async (req, res) => {
  let { name, description, code, photo, price, stock } = req.body;
  const obj = {
    name,
    description,
    code,
    photo,
    price,
    stock,
  };
  const save = await products.save(obj);

  res.status(201).send(save);
});
router.put("/:id", async (req, res) => {
  let id = req.params.id;
  const newUpdate = req.body
  const updateProduct = await products.update(id, newUpdate)
  res.status(201).send(updateProduct);
});
router.delete("/:id", async (req, res) => {
  let id = req.params.id;
  const deleted = await products.deleteById(id);
  res.send(deleted);
});

module.exports = router;
