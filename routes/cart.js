const express = require("express")
const {Router} = express
const router = new Router()


router.get("/carrito", (req, res)=>{
  res.sendFile("public/index.html", {root: "."}) 
})

module.exports = router