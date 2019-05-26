const { me, createAccount, authorize } = require("./auth-email-password");
const DateTime = require("./DateTime");
const User = require("./User");
const {
  myApplicationStep,
  myFundingCategory,
  Application
} = require("./Application");
const saveMutations = require("./saveMutations");

module.exports = {
  Query: { me, myApplicationStep, myFundingCategory },
  Mutation: { createAccount, authorize, ...saveMutations },
  User,
  DateTime,
  ...Application
};
