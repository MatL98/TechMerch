/* const Container = require("../models/daos/UserDaosMongo");
const user = new Container(); */

const { getUserById } = require("../services/userService");


/* const getUser = async (idUser) => {
	const idToParse = idUser
	const id = JSON.parse(idToParse)
	let dataUser = await user.getById(id)
	return dataUser
}; */

const getUser = async (req, res)=>{
	let id = req.params.id;
  const dataUser = await getUserById(id)
	res.status(200).json(dataUser);
}

module.exports = {
	getUser,
	//getUserById
}
