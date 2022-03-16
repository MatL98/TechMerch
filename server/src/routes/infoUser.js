const express = require("express");
const { Router } = express;
const router = new Router();

const Container = require("../controllers/daos/userDaosMongo");
const user = new Container();

const {verifyToken} = require("../middleware/authJwt")

router.get("/:id", async (req, res)=>{
    let id = req.params.id
    console.log(id);
    const dataUser = await user.getById(id)
    console.log(dataUser);
    res.json(dataUser)
})

module.exports = router