const { Contact, joiSchema, favoriteJoiSchema } = require("./contact");
const { User, registerSchema, loginSchema, verifyEmailSchema } = require("./user");

module.exports = {
  Contact,
  joiSchema,
  favoriteJoiSchema,
  User,
  registerSchema,
  loginSchema,
  verifyEmailSchema,
};
