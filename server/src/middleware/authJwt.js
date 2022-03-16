const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyToken = (req, res, next) => {
	let bearerToken = req.get('authorization')
  if (!bearerToken) {
    res.status(504).json({ msg: "denied" });
  } else {
    let token = bearerToken.split(" ")[1];

    jwt.verify(token, process.env.SECRET, (err, user) => {
      if (err) {
        res.status(504).json("error with token");
				console.log("error");
      } else {
        next();
      }
    })
  }
};

module.exports = {verifyToken}
