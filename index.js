const express = require("express")
const port = process.env.PORT || 8080
const router = require("./routes/products")
const routerCart = require("./routes/cart")
const app = express()


app.use(express.json())
app.use(express.urlencoded({extended: true})) 

app.use("/api", router)
app.use("/api", routerCart)



app.listen(port, ()=>{
  console.log(`Server on port ${port} is running`)
})