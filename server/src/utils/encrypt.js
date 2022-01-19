const bcrypt = require("bcryptjs");
const encrypt = {};

encrypt.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  return hash;
};

encrypt.comparePassword = async (password, savedPassword) => {
  return await bcrypt.compare(password, savedPassword);
};

module.exports = encrypt;
