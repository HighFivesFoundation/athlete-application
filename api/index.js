const express = require("express");
const expressPlayground = require("graphql-playground-middleware-express")
  .default;
const { readFileSync } = require("fs");
const { ApolloServer, PubSub } = require("apollo-server-express");
const { createServer } = require("http");
const path = require("path");

const typeDefs = readFileSync(path.join(__dirname, "schema.graphql"), "UTF-8");

const start = async port => {
  const pubsub = new PubSub();
  pubsub.ee.setMaxListeners(500);

  const context = ({ req, connection }) => ({});

  const server = new ApolloServer({
    typeDefs,
    context,
    introspection: true,
    mocks: true
  });

  const app = express();

  app.use(express.static(path.join(__dirname, "..", "client", "build")));

  server.applyMiddleware({ app });

  app.get(
    "/playground",
    expressPlayground({
      endpoint: "/graphql",
      subscriptionEndpoint: "/graphql"
    })
  );

  const httpServer = createServer(app);
  server.installSubscriptionHandlers(httpServer);
  httpServer.listen({ port }, () => {
    console.log(`GraphQL API running on port ${port}`);
  });
};

start(process.env.PORT || 4000);
