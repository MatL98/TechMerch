const express = require("express")
const app = require("app")
const http = require("http")
const port = process.env.PORT || 8080
const server = http.createServer(app)
const router = require("./routes/index")
const router2 = require("./routes/cart")


app.use("/api", router)
app.use("/api", router2)

server.listen(port, ()=>{
    console.log(`Server on port ${port} is running`)
})