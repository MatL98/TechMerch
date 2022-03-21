const Container = require("../models/daos/UserDaosMongo");
const user = new Container();


const getUser = async (idUser) => {
	const idToParse = idUser
	const id = JSON.parse(idToParse)
	let dataUser = await user.getById(id)
	return dataUser
};

const getUserById = async (req, res)=>{
	let id = req.params.id;
  const dataUser = await user.getById(id);
	res.status(200)
  res.json(dataUser);
}

module.exports = {
	getUser,
	getUserById
}
