const express = require("express")
const {Router} = express
const router = new Router()
const moment = require("moment")
const cart = require("../daos/cartDAOS/CartDaoMongo")


router.post("/carrito", async (req, res)=>{
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
	const cart = await cart.save(productInCart)
	res.json(cart)
})
router.delete("/carrito/:id", async (req, res)=>{
	let id = req.params.id
	const getId = await cart.getById(id)
	res.json(getId) 
})

router.get("/carritos", async (req, res)=>{
	const get = await cart.getAll()
	res.json(get)
})
router.put("/carritos/:id/productos", async(req, res)=>{
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
	const updated = await cart.update(idCart)
	res.json(updated)
})
module.exports = router