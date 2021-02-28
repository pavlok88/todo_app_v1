const db = require("../models/index");
const bcrypt = require("bcrypt");

/* module.exports.updateUser = async (data, userId, transaction) => {
  const [updatedCount, [updatedUser]] = await bd.Users.update(data,
    { where: { id: userId }, returning: true, transaction });
  if (updatedCount !== 1) {
    throw new ServerError('cannot update user');
  }
  return updatedUser.dataValues;
}; */

module.exports.findUser = async (parameterObj) => {
  const user = await db.Users.findOne({ where: parameterObj });
  if (!user) {
    throw new Error("user with this data didn`t exist" );
  } else {
    return user.get({ plain: true });
  }
};

module.exports.createUser = async (data) => {
  const newUser = await db.Users.create(data);
  if ( !newUser) {
    throw new Error('server error on user creation');
  } else {
    return newUser.get({ plain: true });
  }
};

