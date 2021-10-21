const express = require("express")
const {Router} = express
const router = new Router()

const productos = []

router.get("/productos", async (req, res) => {
  let datos = new Contenedor("./productos.txt");
  let products = await datos.getAll()
  res.send(products)
  productos.push(products)

}); 
router.get("/productos/:id", async (req, res) => {
  let id = req.params.id;
  let datos = new Contenedor("./productos.txt");
  let productoById = await datos.getById(id);
  res.send(`El producto con ${id} se encontro ${{res: productoById}}`);
});

router.post("/", (req, res) => {
  let datos = new Contenedor("./productos.txt");
  console.log(req.body)
    let {name, price, thumbnail} = req.body

    let obj = { 
        name,
        price,
        thumbnail
    }

    datos.save(obj)
    productos.push(obj)
  
  res.status(201).send("producto creado");
});
router.put("/productos/:id", (req, res) => {
  let id = req.params.id;
  let arrNew =  productos.filter( (x) => x.id === id)
    res.json({
        data : arrNew[0]
    })
  res.status(201).send("producto modificado");
});
router.delete("/productos/:id", (req, res) => {
  let id = req.params.id;
  let datos = new Contenedor("./productos.txt");
  
  datos.deleteById(id)
  res.send(`producto con el id: ${id} eliminado`)
});

module.exports = router