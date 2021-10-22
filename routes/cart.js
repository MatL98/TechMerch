const express = require("express")
const {Router} = express
const router = new Router()
const moment = require("moment")

const cart = []
let admin = true
router.post("/carrito", (req, res)=>{
	let id = Math.round(Math.random() * 10)
	const {carrito} = req.body
	const newCart = {
		carrito,
		id
	}
	cart.push(newCart)
  res.send(cart)
})
router.delete("/carrito/:id", (req, res)=>{
	let id = req.params.id
	let arrFiltered = cart.filter(arr => arr.carrito.id === id)
	cart.push(arrFiltered)
	res.send(arrFiltered) 
})

router.get("/carritos",(req, res)=>{
	res.send(cart)
})
router.post("/carritos/:id/productos",(req, res)=>{
	let idCart = req.params.id
	let {name, description, code, photo, price, stock} = req.body
	let date = moment().format('MMMM Do YYYY, h:mm:ss a');
	const productInCart ={
		id,
		timestamp: date,
		producto:{
			name,
			description,
			code,
			photo,
			price,
			stock
		}

	}
	cart.map(c => c.carrito.push(productInCart))
	res.send()
})
module.exports = router