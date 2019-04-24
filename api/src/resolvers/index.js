const { me, createAccount, authorize } = require("./auth-email-password");
const DateTime = require("./DateTime");
const User = require("./User");
const { save } = require("./mutation-save");

module.exports = {
  Query: { me },
  Mutation: { createAccount, authorize, save },
  User,
  DateTime
};
