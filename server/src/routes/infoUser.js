const express = require("express");
const { Router } = express;
const router = new Router();

const Container = require("../models/daos/userDaosMongo");
const user = new Container();

const { verifyToken } = require("../middleware/authJwt");

router.get("/:id", verifyToken, async (req, res) => {
  let id = req.params.id;
  const dataUser = await user.getById(id);
  res.json(dataUser);
});

module.exports = router;
