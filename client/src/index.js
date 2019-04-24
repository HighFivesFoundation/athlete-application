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

  textarea {
    width: 70%;
    margin-top: 10px;
  }

  fieldset {
    border: 1px solid white;
    input {
      display: inline-block;
    }
  }

  h1, h2, h3, p, a {
    padding-left: 5px;
  }

  .breadcrumbs {
    padding-top: 15px;
  }

  .breadcrumbs a {
    padding: 5px;
  }

  .links {
    margin-left: 50%;
    font-weight: bold;

  }

  form {
    padding: 1.5em;
    label {
      font-weight: bold;
    }
    input {
      margin-top: 0.5em;
      margin-bottom: 1em;
      width: 50%;
      height: 30px;
      border-radius: 6px;
      display: block;
    }
    select {
      margin-top: 0.5em;
      margin-bottom: 1em;
      width: 50%;
      height: 30px;
      border-radius: 6px;
      display: block;
    }
  }

`;

render(
  <ApolloProvider client={client}>
    <GlobalStyle />
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
