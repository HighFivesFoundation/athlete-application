const express = require("express");
const expressPlayground = require("graphql-playground-middleware-express")
  .default;
const { readFileSync } = require("fs");
const { ApolloServer } = require("apollo-server-express");
const { createServer } = require("http");
const { createContext } = require("./context");
const resolvers = require("./resolvers");
const path = require("path");

const typeDefs = readFileSync(path.join(__dirname, "schema.graphql"), "UTF-8");

const start = async port => {
  const context = await createContext();
  const server = new ApolloServer({
    typeDefs,
    context,
    resolvers,
    introspection: true
    // mocks: true,
    // mockEntireSchema: false
  });

  const app = express();
  app.use(express.static(path.join(__dirname, "..", "..", "client", "build")));
  app.get(
    "/playground",
    expressPlayground({
      endpoint: "/graphql",
      subscriptionEndpoint: "/graphql"
    })
  );

  server.applyMiddleware({ app });
  const httpServer = createServer(app);
  server.installSubscriptionHandlers(httpServer);

  httpServer.listen({ port }, () => {
    console.log(`GraphQL API running on port ${port}`);
  });
};

start(process.env.PORT || 4000);
