import React from "react";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { setContext } from "apollo-link-context";
import { createHttpLink } from "apollo-link-http";
import { ApolloProvider } from "@apollo/react-hooks";
import { IntrospectionFragmentMatcher } from "apollo-cache-inmemory";
import introspectionQueryResultData from "./introspection.json";

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData
});
const cache = new InMemoryCache({ fragmentMatcher });

const httpLink = createHttpLink({ uri: process.env.REACT_APP_GRAPHQL_URI });
const authLink = setContext((_, operation) => {
  const token = localStorage.getItem("token");
  if (token) {
    return {
      headers: {
        ...operation.headers,
        authorization: `Bearer ${localStorage.getItem("token")}`
      }
    };
  } else {
    return operation;
  }
});

const link = authLink.concat(httpLink);

const client = new ApolloClient({ cache, link });

export default ({ children }) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
);
