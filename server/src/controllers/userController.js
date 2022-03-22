const { getUserById } = require("../services/userService");


const getUser = async (req, res) => {
  let id = req.params.id;
  const dataUser = await getUserById(id);
  res.status(200).json(dataUser);
};

module.exports = {
  getUser
};
