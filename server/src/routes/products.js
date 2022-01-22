const express = require("express");
const { Router } = express;
const router = new Router();
const moment = require("moment")
const Container = require("../daos/productsDAOS/ProductsDaoMongo")
const products = new Container()

router.get("/", async (req, res) => {
  const getProd = await products.getAll()
  res.json(getProd);
}); 
router.get("/:id", async (req, res) => {
  let id = req.params.id;
	const getId = await products.getById(id)
	res.send(`El producto con ${id} se encontro ${{ prodById }}`);
});

router.post("/", async (req, res) => {
  let { name, description, code, photo, price, stock} = req.body;
	let date = moment().format('MMMM Do YYYY, h:mm:ss a');
	const obj = {
		timestamp: date,
    name,
    description,
    code, 
    photo, 
    price,
    stock
	};
	const save = await products.save(obj)
  
  res.status(201).send(save);

});
router.put("/:id", async (req, res) => {
  let id = req.params.id;
  const updateById = await products.getById(id)
  res.status(201).send(updateById);
});
router.delete("/:id", async (req, res) => {
	let id = req.params.id;
	const deleted = await products.deleteById(id)
  res.send(deleted);
});

module.exports = router;
