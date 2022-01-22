const express = require("express")
const {Router} = express
const router = new Router()
const moment = require("moment")
const Container = require("../daos/cartDAOS/CartDaoMongo")
const cart = new Container()


router.post("/", async (req, res)=>{
	let cartFront = req.body
	let date = moment().format('MMMM Do YYYY, h:mm:ss a');
	
	const products  = {
		products: cartFront
	}

	const itemInCart = await cart.save(products)
	res.json(itemInCart)
})
router.delete("/:id", async (req, res)=>{
	let id = req.params.id
	const getId = await cart.getById(id)
	res.json(getId) 
})
router.get("/", async (req, res)=>{
	const getCart = await cart.getAll()
	res.json(getCart)
})
router.put("/:id", async(req, res)=>{
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