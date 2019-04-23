const { me, createAccount, authorize } = require("./auth-email-password");
const { save } = require("./mutation-save");

module.exports = {
  Query: { me },
  Mutation: { createAccount, authorize, save }
};
