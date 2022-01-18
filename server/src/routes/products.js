const express = require("express");
const { Router } = express;
const router = new Router();
const moment = require("moment")
import {
    productDao as productsApi
} from '../daos/index'


router.get("/productos", async (req, res) => {
  const getProd = await productsApi.getAll()
  res.send(getProd);
}); 
router.get("/productos/:id", async (req, res) => {
  let id = req.params.id;
	const getId = await productsApi.getById(id)
	res.send(`El producto con ${id} se encontro ${{ prodById }}`);
});

router.post("/productos", async (req, res) => {
  let {id, name, description, code, photo, price, stock} = req.body;
	let date = moment().format('MMMM Do YYYY, h:mm:ss a');
	const obj = {
		id,
		timestamp: date,
    name,
    description,
    code, 
    photo, 
    price,
    stock
	};
	const save = await productsApi.save(obj)
  
  res.status(201).send(save);

});
router.put("/productos/:id", async (req, res) => {
  let id = req.params.id;
  const updateById = await productsApi.getById(id)
  res.status(201).send(updateById);
});
router.delete("/productos/:id", async (req, res) => {
	let id = req.params.id;
	const deleted = await productsApi.deleteById(id)
  res.send(deleted);
});

module.exports = router;
