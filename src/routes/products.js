const express = require("express");
const Contenedor = require("../containers/contenedor");
const { Router } = express;
const router = new Router();
const moment = require("moment")
const productos = [];



router.get("/productos", (req, res) => {
  res.send(productos);
}); 
router.get("/productos/:id", (req, res) => {
  let id = req.params.id;
	let prodById = productos.filter(prod => prod.id === id ? (console.log("No existe el producto")) : (console.log("existe el producto")))
	res.send(`El producto con ${id} se encontro ${{ prodById }}`);
});

router.post("/productos", (req, res) => {
  console.log(req.body);
	let datos = new Contenedor("./productos.txt")
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
	datos.save(obj)
  productos.push(obj);
  res.status(201).send(`Producto agregado correctamente`);

});
router.put("/productos/:id", (req, res) => {
  let id = req.params.id;
  let arrNew = productos.filter((x) => x.id === id);
  res.json({
		data: arrNew[0],
  });
  res.status(201).send("producto modificado");
});
router.delete("/productos/:id", (req, res) => {
	let id = req.params.id;
	let arrNew = productos.filter((x) => x.id !== id);
  res.json({
		data: arrNew
	})
  res.send(`producto con el id: ${id} eliminado`);
});

module.exports = router;
