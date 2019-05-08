import {
  InMemoryCache,
  HttpLink,
  ApolloClient,
  ApolloLink,
  split
} from "apollo-boost";
import { WebSocketLink } from "apollo-link-ws";
import { getMainDefinition } from "apollo-utilities";

const cache = new InMemoryCache();
const httpLink = new HttpLink({ uri: process.env.REACT_APP_GRAPHQL_URI });
const authLink = new ApolloLink((operation, forward) => {
  if (localStorage.getItem("token")) {
    operation.setContext(context => ({
      headers: {
        ...context.headers,
        authorization: localStorage.getItem("token")
      }
    }));
  }

  return forward(operation);
});
const httpAuthLink = authLink.concat(httpLink);

const wsLink = new WebSocketLink({
  uri: process.env.REACT_APP_SUBSCRIPTION_ENDPOINT,
  options: {
    reconnect: true,
    lazy: true
  }
});

const link = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === "OperationDefinition" && operation === "subscription";
  },
  wsLink,
  httpAuthLink
);

export default new ApolloClient({ cache, link });
