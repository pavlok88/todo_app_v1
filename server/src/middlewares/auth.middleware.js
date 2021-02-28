const jwt = require("jsonwebtoken");
const CONST = require('../config/const');

module.exports.checkToken = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1]; // "Bearer TOKEN"
    if (!token) {
      return res.status(401).json({ message: "No authorization" });
    }
    req.tokenData = jwt.verify(accessToken, CONST.jwt.secret);
    next();
  } catch (err) {
    res.status(401).json({ message: "No authorization" });
  }
};
