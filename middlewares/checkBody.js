const { httpError } = require("../helpers");

const checkBody = ({ body }, res, next) => {
  if (Object.keys(body).length === 0) {
    throw httpError(400, "missing fields");
  }
  next();
};

module.exports = checkBody;
