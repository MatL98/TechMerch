const express = require("express")
const router = require("../src/routes/products")
const routerCart = require("../src/routes/cart")

const app = express()



app.use(express.json())
app.use(express.urlencoded({extended: true})) 

app.use("/api", router)
app.use("/api", routerCart)

export default app