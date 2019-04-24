const { me, createAccount, authorize } = require("./auth-email-password");
const User = require("./User");
const Application = require("./Application");
const DateTime = require("./DateTime");
const { save } = require("./mutation-save");

module.exports = {
  Query: { me },
  Mutation: { createAccount, authorize, save },
  User,
  Application,
  DateTime
};
