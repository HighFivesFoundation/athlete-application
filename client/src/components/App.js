import React from "react";
import { useAuth } from "../hooks";
import Header from "./Header";
import Login from "./Login";
import CreateAccount from "./CreateAccount";
import Application from "./Application";
import Progress from "./Progress";
import styled, { createGlobalStyle } from "styled-components";

export default function App() {
  const { authorized } = useAuth();
  return (
    <section>
      <GlobalStyle />
      <Header />
      {authorized ? (
        <ApplicationContainer>
          <Application />
          <Progress />
        </ApplicationContainer>
      ) : (
        <AuthContainer>
          <Login />
          <CreateAccount />
        </AuthContainer>
      )}
    </section>
  );
}

const ApplicationContainer = styled.div`
  display: flex;
  div {
    flex-basis: 75%;
  }
  aside {
    flex-basis: 25%;
  }
`;

const AuthContainer = styled.section`
  height: calc(100% - 5em);
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: stretch;

  > header {
    padding: 1em 2em 0 2em;
    h1 {
      margin: 0;
      padding: 0;
      font-size: 2em;
    }
  }

  > div {
    flex-grow: 1;
    display: flex;
    section {
      border-radius: 5px;
      flex-grow: 1;
      border: solid 2px black;
      margin: 1.5em;
      padding: 0.5em;
      h2 {
        margin: 0;
        padding: 0;
      }
    }
  }
`;

const GlobalStyle = createGlobalStyle`
  html,
  body,
  #root,
  #root>section {
    font-family: Arial;
    height: 100%;
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

`;
