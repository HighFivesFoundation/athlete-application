const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const me = (_, args, { currentUser }) => currentUser;

const authorize = async (_, { email, password }, { applicants }) => {
  let user = await applicants.findOne({ email });
  if (!user) {
    throw new Error(`Account for "${email}" does not exist.`);
  }
  if (!bcrypt.compareSync(password, user.password)) {
    throw new Error("Incorrect password.");
  }
  return {
    token: jwt.sign({ email }, process.env.AUTH_SECRET),
    user
  };
};

const createAccount = async (
  _,
  { newApplicant: { email, password, first, last } },
  { applicants }
) => {
  let existingUser = await applicants.findOne({ email });
  if (existingUser) {
    throw new Error(`an account for "${email}" already exists.`);
  }

  let hash = bcrypt.hashSync(password, 10);
  let user = {
    name: { first, last },
    email,
    password: hash,
    dateCreated: new Date().toISOString()
  };
  await applicants.insertOne(user);

  const token = jwt.sign({ email }, process.env.AUTH_SECRET);

  return { token, user };
};

module.exports = {
  Query: { me },
  Mutation: { createAccount, authorize }
};
