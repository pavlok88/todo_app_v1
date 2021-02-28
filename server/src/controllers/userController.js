const jwt = require("jsonwebtoken");
const CONST = require("../config/const");
const db = require("../db/models/index");
const bcrypt = require("bcrypt");
const userQueries = require("../db/queries/userQueries");

module.exports.login = async (req, res, next) => {
  try {
    const user = await userQueries.findUser({ email: req.body.email });
    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Wrong password" });

    const accessToken = jwt.sign(
      {
        userId: user.id,
        login: user.login,
        email: user.email,
        role: user.role,
      },
      CONST.jwt.secret,
      { expiresIn: CONST.jwt.time }
    );
    delete user.password;
    res.send({ token: accessToken, userData: user });
  } catch (err) {
    next(err);
  }
};

module.exports.registration = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    //checking for a registered user
    const candidate = await db.User.findOne({ email });
    if (candidate)
      return res.status(400).json({ message: "This user already register" });

    const hashedPassword = await bcrypt.hash(password, CONST.bcrypt.salt);
    const newUser = await userQueries.createUser({
      email,
      password: hashedPassword,
    });

    const accessToken = jwt.sign(
      {
        userId: newUser.id,
        login: newUser.login,
        email: newUser.email,
        role: newUser.role,
      },
      CONST.jwt.secret,
      { expiresIn: CONST.jwt.time }
    );
    delete newUser.password;
    res.send({ token: accessToken, userData: newUser });
  } catch (err) {
    if (err.name === "SequelizeUniqueConstraintError") {
      next(new NotUniqueEmail());
    } else {
      next(err);
    }
  }
};


module.exports.updateUser = async (req, res, next) => {
  try {
    if (req.file) {
      req.body.avatar = req.file.filename;
    }
    const updatedUser = await userQueries.updateUser(
      req.body,
      req.tokenData.userId
    );
    res.send({
      firstName: updatedUser.firstName,
      lastName: updatedUser.lastName,
      displayName: updatedUser.displayName,
      avatar: updatedUser.avatar,
      email: updatedUser.email,
      balance: updatedUser.balance,
      role: updatedUser.role,
      id: updatedUser.id,
    });
  } catch (err) {
    next(err);
  }
};
