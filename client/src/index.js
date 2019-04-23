import React from "react";
import { render } from "react-dom";
import { ApolloProvider } from "react-apollo";
import App from "./components/App";
import client from "./client";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html,
  body,
  #root {
    font-family: Arial;
  }

  body {
    padding: 0;
    margin: 0;
  }

  h1, h2, p, a {
    padding-left: 5px;
  }

  .breadcrumbs {
    padding-top: 15px;
  }

  .breadcrumbs a {
    padding: 5px;
  }
`;

render(
  <ApolloProvider client={client}>
    <GlobalStyle />
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
