import React from "react";
import { render } from "react-dom";
import client from "./client";
import { ApolloProvider } from "./ApolloContext";
import App from "./components/App";

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
