const { MongoClient } = require("mongodb");
const { PubSub } = require("apollo-server-express");
const jwt = require("jsonwebtoken");

const pubsub = new PubSub();
pubsub.ee.setMaxListeners(500);

const createContext = async () => {
  if (!process.env.MONGODB_URI) {
    throw new Error(
      `MONGODB_URI undefined. Please provide this environment variable`
    );
  }

  if (!process.env.AUTH_SECRET) {
    throw new Error(
      `AUTH_SECRET undefined. Please provide this environment variable`
    );
  }

  const client = await MongoClient.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true
  });
  const db = client.db();

  return async ({ req }) => {
    let currentUser = null;
    const applicants = db.collection("applicants");
    if (req.headers.authorization) {
      const token = req.headers.authorization.replace(/(B|b)earer/, "").trim();
      const { email } = jwt.verify(token, process.env.AUTH_SECRET);
      currentUser = await applicants.findOne({ email });
    }
    return {
      db,
      applicants,
      currentUser
    };
  };
};

module.exports = { createContext };
