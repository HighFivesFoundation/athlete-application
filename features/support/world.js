import { setWorldConstructor, setDefaultTimeout } from "cucumber";
import ApolloClient from "apollo-boost";
import fetch from "node-fetch";

global.fetch = fetch;

console.log(`
    CUCUMBER WORLD 
    ==============
    endpoint: ${process.env.GRAPHQL_ENDPOINT}
    subscriptions: ${process.env.GRAPHQL_SUBSCRIPTIONS_ENDPOINT}
    database: ${process.env.MONGODB_URI}
`);

function CustomWorld() {
  this.client = new ApolloClient({
    uri: process.env.GRAPHQL_ENDPOINT,
    onError({ response, operation }) {
      if (operation.operationName === "IgnoreErrorsQuery") {
        response.errors = null;
      }
    }
  });

  setDefaultTimeout(5 * 1000);
}

setWorldConstructor(CustomWorld);
