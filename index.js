const express = require("express")
const http = require("http")
const port = process.env.PORT || 8080
//const server = http.createServer(app)
const router = require("./routes/products")
const router2 = require("./routes/cart")
const app = express()
 
app.use("/api", router)
//app.use("/api", router2)

//app.use(express.json())
//app.use(express.urlencoded({extended: true}))


app.listen(port, ()=>{
    console.log(`Server on port ${port} is running`)
})